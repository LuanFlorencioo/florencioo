import {
	CardSkillItem,
	CardSkills,
	CardSkillsList,
	CardSkillsTitle,
} from "@/components/card-skills";
import { backendSkills, frontendSkills, toolsSkills } from "@/data/skills";

export default function SkillsPage() {
	return (
		<section className="w-full px-4 pt-16 md:pt-32 pb-32 background-polka selection:bg-primary selection:text-white">
			<div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-8 lg:gap-16 animate-appear opacity-0">
				<h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-foreground dark:text-primary">
					Habilidades
				</h1>

				<div className="w-full flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-center lg:gap-4">
					<CardSkills>
						<CardSkillsTitle>Back End</CardSkillsTitle>

						<CardSkillsList>
							{backendSkills.map(({ icon: Icon, label }) => (
								<CardSkillItem key={label}>
									<Icon size={32} />

									<span className="w-full text-sm truncate">{label}</span>
								</CardSkillItem>
							))}
						</CardSkillsList>
					</CardSkills>

					<CardSkills>
						<CardSkillsTitle>Front End</CardSkillsTitle>

						<CardSkillsList>
							{frontendSkills.map(({ icon: Icon, label }) => (
								<CardSkillItem key={label}>
									<Icon size={32} />

									<span className="w-full text-sm truncate">{label}</span>
								</CardSkillItem>
							))}
						</CardSkillsList>
					</CardSkills>

					<CardSkills>
						<CardSkillsTitle>Complementares</CardSkillsTitle>

						<CardSkillsList>
							{toolsSkills.map(({ icon: Icon, label }) => (
								<CardSkillItem key={label}>
									<Icon size={32} />

									<span className="w-full text-sm truncate">{label}</span>
								</CardSkillItem>
							))}
						</CardSkillsList>
					</CardSkills>
				</div>
			</div>
		</section>
	);
}
