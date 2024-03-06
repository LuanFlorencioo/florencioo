import { ReactNode } from 'react';

type ContentProps = {
  children: ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <div className='w-full flex flex-col gap-2'>
      {children}
    </div>
  )
}
