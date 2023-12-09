import { ReactNode } from 'react'

type HeaderTitleProps = {
  children: ReactNode;
}

export default function HeaderTitle({ children }: HeaderTitleProps) {
  return (
    <h1 className='font-bold text-xl md:text-2xl text-brand-100'>
      {children}
    </h1>
  )
}
