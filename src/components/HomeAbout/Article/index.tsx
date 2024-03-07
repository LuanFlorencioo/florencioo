import { ReactNode } from 'react';

type ArticleProps = {
  children: ReactNode;
}

export default function Article({ children }: ArticleProps) {
  return (
    <article className='w-full max-w-[500px] flex flex-col gap-4 md:selection:bg-brand-200'>
      {children}
    </article>
  )
}
