import Link from 'next/link';
import { FaCode } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';

type ButtonsProps = {
  appLink: string;
  repoLink: string;
}

export default function Buttons({ appLink, repoLink }: ButtonsProps) {
  return (
    <div className='w-full flex flex-wrap gap-2'>
      <Link className='w-max h-max' href={appLink} target='_blank'>
        <button className='w-full xs:w-max h-9 px-8 rounded bg-brand-400 flex justify-center items-center gap-2 text-sm text-brand-100 transition-colors md:hover:bg-brand-300 md:hover:text-brand-500'>
          <FiExternalLink /> Conferir
        </button>
      </Link>

      <Link className='w-max h-max'
        href={`https://github.com/LuanFlorencioo/${repoLink}`}
        target='_blank'
      >
        <button className='w-full xs:w-max h-9 px-8 rounded border border-[#ffffff20] bg-transparent flex justify-center items-center gap-2 text-sm text-brand-500 transition-colors md:hover:text-brand-200'>
          <FaCode /> Código-fonte
        </button>
      </Link>
    </div>
  )
}
