import Link from "next/link";

export function ProjectCard({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) {
	return (
		<Link
			href={href}
			target="_blank"
			className="w-full max-w-[300px] h-[200px] lg:max-w-[400px] lg:h-[250px]"
		>
			<div className="w-full h-full relative cursor-pointer transition-all group">
				{children}
			</div>
		</Link>
	);
}
