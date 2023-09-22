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
    coverImage: "/images/logo-motors-shop.svg",
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
    coverImage: "/images/logo-habitum.svg",
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
    coverImage: "/images/logo-easybank.svg",
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
