import { ReactNode } from 'react';

type FooterTitleProps = {
  children: ReactNode;
}

export default function FooterTitle({ children }: FooterTitleProps) {
  return (
    <p className='font-bold text-xl text-brand-500 md:w-full md:text-2xl md:selection:bg-brand-200'>
      {children}
    </p>
  )
}
