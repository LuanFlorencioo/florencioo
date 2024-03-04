export type TechCategory = 'front-end' | 'back-end' | 'database' | 'tool' | 'testing' | 'version-control';

export type Tech = {
  label: string;
  pathname: string;
  categories: TechCategory[];
  tags: string[];
}

export const techs: Tech[] = [
  {
    label: 'Javascript',
    pathname: 'javascript.svg',
    categories: ['front-end', 'back-end'],
    tags: ['front', 'front-end', 'frontend', 'js', 'web'],
  },
  {
    label: 'Node',
    pathname: 'nodejs.svg',
    categories: ['back-end'],
    tags: ['back', 'back-end', 'backend', 'js'],
  },
  {
    label: 'PostgreSQL',
    pathname: 'postgresql.svg',
    categories: ['database'],
    tags: ['db', 'database'],
  },
  {
    label: 'React',
    pathname: 'react.svg',
    categories: ['front-end'],
    tags: ['js', 'web', 'framework', 'lib', 'library'],
  },
  {
    label: 'TailwindCSS',
    pathname: 'tailwindcss.svg',
    categories: ['front-end'],
    tags: ['css', 'style', 'lib', 'library'],
  },
  {
    categories: ['tool'],
    label: 'Dbeaver',
    pathname: 'dbeaver.svg',
    tags: ['db', 'beaver'],
  },
  {
    categories: ['tool'],
    label: 'Docker',
    pathname: 'docker.svg',
    tags: ['conteiner'],
  },
  {
    categories: ['front-end'],
    label: 'Axios',
    pathname: 'axios.svg',
    tags: ['api'],
  },
  {
    categories: ['front-end'],
    label: 'CSS',
    pathname: 'css3.svg',
    tags: ['style', 'CSS3'],
  },
  {
    categories: ['back-end'],
    label: 'Django',
    pathname: 'django.svg',
    tags: ['python', 'py', 'rest', 'framework'],
  },
  {
    categories: ['back-end'],
    label: 'Express',
    pathname: 'express.svg',
    tags: ['node', 'api', 'rest', 'framework', 'js'],
  },
  {
    categories: ['tool'],
    label: 'Figma',
    pathname: 'figma.svg',
    tags: ['design', 'ui', 'ux', 'ui/ux'],
  },
  {
    categories: ['front-end'],
    label: 'Framer Motion',
    pathname: 'framermotion.svg',
    tags: ['design', 'ui', 'animation', 'lib', 'library'],
  },
  {
    categories: ['version-control'],
    label: 'Git',
    pathname: 'git.svg',
    tags: [],
  },
  {
    categories: ['version-control'],
    label: 'Github',
    pathname: 'github.svg',
    tags: [],
  },
  {
    categories: ['back-end'],
    label: 'Google Cloud',
    pathname: 'googlecloud.svg',
    tags: ['cloud', 'gcp', 'provider', 'serverless', 'nuvem', 'aws'],
  },
  {
    categories: ['front-end'],
    label: 'HTML',
    pathname: 'html5.svg',
    tags: ['web', 'html5'],
  },
  {
    categories: ['tool'],
    label: 'Insomnia',
    pathname: 'insomnia.svg',
    tags: ['doc', 'documentation', 'api'],
  },
  {
    categories: ['testing'],
    label: 'Jest',
    pathname: 'jest.svg',
    tags: ['test', 'testing'],
  },
  {
    categories: ['tool'],
    label: 'Jira',
    pathname: 'jira.svg',
    tags: [],
  },
  {
    categories: ['tool'],
    label: 'Markdown',
    pathname: 'markdown.svg',
    tags: ['md', 'doc', 'documentation'],
  },
  {
    categories: ['back-end'],
    label: 'NestJS',
    pathname: 'nestjs.svg',
    tags: ['node', 'api', 'rest', 'framework', 'js'],
  },
  {
    categories: ['tool'],
    label: 'Netlify',
    pathname: 'netlify.svg',
    tags: ['platform', 'hosting'],
  },
  {
    categories: ['front-end'],
    label: 'NextJS',
    pathname: 'nextjs.svg',
    tags: ['web', 'react', 'framework', 'js'],
  },
  {
    categories: ['tool'],
    label: 'Notion',
    pathname: 'notion.svg',
    tags: [],
  },
  {
    categories: ['tool'],
    label: 'NPM',
    pathname: 'npm.svg',
    tags: [],
  },
  {
    categories: ['back-end', 'tool'],
    label: 'Prisma',
    pathname: 'prisma.svg',
    tags: [],
  },
  {
    categories: ['back-end'],
    label: 'Python',
    pathname: 'python.svg',
    tags: ['py', 'snake'],
  },
  {
    categories: ['tool'],
    label: 'Railway',
    pathname: 'railway.svg',
    tags: ['platform', 'hosting'],
  },
  {
    categories: ['front-end'],
    label: 'React Router',
    pathname: 'reactrouter.svg',
    tags: ['react', 'dom', 'lib', 'library'],
  },
  {
    categories: ['front-end'],
    label: 'Redux',
    pathname: 'redux.svg',
    tags: ['react', 'context', 'state', 'lib', 'library'],
  },
  {
    categories: ['front-end'],
    label: 'Sass',
    pathname: 'sass.svg',
    tags: ['style', 'css', 'scss'],
  },
  {
    categories: ['tool'],
    label: 'Slack',
    pathname: 'slack.svg',
    tags: [],
  },
  {
    categories: ['front-end'],
    label: 'Storybook',
    pathname: 'storybook.svg',
    tags: ['doc', 'documentation', 'api', 'ui', 'ux', 'design'],
  },
  {
    categories: ['tool'],
    label: 'Trello',
    pathname: 'trello.svg',
    tags: [],
  },
  {
    categories: ['front-end', 'back-end'],
    label: 'Typescript',
    pathname: 'typescript.svg',
    tags: ['ts', 'js', 'javascript', 'web'],
  },
  {
    categories: ['tool'],
    label: 'Vercel',
    pathname: 'vercel.svg',
    tags: ['platform', 'hosting'],
  },
  {
    categories: ['front-end'],
    label: 'ViteJS',
    pathname: 'vitejs.svg',
    tags: ['js', 'react'],
  },
  {
    categories: ['testing'],
    label: 'Vitest',
    pathname: 'vitest.svg',
    tags: ['test', 'testing', 'react'],
  },
  {
    categories: ['tool'],
    label: 'VScode',
    pathname: 'vscode.svg',
    tags: ['vs', 'code', 'ide'],
  },
  {
    categories: ['tool'],
    label: 'Yarn',
    pathname: 'yarn.svg',
    tags: [],
  },
  {
    categories: ['front-end'],
    label: 'Zustand',
    pathname: 'zustand.png',
    tags: ['dom', 'context', 'api', 'state', 'redux', 'react'],
  },
]