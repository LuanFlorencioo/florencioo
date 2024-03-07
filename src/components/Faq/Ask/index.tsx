'use client';

import { ReactNode, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

type AskProps = {
  question: string;
  children: ReactNode;
}

export default function Ask({ children, question }: AskProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpanded = () => setIsExpanded(state => !state);

  return (
    <li className='w-full py-8 flex flex-col gap-4'>
      <div className='w-full flex items-center justify-between gap-4 cursor-pointer'
        onClick={handleExpanded}
      >
        <h3 className='font-bold text-lg text-brand-100 select-none'>
          {question}
        </h3>

        <button className='text-lg'>
          {isExpanded ? <FaMinus /> : <FaPlus />}
        </button>
      </div>

      {isExpanded && children}
    </li>
  )
}
