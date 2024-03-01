import { ReactNode } from 'react';

type RootProps = {
  children?: ReactNode;
}

export default function Root({ children }: RootProps) {
  return (
    <section className='w-full bg-brand-100 bg-dark-2 bg-center bg-cover bg-no-repeat py-20 px-4'>
      <div className='w-full max-w-default mx-auto flex flex-col items-center gap-12'>
        {children}
      </div>
    </section>
  )
}
