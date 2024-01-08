'use client';

import Image, { ImageProps } from 'next/image';
import { motion } from 'framer-motion';

type FigureProps = ImageProps;

export default function Figure({ ...props }: FigureProps) {
  return (
    <motion.figure className='w-full aspect-square flex justify-center items-center hidden sm:block sm:max-w-[350px] md:max-w-[450px]'
      initial={{ opacity: 0, scale: .75 }}
      exit={{ opacity: 0, scale: .75 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: .4, delay: .8 }}
    >
      <Image {...props} priority={true} />
    </motion.figure>
  )
}
