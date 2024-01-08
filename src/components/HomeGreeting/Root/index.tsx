import { ReactNode } from 'react';
import LinkButton from '../LinkButton';

type RootProps = {
  children: ReactNode;
}

export default function Root({ children }: RootProps) {
  return (
    <section className='w-full h-screen px-6 relative flex flex-col justify-center items-center gap-4 text-center md:gap-7 md:selection:bg-brand-200 md:selection:text-brand-500'>
      {children}

      <LinkButton />
    </section>
  )
}
