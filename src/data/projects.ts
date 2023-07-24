interface ProjectData {
  coverImage: string
  title: string
  tags: string[]
  description: string
  repo: string
  app: string
}

const projects: ProjectData[] = [
  {
    coverImage: "/images/motor-shop.png",
    title: "Motors Shop",
    tags: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
    ],
    description: "Plataforma online de anúncio e compra de carros",
    repo: "https://github.com/Projeto-FullStackk/frontend",
    app: "https://motorshop-joaobuga35.vercel.app/",
  },
  {
    coverImage: "/images/habitum.png",
    title: "Habitum",
    tags: [
      "React",
      "Typescript",
      "Styled-components"
    ],
    description: "App de acompanhamente de hábitos gamificado",
    repo: "https://github.com/Habitum/web",
    app: "https://web-ecru-alpha.vercel.app/",
  },
  {
    coverImage: "/images/easybank.png",
    title: "Easybank",
    tags: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
    ],
    description: "Landing Page para um banco digital",
    repo: "https://github.com/LuanFlorencioo/easybank",
    app: "https://lf-easybank.vercel.app/",
  },
];

export default projects;
