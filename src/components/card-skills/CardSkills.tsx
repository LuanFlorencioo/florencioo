import { Separator } from "@/ui/separator";

export function CardSkills({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full max-w-[375px] sm:max-w-[680px] md:max-w-[750px] lg:max-w-[320px] px-2 pt-8 pb-2 lg:bg-background lg:border rounded-md flex flex-col lg:items-center gap-4">
			{children}
		</div>
	);
}

export function CardSkillsTitle({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<h2 className="font-bold text-2xl text-muted-foreground">{children}</h2>
			<Separator className="max-w-16 bg-primary" />
		</>
	);
}

export function CardSkillsList({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ul className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 items-start gap-2">
			{children}
		</ul>
	);
}

export function CardSkillItem({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<li className="p-2 bg-gradient-to-b from-background to-muted dark:to-muted/50 border rounded flex items-center justify-start gap-4">
			{children}
		</li>
	);
}
