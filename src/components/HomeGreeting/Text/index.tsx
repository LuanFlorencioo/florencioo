import { ComponentProps } from 'react';

type TextProps = ComponentProps<'p'>;

export default function Text({ children, ...props }: TextProps) {
  return (
    <p {...props} className='max-w-[475px] font-normal text-lg text-brand-100 md:text-xl opacity-0 animate-home-greeting-text'>
      {children}
    </p>
  )
}
