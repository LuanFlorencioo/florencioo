'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ProjectListProps = {
  children?: ReactNode;
};

export default function ProjectList({ children }: ProjectListProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: .4,
        staggerChildren: .2,
      }
    }
  }

  return (
    <motion.ul className='w-full flex flex-wrap justify-center md:justify-between lg:justify-start items-center gap-10 lg:gap-x-[62px]'
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {children}
    </motion.ul>
  )
}
