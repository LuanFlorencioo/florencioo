import { ReactNode } from 'react';
import Link from 'next/link';
import { TbExternalLink } from 'react-icons/tb';

type LinkProps = {
  children: ReactNode;
  href: string;
  target?: '_blank' | '_self';
}

export function FootLink({ children, href, target = '_self' }: LinkProps) {
  return (
    <li>
      <Link
        className='text-brand-400 transition-colors flex items-center gap-2 md:hover:text-brand-300'
        href={href}
        target={target}
      >
        {children} {target === '_blank' && <TbExternalLink />}
      </Link>
    </li>
  )
}
