import { ReactNode } from 'react';

type RootProps = {
  children?: ReactNode;
}

export default function Root({ children }: RootProps) {
  return (
    <section className='w-full px-4 py-24 bg-brand-500'>
      {children}
    </section>
  )
}
