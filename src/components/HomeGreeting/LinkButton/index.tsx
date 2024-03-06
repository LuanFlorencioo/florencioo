'use client';

import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';

export default function LinkButton() {
  return (
    <motion.a className='w-max h-max absolute bottom-[10%] left-1/2 -translate-x-1/2'
      href='#about'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4 }}
    >
      <button className='w-10 h-10 rounded-lg bg-brand-100 flex justify-center items-center text-2xl text-brand-500 animate-bounce transition-colors md:hover:text-brand-300'>
        <IoIosArrowDown />
      </button>
    </motion.a>
  )
}
