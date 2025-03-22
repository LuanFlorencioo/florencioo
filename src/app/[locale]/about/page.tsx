import Image from "next/image";
import Link from "next/link";
import Hero from "/public/hero.png";
import {
	BookMarked,
	Clapperboard,
	Dumbbell,
	Gamepad2,
	Trophy,
} from "lucide-react";
import { CVButton } from "@/components/cv-button";

export default function AboutPage() {
	return (
		<>
			<section className="w-full px-4 py-16 background-polka selection:bg-primary selection:text-white">
				<div className="w-full max-w-5xl mx-auto flex items-start justify-between">
					<div className="w-full max-w-lg flex flex-col items-start gap-8 md:gap-16">
						<div className="flex flex-col gap-4">
							<h1 className="font-bold text-3xl md:text-4xl text-foreground dark:text-primary">
								Sobre mim
							</h1>

							<p className="leading-7 bg-background">
								Sou um Desenvolvedor Web apaixonado por criar experiências
								digitais eficientes e intuitivas. Formado em Análise e
								Desenvolvimento de Sistemas, tenho domínio em Desenvolvimento
								Web Fullstack, com especialização em tecnologias como
								JavaScript, TypeScript, React, Next.js, Node.js e NestJS.
							</p>

							<p className="leading-7 bg-background">
								Sou movido pelo desejo constante de aprender novas tecnologias
								para aprimorar meus projetos e explorar cada vez mais esse
								universo fascinante da programação.
							</p>

							<CVButton />
						</div>

						<div className="flex flex-col gap-4">
							<h2 className="font-bold text-xl md:text-2xl text-muted-foreground">
								Minha jornada
							</h2>

							<p className="leading-7 bg-background">
								Minha jornada na tecnologia começou na infância, quando
								desenvolvi uma grande curiosidade por computadores, aplicativos
								e programas. Desde então, venho aprimorando minhas habilidades
								para construir aplicações robustas e escaláveis.
							</p>

							<p className="leading-7 bg-background">
								Em 2023, concluí o curso de Desenvolvimento Web Fullstack na{" "}
								<Link
									href="https://www.kenzie.com.br/"
									target="_blank"
									className="underline underline-offset-4 hover:text-primary"
								>
									Kenzie Academy Brasil
								</Link>
								, uma escola de programação online, onde passei 12 meses em um
								aprendizado intensivo, abrangendo tanto o front-end quanto o
								back-end. No ano seguinte, em 2024, me formei em Análise e
								Desenvolvimento de Sistemas pela Unopar.
							</p>
						</div>
					</div>

					<figure className="hidden lg:block w-[350px] aspect-square opacity-0 animate-home-hero">
						<Image src={Hero} alt="Hero" />
					</figure>
				</div>
			</section>

			<section className="w-full px-4 pb-32 selection:bg-primary selection:text-white">
				<div className="w-full max-w-5xl mx-auto flex flex-col items-start gap-8 md:gap-16">
					<div className="w-full max-w-lg flex flex-col gap-4">
						<h2 className="font-bold text-xl md:text-2xl text-muted-foreground">
							Sede de conhecimento
						</h2>

						<p className="leading-7 bg-background">
							Reconheço minha capacidade não apenas de aprender, mas também de
							me aprofundar em qualquer assunto que desperte minha atenção e
							curiosidade, seja na programação, arte, astronomia ou ciência.
						</p>

						<p className="leading-7 bg-background">
							Meu objetivo ao adquirir novos conhecimentos não é impressionar os
							outros, mas sim expandir meus horizontes intelectuais e
							compreender melhor o mundo ao meu redor.
						</p>

						<p className="leading-7 bg-background">
							Tudo o que for possível aprender, entender e assimilar, estarei
							sempre disposto a absorver. Para mim, conhecimento nunca é demais.
							Tenho uma sede incessante por aprender, um espírito desbravador
							que questiona, investiga e busca respostas fundamentadas na lógica
							e na razão.
						</p>
					</div>

					<div className="w-full max-w-lg flex flex-col gap-4">
						<h2 className="font-bold text-xl md:text-2xl text-muted-foreground">
							Hobbies
						</h2>

						<ul className="grid grid-cols-2 gap-4">
							<li className="flex items-center gap-2">
								<Trophy size={20} className="text-primary" /> Futebol
							</li>

							<li className="flex items-center gap-2">
								<BookMarked size={20} className="text-primary" /> Ler Livros
							</li>

							<li className="flex items-center gap-2">
								<Gamepad2 size={20} className="text-primary" /> Videogame
							</li>

							<li className="flex items-center gap-2">
								<Dumbbell size={20} className="text-primary" /> Academia
							</li>

							<li className="flex items-center gap-2">
								<Clapperboard size={20} className="text-primary" /> Filmes
							</li>
						</ul>

						<p className="leading-7">
							Quando não estou programando, gosto de ler livros, jogar
							videogame, assistir a filmes e praticar exercícios físicos, como
							musculação, corrida ou futebol.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
