import { ReactNode } from 'react';

type RootProps = {
  children: ReactNode;
}

export default function Root({ children }: RootProps) {
  return (
    <div className='flex flex-col gap-10 md:pr-12 md:flex-row md:flex-wrap md:justify-between md:items-start'>
      {children}
    </div>
  )
}
