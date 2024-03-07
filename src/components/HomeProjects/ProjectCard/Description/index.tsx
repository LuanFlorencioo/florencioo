import { ComponentProps } from 'react';

type DescriptionProps = ComponentProps<'p'>;

export default function Description({ children, ...props }: DescriptionProps) {
  return (
    <p {...props} className='w-full max-h-20 font-normal text-base text-brand-500 line-clamp-3 selection:bg-brand-400 selection:text-brand-100'>
      {children}
    </p>
  )
}
