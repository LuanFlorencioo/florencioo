'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeftLong } from 'react-icons/fa6';

type TitlePageProps = {
  children: ReactNode;
}

export default function TitlePage({ children }: TitlePageProps) {
  return (
    <div className='w-full flex flex-col items-start gap-5'>
      <Link href='/' className='flex items-center gap-2 text-brand-300 opacity-75 md:hover:opacity-100'>
        <FaArrowLeftLong /> Voltar ao início
      </Link>

      <motion.h2 className='font-bold text-4xl md:text-5xl text-brand-200 uppercase'
        initial={{ transform: 'translateX(-50px)', opacity: 0 }}
        animate={{ transform: 'translateX(0)', opacity: 1 }}
      >
        {children}
      </motion.h2>
    </div>
  )
}
