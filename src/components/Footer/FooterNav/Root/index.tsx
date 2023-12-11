import { ReactNode } from 'react';

type RootProps = {
  children: ReactNode;
}

export default function Root({ children }: RootProps) {
  return (
    <div className='flex flex-col gap-10'>
      {children}
    </div>
  )
}
