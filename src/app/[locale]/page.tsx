import Image from "next/image";
import Hero from "/public/hero.png";
import { Eye, Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Link } from "@/i18n/routing";
import { Button } from "@/ui/button";
import { Separator } from "@/ui/separator";
import { Clipboard } from "@/components/clipboard";
import { ContactLinkButtons } from "@/components/contact-link-buttons";
import { Carousel, CarouselItem } from "@/components/stack-carousel";
import {
	ProjectCard,
	ProjectCardBadges,
	ProjectCardContent,
	ProjectCardCover,
	ProjectCardTitle,
} from "@/components/project-card";
import { email } from "@/data/personal-data";
import { projects } from "@/data/projects";
import { githubLink, linkedinLink } from "@/data/links";
import { backendSkills, frontendSkills, toolsSkills } from "@/data/skills";
import { LinkedinSVG } from "@/components/linkedin-svg";
import { useTranslations } from "next-intl";

export default function Home() {
	const t = useTranslations("Home");

	return (
		<>
			<section className="w-full px-4 py-48 background-poly">
				<div className="w-full max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-32">
					<div className="pl-5 flex flex-col gap-4 relative">
						<span className="w-1 h-full bg-foreground absolute top-0 left-0 opacity-0 animate-appear-r-3" />

						<h1 className="font-bold text-5xl select-none animate-to-b">
							Luan Florencio
						</h1>

						<p className="max-w-[300px] font-light text-2xl select-none opacity-0 animate-appear-b-1">
							{t("Welcome.text")}
						</p>

						<div className="flex items-center gap-2">
							<Link href="/about">
								<Button
									variant="default"
									className="bg-foreground text-background transition-colors opacity-0 animate-appear-b-2"
								>
									{t("Welcome.button")}
								</Button>
							</Link>

							<Link href={githubLink} target="_blank">
								<Button
									variant="outline"
									size="icon"
									className="opacity-0 animate-appear-b-3"
								>
									<SiGithub />
								</Button>
							</Link>

							<Link href={linkedinLink} target="_blank">
								<Button
									variant="outline"
									size="icon"
									className="opacity-0 animate-appear-b-4"
								>
									<LinkedinSVG />
								</Button>
							</Link>
						</div>
					</div>

					<figure className="hidden md:block md:w-[240px] lg:w-[300px] aspect-square opacity-0 animate-hero">
						<Image src={Hero} alt={t("Welcome.illustration-alt")} />
					</figure>
				</div>
			</section>

			<section className="w-full px-4 relative">
				<span className="w-full h-16 absolute -top-16 left-0 bg-gradient-to-t from-background" />

				<div className="w-full max-w-6xl mx-auto flex flex-col gap-2 text-muted-foreground relative">
					{[frontendSkills, backendSkills, toolsSkills].map((skills, i) => (
						<Carousel
							key={`skills_${i + 1}`}
							autoScrollOpts={{
								direction: i % 2 === 0 ? "backward" : "forward",
								speed: 1,
								startDelay: 800,
								stopOnInteraction: false,
								stopOnMouseEnter: true,
							}}
						>
							{skills.map(({ label, icon: Icon }) => (
								<CarouselItem key={label}>
									<Icon
										size={
											44 - 6 * i // [44, 38, 32]
										}
									/>
								</CarouselItem>
							))}
						</Carousel>
					))}
					<span className="w-8 sm:w-16 md:w-32 h-full absolute top-0 left-0 bg-gradient-to-r from-background" />
					<span className="w-8 sm:w-16 md:w-32 h-full absolute top-0 right-0 bg-gradient-to-l from-background" />
				</div>
			</section>

			<section className="w-full px-4 py-16 bg-gradient-to-b from-background via-foreground/20 to-background dark:via-background dark:to-primary/25">
				<div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-16">
					<h2 className="font-bold text-2xl md:text-3xl selection:bg-primary">
						{t("Projects.title")}
					</h2>

					<div className="w-full flex flex-col items-center justify-center gap-8 relative md:flex-row md:flex-wrap">
						{projects.slice(0, 3).map((project) => (
							<ProjectCard
								key={project.id}
								repoUrl={project.repoUrl}
								appUrl={project.appUrl}
								description={project.description}
							>
								<ProjectCardCover
									src={project.image}
									alt={`Project ${project.name} image cover`}
								/>

								<ProjectCardContent>
									<ProjectCardTitle>{project.name}</ProjectCardTitle>
									<ProjectCardBadges badges={project.techs} />
								</ProjectCardContent>
							</ProjectCard>
						))}
					</div>

					<div className="w-full flex items-center justify-center gap-4">
						<span className="size-2 rounded-full bg-primary" />
						<span className="size-4 rounded-full bg-primary" />
						<Link href="/projects">
							<Button className="flex items-center gap-2" size="lg">
								<Eye /> {t("Projects.button")}
							</Button>
						</Link>
						<span className="size-4 rounded-full bg-primary" />
						<span className="size-2 rounded-full bg-primary" />
					</div>
				</div>
			</section>

			<section className="w-full px-4 py-32 background-space selection:bg-primary selection:text-white">
				<div className="w-full max-w-[400px] mx-auto flex flex-col items-center gap-16 static">
					<div className="w-full flex flex-col items-center gap-2">
						<p className="font-bold text-lg text-white text-center">
							{t("Contact.title")}
						</p>

						<p className="font-bold text-4xl text-white text-center">
							{t("Contact.text")}
						</p>
					</div>

					<div className="w-full flex flex-col items-center justify-center gap-8">
						<Clipboard value={email}>
							<Mail size={14} /> {email}
						</Clipboard>

						<span className="w-20">
							<Separator />
						</span>

						<ContactLinkButtons />
					</div>
				</div>
			</section>
		</>
	);
}
