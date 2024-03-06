import { ComponentProps } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { pages } from '@/data';

export default function NavLinks({ ...props }: ComponentProps<'li'>) {
  const currentPath = usePathname();

  return (
    <>
      {
        pages.map(({ href, label }) => (
          <li
            {...props}
            className='font-bold text-base text-brand-100 data-[highlighted=true]:bg-gradient-to-r from-brand-300 to-brand-200 data-[highlighted=true]:text-transparent data-[highlighted=true]:bg-clip-text transition-colors md:hover:text-brand-300'
            data-highlighted={currentPath === href}
            key={label}
          >
            <Link href={href}>
              {label}
            </Link>
          </li>
        ))
      }
    </>
  )
}
