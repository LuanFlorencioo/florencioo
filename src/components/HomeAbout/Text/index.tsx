'use client';

import { ComponentProps } from 'react';
import { motion } from 'framer-motion';

type TextProps = ComponentProps<typeof motion.p>

export default function Text({ children, ...props }: TextProps) {
  return (
    <motion.p {...props} className='font-normal text-base text-brand-500'
      initial={{ opacity: 0, translateX: -50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -50 }}
      transition={{ duration: .4 }}
    >
      {children}
    </motion.p>
  )
}
