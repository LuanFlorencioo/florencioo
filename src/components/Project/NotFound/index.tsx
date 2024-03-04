import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';

export function NotFound() {
  return (
    <main className='w-full min-h-screen bg-brand-100 flex flex-col justify-center items-center gap-5'>
      <p className='font-bold text-lg text-brand-400'>
        Ops!
      </p>

      <p className='max-w-[250px] font-normal text-base text-brand-500 text-center'>
        Projeto não foi encontrado. Tente novamente mais tarde.
      </p>

      <Link href='/projetos' className='flex items-center gap-2 text-brand-200'>
        <FaArrowLeftLong /> Voltar
      </Link>
    </main>
  )
}
