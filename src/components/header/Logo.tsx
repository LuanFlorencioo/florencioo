import { Link } from "@/i18n/routing";

export function Logo({ children }: { children: React.ReactNode }) {
	return (
		<Link href="/" className="group">
			<strong className="font-flat text-2xl underline underline-offset-4 tracking-wide transition-colors group-hover:text-primary">
				{children}
			</strong>
		</Link>
	);
}
