import { ComponentProps } from 'react';

type TitleProps = ComponentProps<'h3'>;

export default function Title({ children, ...props }: TitleProps) {
  return (
    <h3 {...props} className='text-center font-bold text-xl text-brand-100 selection:bg-brand-200 selection:text-brand-500'>
      {children}
    </h3>
  )
}
