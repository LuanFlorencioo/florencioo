import { notFound } from "next/navigation";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { fonts } from "@/font/fonts";
import { isLocaleValid } from "@/i18n/locales";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Main } from "@/components/main";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";

export async function generateMetadata({
	params,
}: { params: Promise<{ locale: string }> }) {
	const locale = (await params).locale;
	const t = await getTranslations({ locale, namespace: "Metadata" });

	return {
		title: t("title"),
		description: t("description"),
	};
}

export default async function AppRootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const locale = (await params).locale;
	if (!isLocaleValid(locale)) notFound();
	const translations = await getMessages();

	return (
		<html
			lang={locale}
			className={`${fonts} antialiased`}
			suppressHydrationWarning
		>
			<body>
				<NextIntlClientProvider messages={translations}>
					<ThemeProvider>
						<Header />

						<Main>{children}</Main>

						<Footer />
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
