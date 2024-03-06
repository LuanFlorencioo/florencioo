'use client';

import { Typewriter, TypewriterProps } from 'react-simple-typewriter';

export default function HomeTypewriter(props: TypewriterProps) {
  return (
    <span className='bg-gradient-to-r from-brand-100 to-brand-200 inline-block text-transparent bg-clip-text'>
      <Typewriter {...props} />
    </span>
  )
}
