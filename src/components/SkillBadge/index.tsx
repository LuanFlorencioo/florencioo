'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type SkillBadgeProps = {
  image: string,
  label: string,
}

export default function SkillBadge({ image, label }: SkillBadgeProps) {
  return (
    <motion.div className='w-[200px] p-4 rounded-lg bg-gradient-to-br from-brand-400 to-brand-500 flex items-center gap-4'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: .4 }}
    >
      <figure className='w-10 aspect-square rounded bg-gradient-to-br from-brand-500 to-brand-400 flex justify-center items-center'>
        <Image
          src={image}
          alt={`${label} icon`}
          width={24}
          height={24}
        />
      </figure>

      <p className='font-normal text-base text-brand-100'>
        {label}
      </p>
    </motion.div>
  )
}
