'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTechsFilterStore } from '@/store';

export default function KnowledgeTechs() {
  const { data } = useTechsFilterStore();
  
  return (
    <>
      {
        data.map(({ techs, type }) => {
          if (techs.length > 0) {
            return (
              <motion.article className='w-full flex flex-col gap-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .6 }}
                key={type}
              >
                <h3 className='w-full font-bold text-xl text-brand-100'>
                  {type}
                </h3>

                <div className='w-full flex flex-wrap gap-2'>
                  {
                    techs.map(tech => (
                      <div key={tech.label} className='w-full max-w-[200px] p-4 rounded-lg bg-gradient-to-br from-brand-400 to-brand-500 flex items-center gap-4 select-none'>
                        <figure className='w-10 h-10 p-2 rounded bg-gradient-to-br from-brand-500 to-brand-400'>
                          <Image
                            src={`/techs/${tech.pathname}`}
                            alt='tech'
                            width={40} height={40}
                          />
                        </figure>

                        <h4 className='font-normal text-sm text-brand-100'>
                          {tech.label}
                        </h4>
                      </div>
                    ))
                  }
                </div>
              </motion.article>
            )
          }
        })
      }

      {
        data.every(({ techs }) => techs.length === 0) && (
          <motion.div className='w-full flex justify-center items-center text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
          >
            <p className='text-xl text-brand-100'>
              Não foi encontrado nenhuma tecnologia
            </p>
          </motion.div>
        )
      }
    </>
  )
}
