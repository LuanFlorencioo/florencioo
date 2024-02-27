import { ComponentProps } from 'react';

type DescriptionProps = ComponentProps<'p'>;

export default function Description({ children, ...props }: DescriptionProps) {
  return (
    <p {...props} className='min-h-[48px] font-normal text-base text-brand-500 line-clamp-2 text-ellipsis selection:bg-brand-200 selection:text-brand-500'>
      {children}
    </p>
  )
}
