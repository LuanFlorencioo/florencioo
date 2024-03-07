'use client';

import { ComponentProps } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

type CardListProps = ComponentProps<'ul'>;

export default function CardList({ children, ...props }: CardListProps) {
  const carouselOptions: EmblaOptionsType = {
    loop: true,
    align: 'center',
  }
  
  const [emblaRef] = useEmblaCarousel(carouselOptions, [Autoplay()]);

  return (
    <div ref={emblaRef} className='w-full max-w-default overflow-hidden relative'>
      <ul {...props} className='flex px-8 gap-8 cursor-grab'>
        {children}
      </ul>

      <div className='absolute top-0 left-0 w-20 h-full bg-gradient-to-l from-transparent to-brand-500' />
      <div className='absolute top-0 right-0 w-20 h-full bg-gradient-to-r from-transparent to-brand-500' />
    </div>
  )
}
