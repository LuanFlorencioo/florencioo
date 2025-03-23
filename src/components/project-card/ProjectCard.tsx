import { Button } from "@/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export function ProjectCard({
	children,
	appUrl,
	description,
	repoUrl,
}: {
	children: React.ReactNode;
	repoUrl: string;
	description: string;
	appUrl?: string;
}) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<div className="w-full max-w-[300px] h-[200px] lg:max-w-[400px] lg:h-[250px] relative cursor-pointer transition-all group">
					{children}
				</div>
			</PopoverTrigger>

			<PopoverContent>
				<div className="flex flex-col gap-4">
					<p className="text-sm text-muted-foreground line-clamp-4">
						{description}
					</p>

					<div className="flex items-center gap-4">
						{appUrl && (
							<Link href={appUrl} target="_blank">
								<Button>
									<SquareArrowOutUpRight /> Ver Projeto
								</Button>
							</Link>
						)}

						<Link href={repoUrl} target="_blank">
							<Button variant="secondary">
								<SiGithub /> Repo
							</Button>
						</Link>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
