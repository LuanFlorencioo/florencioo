import Link from "next/link";
import { Button } from "@/ui/button";

export function ButtonIconLink({
	children,
	link,
}: {
	children: React.ReactNode;
	link: string;
}) {
	return (
		<Link href={link} target="_blank">
			<Button variant="outline" size="icon">
				{children}
			</Button>
		</Link>
	);
}
