import { type LucideIcon, Menu } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/ui/sheet";

export function NavMenu({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<nav className="hidden md:block">
			<ul className="flex items-center gap-4 lg:gap-8 font-semibold text-sm">
				{children}
			</ul>
		</nav>
	);
}

export function NavMenuItem({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) {
	return (
		<li>
			<Link href={href}>{children}</Link>
		</li>
	);
}

export function NavMenuMobile({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon" className="md:hidden">
					<Menu />
				</Button>
			</SheetTrigger>

			<SheetContent>{children}</SheetContent>
		</Sheet>
	);
}

export function NavMenuMobileHeader({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<SheetHeader>
			<SheetTitle>{title}</SheetTitle>

			<SheetDescription>{description}</SheetDescription>
		</SheetHeader>
	);
}

export function NavMenuMobileContent({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<nav>
			<ul className="flex flex-col items-center gap-4">{children}</ul>
		</nav>
	);
}

export function NavMenuMobileItem({
	children,
	href,
	icon: Icon,
}: {
	children: React.ReactNode;
	href: string;
	icon: LucideIcon;
}) {
	return (
		<li className="font-semibold text-base">
			<Link href={href} className="px-4 py-2 flex items-center gap-2">
				<Icon size={18} /> {children}
			</Link>
		</li>
	);
}

export function NavMenuMobileFooter({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SheetFooter>
			<div className="pb-8 flex items-center justify-center gap-4">
				{children}
			</div>
		</SheetFooter>
	);
}
