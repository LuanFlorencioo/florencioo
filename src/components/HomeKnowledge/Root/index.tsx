import { ReactNode } from 'react';

type RootProps = {
  children: ReactNode;
}

export default function Root({ children }: RootProps) {
  return (
    <section className='w-full min-h-screen px-4 py-24 bg-brand-500 flex flex-col justify-center items-center gap-7'>
      {children}
    </section>
  )
}
