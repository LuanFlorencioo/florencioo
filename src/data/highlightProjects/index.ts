type Project = {
  title: string;
  image: string;
  description: string;
  tags: string[];
  repo: string;
  app: string;
}

export const highlightProjects: Project[] = [
  {
    title: 'Todo App',
    image: '/imgs/projects/todo-app/main.png',
    description: 'Um simples e rápido gerenciador de tarefas online',
    tags: ['reactjs', 'typescript', 'zustand'],
    app: 'https://lf-todo-app.vercel.app/',
    repo: 'todo-app',
  },
  {
    title: 'News Homepage',
    image: '/imgs/projects/news-homepage/main.png',
    description: 'Uma página inicial de notícias estáticas que se adapta a diferentes idiomas',
    tags: ['nextjs', 'typescript', 'tailwindCSS'],
    app: 'https://lf-news-homepage.vercel.app',
    repo: 'news-homepage',
  },
  {
    title: 'Easybank',
    image: '/imgs/projects/easybank/main.png',
    description: 'Landing Page sobre um banco digital online',
    tags: ['nextjs', 'typescript', 'tailwindCSS'],
    app: 'https://lf-easybank.vercel.app',
    repo: 'easybank',
  }
]
