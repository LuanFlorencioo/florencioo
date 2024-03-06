'use client';

import { useState } from 'react';
import { GoPaperclip } from 'react-icons/go';
import { MdOutlineEmail, MdPhoneEnabled, MdOutlineDone } from 'react-icons/md';

type ContactProps = {
  type: 'email' | 'phone';
  value: string;
}

export default function Contact({ type, value }: ContactProps) {
  const [hasCliped, setHasCliped] = useState(false);
  const handleClipboard = () => {
    navigator.clipboard.writeText(value);
    if (!hasCliped) {
      setHasCliped(true);
      setTimeout(() => {
        setHasCliped(false);
      }, 1000);
    }
  }

  return (
    <div className='w-full flex flex-col gap-2'>
      <h3 className='font-bold text-lg text-brand-100 flex items-center gap-2 md:selection:bg-brand-200 md:selection:text-brand-500'>
        {type === 'email' && <><MdOutlineEmail /> E-mail:</>}
        {type === 'phone' && <><MdPhoneEnabled /> Celular:</>}
      </h3>

      <div className='w-full flex'>
        <span className='w-max h-10 px-4 rounded-l bg-brand-400 bg-opacity-50 flex items-center'>
          <p className='font-normal text-base text-brand-100 md:selection:bg-brand-200 md:selection:text-brand-500'>
            {value}
          </p>
        </span>

        <button className='w-10 h-10 rounded-r bg-brand-400 flex justify-center items-center text-xl text-brand-200 transition-colors data-[hascliped=true]:bg-brand-100 data-[hascliped=true]:text-brand-500'
          onClick={handleClipboard}
          data-hascliped={hasCliped}
          title='Copiar'
        >
          {hasCliped ? <MdOutlineDone /> : <GoPaperclip />}
        </button>
      </div>
    </div>
  )
}
