import { useTranslations } from "next-intl";
import { SiGithub } from "@icons-pack/react-simple-icons";
import {
	type LucideIcon,
	FileCode2,
	Gem,
	Home,
	UserCircle2,
	Send,
} from "lucide-react";
import { Logo } from "./Logo";
import { ButtonTheme } from "./ButtonTheme";
import { ButtonLanguage } from "./ButtonLanguage";
import { ButtonIconLink } from "./ButtonIconLink";
import {
	NavMenu,
	NavMenuItem,
	NavMenuMobile,
	NavMenuMobileContent,
	NavMenuMobileFooter,
	NavMenuMobileHeader,
	NavMenuMobileItem,
} from "./NavMenu";
import { LinkedinSVG } from "@/components/linkedin-svg";
import { githubLink, linkedinLink } from "@/data/links";

export function Header() {
	const t = useTranslations("Header");

	const links: {
		label: string;
		href: string;
		icon: LucideIcon;
	}[] = [
		{
			label: t("NavMenuItems.home"),
			href: "/",
			icon: Home,
		},
		{
			label: t("NavMenuItems.about"),
			href: "/about",
			icon: UserCircle2,
		},
		{
			label: t("NavMenuItems.skills"),
			href: "/skills",
			icon: Gem,
		},
		{
			label: t("NavMenuItems.projects"),
			href: "/projects",
			icon: FileCode2,
		},
		{
			label: t("NavMenuItems.contact"),
			href: "/contact",
			icon: Send,
		},
	];

	return (
		<header className="w-full p-4 border-b bg-background/20 backdrop-blur-sm sticky top-0 left-0 z-10">
			<div className="w-full max-w-6xl mx-auto flex items-center justify-between">
				<div className="flex items-center gap-4 lg:gap-8">
					<Logo>Florencioo</Logo>

					<span className="hidden md:block w-0.5 h-5 bg-muted" />

					<NavMenu>
						{links.slice(1).map(({ href, label }) => (
							<NavMenuItem key={label} href={href}>
								{label}
							</NavMenuItem>
						))}
					</NavMenu>
				</div>

				<div className="hidden md:flex items-center gap-4">
					<div className="flex items-center gap-2">
						<ButtonIconLink link={githubLink}>
							<SiGithub />
						</ButtonIconLink>

						<ButtonIconLink link={linkedinLink}>
							<LinkedinSVG />
						</ButtonIconLink>
					</div>

					<span className="w-0.5 h-5 bg-muted" />

					<div className="flex items-center gap-2">
						<ButtonTheme />

						<ButtonLanguage />
					</div>
				</div>

				<NavMenuMobile>
					<NavMenuMobileHeader
						title={t("title")}
						description={t("description")}
					/>

					<NavMenuMobileContent>
						{links.map(({ href, label, icon }) => (
							<NavMenuMobileItem key={label} href={href} icon={icon}>
								{label}
							</NavMenuMobileItem>
						))}
					</NavMenuMobileContent>

					<NavMenuMobileFooter>
						<div className="flex items-center gap-2">
							<ButtonIconLink link={githubLink}>
								<SiGithub />
							</ButtonIconLink>

							<ButtonIconLink link={linkedinLink}>
								<LinkedinSVG />
							</ButtonIconLink>
						</div>

						<span className="w-0.5 h-5 bg-muted" />

						<div className="flex items-center gap-2">
							<ButtonTheme />

							<ButtonLanguage />
						</div>
					</NavMenuMobileFooter>
				</NavMenuMobile>
			</div>
		</header>
	);
}
