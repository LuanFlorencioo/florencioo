import { ComponentProps } from 'react';

type TitleProps = ComponentProps<'h2'>;

export default function Title({ children, ...props }: TitleProps) {
  return (
    <h2 {...props} className='max-w-[500px] font-bold text-4xl text-brand-100 sm:text-6xl opacity-0 animate-home-greeting-title'>
      {children}
    </h2>
  )
}
