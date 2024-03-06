import { ReactNode } from 'react';

type ContentProps = {
  children?: ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <div className='w-full px-2 py-6 xs:px-10 flex flex-col gap-8'>
      <h2 className='pb-4 border-b-2 border-brand-200 font-bold text-2xl text-brand-100 md:selection:bg-brand-200 md:selection:text-brand-500'>
        Contato
      </h2>

      {children}
    </div>
  )
}
