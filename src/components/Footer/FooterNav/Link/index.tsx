import Link from 'next/link';
import { ReactNode } from 'react';

type LinkProps = {
  children: ReactNode;
  href: string;
}

export function FootLink({ children, href }: LinkProps) {
  return (
    <li>
      <Link
        className='text-brand-400 transition-colors md:hover:text-brand-300'
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}
