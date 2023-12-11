import { ReactNode } from 'react';

type CopyrightProps = {
  children: ReactNode;
}

export default function Copyright({ children }: CopyrightProps) {
  return (
    <p className='text-center text-sm text-brand-500 text-opacity-50 select-none'>
      {children}
    </p>
  )
}
