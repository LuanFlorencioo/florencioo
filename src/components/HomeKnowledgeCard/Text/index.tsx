import { ComponentProps } from 'react';

type TextProps = ComponentProps<'p'>;

export default function Text({ children, ...props }: TextProps) {
  return (
    <p {...props} className='text-center font-normal text-sm text-brand-100 selection:bg-brand-200 selection:text-brand-500'>
      {children}
    </p>
  )
}
