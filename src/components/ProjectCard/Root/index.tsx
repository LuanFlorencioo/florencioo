'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type RootProps = {
  children?: ReactNode;
};

export default function Root({ children }: RootProps) {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <motion.li className='w-full max-w-[350px] lg:max-w-[300px] min-h-[400px] flex flex-col gap-5'
      variants={item}
    >
      {children}
    </motion.li>
  )
}
