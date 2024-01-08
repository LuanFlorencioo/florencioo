import { ReactNode } from 'react';

type RootProps = {
  children: ReactNode;
}

export default function Root({ children }: RootProps) {
  return (
    <section className='w-full min-h-screen px-5 py-24 bg-brand-100 bg-home-about bg-cover bg-center flex flex-wrap justify-center items-center md:min-h-0 md:h-max'
      id='about'
    >
      {children}
    </section>
  )
}
