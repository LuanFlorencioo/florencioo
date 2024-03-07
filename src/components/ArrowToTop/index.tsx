'use client';

import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { motion } from 'framer-motion';

export default function ArrowToTop() {
  const [ isShow, setIsShow ] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsShow(window.scrollY > 300);
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {
        isShow && (
          <motion.button className='w-10 h-10 fixed bottom-[5%] right-[5%] z-10 rounded-lg bg-brand-100 flex justify-center items-center text-2xl text-brand-500 md:bottom-[10%]'
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: .5 }}
            exit={{ opacity: 0, scale: .5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <IoIosArrowUp />
          </motion.button>
        )
      }
    </>
  )
}
