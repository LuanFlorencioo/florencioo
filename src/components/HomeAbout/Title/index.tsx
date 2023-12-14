import { ComponentProps } from 'react';

type TitleProps = ComponentProps<'h2'>

export default function Title({ children, ...props }: TitleProps) {
  return (
    <h2 {...props} className='font-bold text-3xl text-brand-500'>
      {children}
    </h2>
  )
}
