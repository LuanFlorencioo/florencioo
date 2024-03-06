import { CgSpinner } from 'react-icons/cg';

export default function Loading() {
  return (
    <main className='w-full h-screen bg-brand-100'>
      <div className='w-full h-full bg-black bg-opacity-20 flex flex-col justify-center items-center gap-5'>
        <span className='text-5xl text-brand-200 animate-spin'>
          <CgSpinner />
        </span>

        <p className='font-normal text-base text-brand-400'>
          Buscando dados...
        </p>
      </div>
    </main>
  )
}
