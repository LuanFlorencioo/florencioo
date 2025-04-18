import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function ThemeProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<NextThemeProvider
			attribute="class"
			defaultTheme="dark"
			disableTransitionOnChange
		>
			{children}
		</NextThemeProvider>
	);
}
