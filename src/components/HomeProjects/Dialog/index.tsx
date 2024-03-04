'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CgClose } from 'react-icons/cg';
import { useHomeDialogStore } from '@/store';

export default function Dialog() {
  const { handleOpenDialog, isOpenDialog, image } = useHomeDialogStore();

  return (
    <>
      {
        isOpenDialog && (
          <motion.div className='w-screen h-screen p-4 fixed top-0 left-0 z-50 bg-[#00000075] flex justify-center items-center'
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
          >
            <div className='w-full max-w-5xl min-h-[300px] flex flex-wrap justify-end gap-7'>
              <button className='w-8 h-8 rounded-lg bg-brand-100 flex justify-center items-center text-brand-500 hover:text-brand-300'
                onClick={handleOpenDialog}
              >
                <CgClose />
              </button>

              <figure className='w-full aspect-video'>
                <Image className='w-full h-full object-cover rounded-lg'
                  src={image!.src}
                  alt={image!.alt}
                  priority={true}
                  width={1366}
                  height={679}
                />
              </figure>
            </div>
          </motion.div>
        )
      }
    </>
  )
}
