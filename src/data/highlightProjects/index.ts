type HighlightProject = {
  title: string;
  image: string;
  description: string;
  tags: string[];
  repo: string;
  app: string;
}

export const highlightProjects: HighlightProject[] = [
  {
    title: 'Todo App',
    image: 'https://qyydlvjdpkbnmtwljmdt.supabase.co/storage/v1/object/public/project-images/todo-app/alt-1.png',
    description: 'Um simples e rápido gerenciador de tarefas online',
    tags: ['reactjs', 'typescript', 'zustand'],
    app: 'https://lf-todo-app.vercel.app/',
    repo: 'todo-app',
  },
  {
    title: 'News Homepage',
    image: 'https://qyydlvjdpkbnmtwljmdt.supabase.co/storage/v1/object/public/project-images/news-homepage/alt-1.png',
    description: 'Uma página inicial de notícias estáticas que se adapta a diferentes idiomas',
    tags: ['nextjs', 'typescript', 'tailwindCSS'],
    app: 'https://lf-news-homepage.vercel.app',
    repo: 'news-homepage',
  },
  {
    title: 'Easybank',
    image: 'https://qyydlvjdpkbnmtwljmdt.supabase.co/storage/v1/object/public/project-images/easybank/main.png',
    description: 'Landing Page sobre um banco digital online',
    tags: ['nextjs', 'typescript', 'tailwindCSS'],
    app: 'https://lf-easybank.vercel.app',
    repo: 'easybank',
  }
]
