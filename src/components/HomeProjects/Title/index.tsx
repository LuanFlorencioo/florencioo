import { ComponentProps } from 'react';

type TitleProps = ComponentProps<'h2'>;

export default function Title({ children, ...props }: TitleProps) {
  return (
    <h2 {...props} className='font-bold text-2xl text-brand-500 text-center selection:bg-brand-500 selection:text-brand-200'>
      {children}
    </h2>
  )
}
