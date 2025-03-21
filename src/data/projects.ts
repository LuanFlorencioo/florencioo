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
