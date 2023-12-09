import { ComponentProps } from 'react'

export default function NavList({ children, ...props }: ComponentProps<'ul'>) {
  return (
    <nav className='w-full p-8 absolute top-full left-0 z-50 bg-brand-500 border-b border-[#00000010] opacity-0 animate-navbar md:w-max md:p-0 md:static md:top-0 md:border-none'>
      <menu
        className='w-full flex flex-col items-center gap-6 md:w-max md:flex-row'
        {...props}
      >
        {children}
      </menu>
    </nav>
  )
}
