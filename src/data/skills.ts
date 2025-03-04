import {
	type IconType,
	SiBiome,
	SiClerk,
	SiCss3,
	SiCypress,
	SiDjango,
	SiDocker,
	SiExpress,
	SiFigma,
	SiGit,
	SiGithub,
	SiGithubactions,
	SiHtml5,
	SiInsomnia,
	SiJavascript,
	SiJest,
	SiJira,
	SiLinux,
	SiNestjs,
	SiNextdotjs,
	SiNodedotjs,
	SiNotion,
	SiPostgresql,
	SiPrisma,
	SiPython,
	SiReact,
	SiRedux,
	SiSass,
	SiShadcnui,
	SiSqlite,
	SiStorybook,
	SiStyledcomponents,
	SiSupabase,
	SiSwagger,
	SiTailwindcss,
	SiTypeorm,
	SiTypescript,
	SiVite,
	SiVitest,
	SiZod,
} from "@icons-pack/react-simple-icons";

type Skill = {
	icon: IconType;
	label: string;
};

export const frontendSkills: Skill[] = [
	{
		label: "HTML",
		icon: SiHtml5,
	},
	{
		label: "CSS",
		icon: SiCss3,
	},
	{
		label: "Javascript",
		icon: SiJavascript,
	},
	{
		label: "React",
		icon: SiReact,
	},
	{
		label: "Next.JS",
		icon: SiNextdotjs,
	},
	{
		label: "Vite",
		icon: SiVite,
	},
	{
		label: "Redux",
		icon: SiRedux,
	},
	{
		label: "Styled-components",
		icon: SiStyledcomponents,
	},
	{
		label: "Sass",
		icon: SiSass,
	},
	{
		label: "TailwindCSS",
		icon: SiTailwindcss,
	},
	{
		label: "Shadcn-ui",
		icon: SiShadcnui,
	},
	{
		label: "Storybook",
		icon: SiStorybook,
	},
];

export const backendSkills: Skill[] = [
	{
		icon: SiNodedotjs,
		label: "Node",
	},
	{
		icon: SiTypescript,
		label: "Typescript",
	},
	{
		icon: SiExpress,
		label: "Express.js",
	},
	{
		icon: SiNestjs,
		label: "NestJS",
	},
	{
		icon: SiPostgresql,
		label: "PostgreSQL",
	},
	{
		icon: SiSqlite,
		label: "SQLite",
	},
	{
		icon: SiSupabase,
		label: "Supabase",
	},
	{
		icon: SiPython,
		label: "Python",
	},
	{
		icon: SiDjango,
		label: "Django",
	},
	{
		icon: SiSwagger,
		label: "Swagger",
	},
];

export const toolsSkills: Skill[] = [
	{
		icon: SiPrisma,
		label: "Prisma",
	},
	{
		icon: SiGithub,
		label: "Github",
	},
	{
		icon: SiBiome,
		label: "Biome",
	},
	{
		icon: SiFigma,
		label: "Figma",
	},
	{
		icon: SiGit,
		label: "Git",
	},
	{
		icon: SiGithubactions,
		label: "Github Actions",
	},
	{
		icon: SiClerk,
		label: "Clerk",
	},
	{
		icon: SiZod,
		label: "Zod",
	},
	{
		icon: SiTypeorm,
		label: "TypeORM",
	},
	{
		icon: SiJest,
		label: "Jest",
	},
	{
		icon: SiCypress,
		label: "Cypress",
	},
	{
		icon: SiVitest,
		label: "Vitest",
	},
	{
		icon: SiJira,
		label: "Jira",
	},
	{
		icon: SiLinux,
		label: "Linux",
	},
	{
		icon: SiDocker,
		label: "Docker",
	},
	{
		icon: SiInsomnia,
		label: "Insomnia",
	},
	{
		icon: SiNotion,
		label: "Notion",
	},
];
