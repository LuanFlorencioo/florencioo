import { ReactNode } from 'react';

type TextProps = {
  children?: ReactNode;
}

export function Text({ children }: TextProps) {
  return (
    <p className='font-normal text-lg text-brand-500'>
      {children}
    </p>
  )
}
