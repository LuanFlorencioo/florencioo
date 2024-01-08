'use client';

import { ComponentProps } from 'react';
import { motion } from 'framer-motion';

type TitleProps = ComponentProps<typeof motion.h2>

export default function Title({ children, ...props }: TitleProps) {
  return (
    <motion.h2 {...props} className='font-bold text-3xl text-brand-500'
      initial={{ opacity: 0, translateX: -50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: .4 }}
    >
      {children}
    </motion.h2>
  )
}
