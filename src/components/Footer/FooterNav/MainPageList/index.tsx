import { ReactNode } from 'react';

type MainPageListProps = {
  children: ReactNode;
}

export default function MainPageList({ children }: MainPageListProps) {
  return (
    <ul className='pb-10 border-b-2 border-brand-200 grid grid-rows-3 grid-flow-col gap-y-4 md:gap-x-16'>
      {children}
    </ul>
  )
}
