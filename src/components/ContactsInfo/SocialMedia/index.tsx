import { ReactNode } from 'react';
import { MdPeople } from 'react-icons/md';

type SocialMediaProps = {
  children?: ReactNode;
}

export default function SocialMedia({ children }: SocialMediaProps) {
  return (
    <div className='w-full flex flex-col gap-2'>
      <h3 className='font-bold text-lg text-brand-100 flex items-center gap-2 md:selection:bg-brand-200 md:selection:text-brand-500'>
        <MdPeople /> Redes Socias:
      </h3>

      <div className='w-full flex flex-col justify-center items-center xs:items-start gap-4'>
        {children}
      </div>
    </div>
  )
}
