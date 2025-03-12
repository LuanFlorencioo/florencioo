import { Badge } from "@/ui/badge";

export function ProjectCardBadges({
	badges,
}: {
	badges: string[];
}) {
	return (
		<div className="w-full flex items-center gap-2">
			{badges.map((tech, i) => (
				<Badge key={`tech_${i + 1}`} variant="secondary">
					{tech}
				</Badge>
			))}
		</div>
	);
}
