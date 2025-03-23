import {
	ProjectCard,
	ProjectCardBadges,
	ProjectCardContent,
	ProjectCardCover,
	ProjectCardTitle,
} from "@/components/project-card";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
	return (
		<section className="w-full px-4 pt-16 md:pt-32 pb-32 background-polka selection:bg-primary selection:text-white">
			<div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-8 md:gap-16 animate-appear opacity-0">
				<h1 className="font-bold text-3xl md:text-4xl lg:text-5xl dark:text-primary">
					Projetos
				</h1>

				<div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-center items-center gap-4">
					{projects.map((project) => (
						<ProjectCard
							key={project.id}
							appUrl={project.appUrl}
							repoUrl={project.repoUrl}
							description={project.description}
						>
							<ProjectCardCover src={project.image} alt="Cover image project" />

							<ProjectCardContent isAlwaysVisible>
								<ProjectCardTitle>{project.name}</ProjectCardTitle>

								<ProjectCardBadges badges={project.techs} />
							</ProjectCardContent>
						</ProjectCard>
					))}
				</div>
			</div>
		</section>
	);
}
