import { ComponentProps } from 'react';

type RootProps = ComponentProps<'li'>;

export default function Root({ children, ...props }: RootProps) {
  return (
    <li {...props} className='min-w-[300px] h-[375px] px-5 py-10 bg-[#C8E8FE20] rounded-lg border border-brand-400 flex flex-col items-center gap-3'>
      {children}
    </li>
  )
}
