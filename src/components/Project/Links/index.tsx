import Link from 'next/link';
import { FaCode } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

type LinksProps = {
  app?: string;
  repo?: string;
}

export function Links({ app, repo }: LinksProps) {
  return (
    <div className='h-[100px] sm:h-max flex flex-col justify-between gap-2'>
      {
        app && (
          <Link href={app} target='_blank'>
            <button className='w-max sm:w-[175px] h-10 px-7 sm:px-0 rounded bg-brand-400 flex justify-center items-center gap-2 text-base lg:text-sm text-brand-100'>
              <FiExternalLink /> Conferir
            </button>
          </Link>
        )
      }

      {
        repo && (
          <Link href={repo} target='_blank'>
            <button className='w-max sm:w-[175px] h-10 px-7 sm:px-0 rounded border border-[#FFFFFF20] bg-transparent flex justify-center items-center gap-2 text-base lg:text-sm text-brand-400'>
              <FaCode /> Código-fonte
            </button>
          </Link>
        )
      }
    </div>
  )
}
