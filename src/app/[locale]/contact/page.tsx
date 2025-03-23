import Link from "next/link";
import { useTranslations } from "next-intl";
import { Mail, Phone } from "lucide-react";
import {
	SiDiscord,
	SiGithub,
	SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import { Clipboard } from "@/components/clipboard";
import { LinkedinSVG } from "@/components/linkedin-svg";
import {
	discordLink,
	githubLink,
	linkedinLink,
	whatsappLink,
} from "@/data/links";
import { email, phone } from "@/data/personal-data";

export default function ContactPage() {
	const t = useTranslations("Contact");
	const squareButtons = [
		{
			href: githubLink,
			icon: <SiGithub size={36} />,
			label: "Github",
		},
		{
			href: linkedinLink,
			icon: <LinkedinSVG className="size-9 group-hover/button:fill-primary" />,
			label: "Linkedin",
		},
		{
			href: whatsappLink,
			icon: <SiWhatsapp size={36} />,
			label: "Whatsapp",
		},
		{
			href: discordLink,
			icon: <SiDiscord size={36} />,
			label: "Discord",
		},
	];

	return (
		<section className="w-full px-4 pt-16 md:pt-32 pb-32 background-polka selection:bg-primary selection:text-white">
			<div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
				<div className="w-full flex flex-col gap-8">
					<h1 className="font-bold text-3xl md:text-4xl lg:text-5xl dark:text-primary animate-appear-r opacity-0">
						{t("title")}
					</h1>

					<p className="max-w-[450px] text-lg animate-appear-r-1 opacity-0">
						{t("text")}
					</p>

					<div className="flex flex-col gap-2">
						<div className="w-max p-4 bg-accent-foreground dark:bg-primary/10 rounded border-l-8 border-primary flex flex-col gap-2 animate-appear-r-2 opacity-0">
							<h2 className="flex items-center gap-2 font-medium text-accent dark:text-foreground">
								<Mail size={18} /> {t("label-email")}
							</h2>

							<Clipboard value={email}>{email}</Clipboard>
						</div>

						<div className="w-max p-4 bg-accent-foreground dark:bg-primary/10 rounded border-l-8 border-primary flex flex-col gap-2 animate-appear-r-3 opacity-0">
							<h2 className="flex items-center gap-2 font-medium text-accent dark:text-foreground">
								<Phone size={18} /> {t("label-phone")}
							</h2>

							<Clipboard value={phone}>+55 (21) 96421-6903</Clipboard>
						</div>
					</div>
				</div>

				<div className="w-full bg-background grid grid-cols-2 grid-rows-2 gap-4 animate-appear-b-4 opacity-0">
					{squareButtons.map(({ href, icon, label }, i) => (
						<Link
							key={label}
							href={href}
							target="_blank"
							className="aspect-square"
						>
							<button
								type="button"
								className="w-full h-full hover:bg-primary/20 rounded border hover:border-primary hover:text-primary flex flex-col items-center justify-center gap-2 transition-all group/button"
							>
								{icon}
								{label}
							</button>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
