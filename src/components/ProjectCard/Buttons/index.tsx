import Link from 'next/link';
import { FaCode } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';

type ButtonsProps = {
  app?: string;
  repo?: string;
}

export default function Buttons({ app, repo }: ButtonsProps) {
  return (
    <div className='w-full flex flex-wrap items-center gap-1'>
      {
        app && (
          <Link href={app} target='_blank'>
            <button className='w-max h-9 px-7 lg:px-5 rounded bg-brand-400 flex justify-center items-center gap-2 text-base lg:text-sm text-brand-100'>
              <FiExternalLink /> Conferir
            </button>
          </Link>
        )
      }

      {
        repo && (
          <Link href={repo} target='_blank'>
            <button className='w-max h-9 px-7 rounded border border-[#FFFFFF20] bg-transparent flex justify-center items-center gap-2 text-base lg:text-sm text-brand-400'>
              <FaCode /> Código-fonte
            </button>
          </Link>
        )
      }
    </div>
  )
}
