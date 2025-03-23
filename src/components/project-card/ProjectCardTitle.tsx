export function ProjectCardTitle({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<h3 className="font-bold text-xl lg:text-3xl text-muted dark:text-foreground">
			{children}
		</h3>
	);
}
