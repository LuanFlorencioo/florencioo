'use client';

import { ChangeEventHandler } from 'react';
import { motion } from 'framer-motion';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { MdOutlineSearch } from 'react-icons/md';
import { useTechsFilterStore } from '@/store';

export default function InputFilterTech() {
  const { clearFilter, filter, inputValue, setInputValue } = useTechsFilterStore();

  const handleTypingInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setInputValue(value);

    const valueConverted = value.trim().toLowerCase();
    return valueConverted.length > 0
      ? filter(valueConverted)
      : clearFilter();
  }

  const clearInputValue = () => {
    setInputValue('');
    clearFilter();
  };

  return (
    <motion.div className='w-full py-4 bg-brand-500 sticky top-16 md:top-14'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .4 }}
    >
      <span className='w-full relative'>
        <span className='w-max h-max text-xl text-brand-100 absolute top-1/2 -translate-y-1/2 left-3'>
          <MdOutlineSearch />
        </span>

        <input
          type='text'
          className='w-full max-w-lg py-3 px-10 bg-brand-500 rounded border border-brand-[#00000010] transition-colors text-brand-100 selection:bg-brand-300 md:hover:border-brand-300 focus:outline-brand-200'
          placeholder='Procurar por tecnologia...'
          maxLength={30}
          onChange={handleTypingInput}
          value={inputValue}
        />

        {
          inputValue.length > 0 && (
            <motion.button className='w-10 h-10 text-2xl text-brand-100 absolute top-1/2 -translate-y-1/2 right-0 flex justify-center items-center'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .4 }}
              onClick={clearInputValue}
            >
              <IoCloseCircleOutline />
            </motion.button>
          )
        }
      </span>
    </motion.div>
  )
}
