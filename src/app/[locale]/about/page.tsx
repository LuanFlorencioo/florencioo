import Image from "next/image";
import Hero from "/public/hero.png";
import {
	BookMarked,
	Clapperboard,
	Dumbbell,
	Gamepad2,
	SquareArrowOutUpRight,
	Trophy,
} from "lucide-react";
import { CVButton } from "@/components/cv-button";
import { useTranslations } from "next-intl";

export default function AboutPage() {
	const t = useTranslations("About");

	return (
		<>
			<section className="w-full px-4 py-16 background-polka selection:bg-primary selection:text-white">
				<div className="w-full max-w-5xl mx-auto flex items-start justify-between">
					<div className="w-full max-w-lg flex flex-col items-start gap-8 md:gap-16">
						<div className="flex flex-col gap-4 animate-to-r">
							<h1 className="font-bold text-3xl md:text-4xl text-foreground dark:text-primary">
								{t("main-title")}
							</h1>

							<p className="leading-7 bg-background">{t("main-text-1")}</p>

							<p className="leading-7 bg-background">{t("main-text-2")}</p>

							<CVButton>
								{t("cv-button")} <SquareArrowOutUpRight />
							</CVButton>
						</div>

						<div className="flex flex-col gap-4 animate-appear-r-1 opacity-0">
							<h2 className="font-bold text-xl md:text-2xl text-muted-foreground">
								{t("MyJourney.title")}
							</h2>

							<p className="leading-7 bg-background">{t("MyJourney.text-1")}</p>

							<p className="leading-7 bg-background">{t("MyJourney.text-2")}</p>
						</div>
					</div>

					<figure className="hidden lg:block w-[350px] aspect-square opacity-0 animate-hero">
						<Image src={Hero} alt="Hero" />
					</figure>
				</div>
			</section>

			<section className="w-full px-4 pb-32 selection:bg-primary selection:text-white">
				<div className="w-full max-w-5xl mx-auto flex flex-col items-start gap-8 md:gap-16">
					<div className="w-full max-w-lg flex flex-col gap-4 animate-appear-r-2 opacity-0">
						<h2 className="font-bold text-xl md:text-2xl text-muted-foreground">
							{t("ThirstForKnowledge.title")}
						</h2>

						<p className="leading-7 bg-background">
							{t("ThirstForKnowledge.text-1")}
						</p>

						<p className="leading-7 bg-background">
							{t("ThirstForKnowledge.text-2")}
						</p>

						<p className="leading-7 bg-background">
							{t("ThirstForKnowledge.text-3")}
						</p>
					</div>

					<div className="w-full max-w-lg flex flex-col gap-4 animate-appear-r-3 opacity-0">
						<h2 className="font-bold text-xl md:text-2xl text-muted-foreground">
							{t("Hobbies.title")}
						</h2>

						<ul className="grid grid-cols-2 gap-4">
							<li className="flex items-center gap-2">
								<Trophy size={20} className="text-primary" />{" "}
								{t("Hobbies.hobbies.football")}
							</li>

							<li className="flex items-center gap-2">
								<BookMarked size={20} className="text-primary" />{" "}
								{t("Hobbies.hobbies.read")}
							</li>

							<li className="flex items-center gap-2">
								<Gamepad2 size={20} className="text-primary" />{" "}
								{t("Hobbies.hobbies.game")}
							</li>

							<li className="flex items-center gap-2">
								<Dumbbell size={20} className="text-primary" />{" "}
								{t("Hobbies.hobbies.gym")}
							</li>

							<li className="flex items-center gap-2">
								<Clapperboard size={20} className="text-primary" />{" "}
								{t("Hobbies.hobbies.movie")}
							</li>
						</ul>

						<p className="leading-7">{t("Hobbies.text")}</p>
					</div>
				</div>
			</section>
		</>
	);
}
