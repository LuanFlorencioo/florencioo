export type ProjectData = {
	id: string;
	name: string;
	techs: string[];
	tags: string[];
	cover_img: string;
	github_url: string;
	app_url: string;
};

export const projects: ProjectData[] = [
	{
		id: "3546eeb3-66d9-49a0-8147-d2ca82fef167",
		name: "News Homepage",
		techs: ["NextJS", "TailwindCSS", "i18n"],
		tags: ["next", "landing page", "internationalization"],
		cover_img: "/project-covers/news-homepage.png",
		github_url: "https://github.com/LuanFlorencioo/news-homepage/",
		app_url: "https://lf-news-homepage.vercel.app/",
	},
	{
		id: "00e4d4e6-fa1c-4b0f-bb24-cb690926e681",
		name: "Todo App",
		techs: ["React", "TailwindCSS", "Zustand"],
		tags: ["reactjs", "javascript", "typescript", "states"],
		cover_img: "/project-covers/todo-app.png",
		github_url: "https://github.com/LuanFlorencioo/todo-app/",
		app_url: "https://lf-todo-app.vercel.app/",
	},
	{
		id: "d4fd96bd-7d85-4184-a65e-374469ca6587",
		name: "Easybank",
		techs: ["NextJS", "TailwindCSS"],
		tags: ["landing page"],
		cover_img: "/project-covers/easybank.png",
		github_url: "https://github.com/LuanFlorencioo/easybank/",
		app_url: "https://lf-easybank.vercel.app/",
	},
];
