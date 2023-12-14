import { ComponentProps } from 'react';

type TextProps = ComponentProps<'p'>

export default function Text({ children, ...props }: TextProps) {
  return (
    <p {...props} className='font-normal text-base text-brand-500'>
      {children}
    </p>
  )
}
