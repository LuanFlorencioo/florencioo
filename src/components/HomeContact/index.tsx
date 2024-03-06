import { ReactNode } from 'react';

type HomeContactProps = {
  children?: ReactNode;
}

export default function HomeContact({ children }: HomeContactProps) {
  return (
    <section className='w-full px-4 py-24 bg-brand-500'>
      {children}
    </section>
  )
}
