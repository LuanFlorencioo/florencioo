import { ComponentProps } from 'react';
import Link from 'next/link';

type ButtonProps = ComponentProps<'button'> & {
  href?: string;
};

export default function Button({ children, href, ...props }: ButtonProps) {
  return href
    ? (
      <Link href={href} className='w-max h-max'>
        <button {...props} className='w-max h-10 px-8 rounded-lg bg-gradient-to-b from-brand-300 to-brand-200 flex justify-center items-center gap-2 text-base text-brand-500 select-none transition md:hover:-translate-y-1 md:hover:shadow-xl md:hover:shadow-[#0099FF25]'>
          {children}
        </button>
      </Link>
    )
    : (
      <button {...props} className='w-max h-10 px-8 rounded-lg bg-gradient-to-b from-brand-300 to-brand-200 flex justify-center items-center gap-2 text-base text-brand-500 select-none transition md:hover:-translate-y-1 md:hover:shadow-xl md:hover:shadow-[#0099FF25]'>
        {children}
      </button>
    )
}
