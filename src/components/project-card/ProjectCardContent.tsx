export function ProjectCardContent({
	children,
	isAlwaysVisible = false,
}: {
	children: React.ReactNode;
	isAlwaysVisible?: boolean;
}) {
	return (
		<div
			className={`w-full h-2/3 pl-4 pb-4 rounded-md absolute left-0 bottom-0 bg-gradient-to-t from-foreground dark:from-background flex flex-col items-start justify-end gap-2 ${!isAlwaysVisible && "lg:pb-0 lg:opacity-0 transition-all lg:group-hover:opacity-100 lg:group-hover:pb-4"}`}
		>
			{children}
		</div>
	);
}
