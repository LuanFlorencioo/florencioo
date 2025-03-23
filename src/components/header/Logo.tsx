import Image from "next/image";
import { Link } from "@/i18n/routing";
import LF from "/public/logo.svg";

export function Logo({ children }: { children: React.ReactNode }) {
	return (
		<Link href="/" className="flex items-center gap-2 group">
			<Image src={LF} alt="Logo" width={32} />

			<strong className="font-bold text-xl tracking-wide transition-colors group-hover:text-primary">
				{children}
			</strong>
		</Link>
	);
}
