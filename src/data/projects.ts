export type ProjectData = {
	id: string;
	name: string;
	description: string;
	techs: string[];
	tags: string[];
	image: string;
	repoUrl: string;
	appUrl: string;
};

export const projects: ProjectData[] = [
	{
		id: "4b6beabd-1eb2-41a0-87b2-e86a037adeba",
		name: "Gerador UUID",
		description:
			"Um gerador simples de UUID v4 com cópia para a área de transferência.",
		techs: ["VueJS", "TailwindCSS", "Motion"],
		tags: ["vuejs", "javascript", "typescript"],
		image: "/project-covers/gerador-uuid.png",
		repoUrl: "https://github.com/LuanFlorencioo/gerador-uuid/",
		appUrl: "https://gerador-uuid.vercel.app/",
	},
	{
		id: "3546eeb3-66d9-49a0-8147-d2ca82fef167",
		name: "News Homepage",
		description:
			"Uma página inicial de notícias estáticas que se ajusta a diferentes idiomas.",
		techs: ["NextJS", "TailwindCSS", "i18n"],
		tags: ["next", "landing page", "internationalization"],
		image: "/project-covers/news-homepage.png",
		repoUrl: "https://github.com/LuanFlorencioo/news-homepage/",
		appUrl: "https://lf-news-homepage.vercel.app/",
	},
	{
		id: "00e4d4e6-fa1c-4b0f-bb24-cb690926e681",
		name: "Todo App",
		description:
			"Um simples e rápido gerenciador de tarefas online com funcionalidade de tema escuro.",
		techs: ["React", "TailwindCSS", "Zustand"],
		tags: ["reactjs", "javascript", "typescript", "states"],
		image: "/project-covers/todo-app.png",
		repoUrl: "https://github.com/LuanFlorencioo/todo-app/",
		appUrl: "https://lf-todo-app.vercel.app/",
	},
	{
		id: "1c4052a5-b046-4f71-b28a-dc8ff9847f82",
		name: "GitSearch",
		description: "Uma aplicação de busca de repositórios e usuários do GitHub.",
		techs: ["Angular", "SCSS"],
		tags: ["angular", "typescript", "scss", "sass", "github"],
		image: "/project-covers/gitsearch.png",
		repoUrl: "https://github.com/LuanFlorencioo/angular-gitsearch/",
		appUrl: "https://angular-gitsearch.vercel.app/",
	},
	{
		id: "d4fd96bd-7d85-4184-a65e-374469ca6587",
		name: "Easybank",
		description:
			"Uma Landing Page estática que se adapta a qualquer tamanho de tela ou dispositivo.",
		techs: ["NextJS", "TailwindCSS"],
		tags: ["landing page"],
		image: "/project-covers/easybank.png",
		repoUrl: "https://github.com/LuanFlorencioo/easybank/",
		appUrl: "https://lf-easybank.vercel.app/",
	},
];
