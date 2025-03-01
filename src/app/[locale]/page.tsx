import Image from "next/image";
import Hero from "/public/hero.png";
import { Linkedin } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Link } from "@/i18n/routing";
import { Button } from "@/ui/button";
import { githubLink, linkedinLink } from "@/data/links";

export default function Home() {
	return (
		<>
			<section className="w-full px-4 py-48 background-poly">
				<div className="w-full max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-32">
					<div className="pl-5 flex flex-col gap-4 relative">
						<span className="w-1 h-full bg-foreground absolute top-0 left-0 animate-track" />

						<h1 className="font-bold text-5xl select-none animate-home-greetings-h1">
							Luan Florencio
						</h1>

						<p className="max-w-[300px] font-light text-2xl select-none opacity-0 animate-home-greetings-p">
							Desenvolvedor Web FullStack | Frontend
						</p>

						<div className="flex items-center gap-2">
							<Link href="/about">
								<Button
									variant="default"
									className="opacity-0 animate-home-greetings-button-about"
								>
									Sobre Mim
								</Button>
							</Link>

							<Link href={githubLink} target="_blank">
								<Button
									variant="outline"
									size="icon"
									className="opacity-0 animate-home-greetings-button-github"
								>
									<SiGithub />
								</Button>
							</Link>

							<Link href={linkedinLink} target="_blank">
								<Button
									variant="outline"
									size="icon"
									className="opacity-0 animate-home-greetings-button-whatsapp"
								>
									<Linkedin />
								</Button>
							</Link>
						</div>
					</div>

					<figure className="hidden md:block md:w-[240px] lg:w-[300px] aspect-square opacity-0 animate-home-hero">
						<Image src={Hero} alt="Hero" />
					</figure>
				</div>
			</section>
		</>
	);
}
