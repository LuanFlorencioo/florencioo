import { ReactNode } from 'react';

type ArticleProps = {
  children?: ReactNode;
}

export default function Article({ children }: ArticleProps) {
  return (
    <article className='w-full max-w-5xl mx-auto rounded-lg border border-brand-400 bg-brand-500 shadow-2xl flex flex-col md:flex-row-reverse md:bg-light-3 md:bg-right-bottom md:bg-cover md:bg-no-repeat'>
      {children}
    </article>
  )
}
