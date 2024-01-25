'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useHomeDialogStore } from '@/store';
import { useEffect, useState } from 'react';

type ImagePreviewProps = {
  src: string;
}

export default function ImagePreview({ src }: ImagePreviewProps) {
  const [ isMobileScreen, setIsMobileScreen ] = useState(false);
  const { handleOpenDialog, handleChangeImage } = useHomeDialogStore();

  useEffect(() => {
    const checkIsMobileScreen = () => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      setIsMobileScreen(mediaQuery.matches);
    };

    checkIsMobileScreen();

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const mediaListener = (e: MediaQueryListEvent) => {
      setIsMobileScreen(e.matches);
    };
    mediaQuery.addEventListener('change', mediaListener);

    return () => {
      mediaQuery.removeEventListener('change', mediaListener);
    }
  }, []);

  const imageStyleDefault = { skewX: 0, skewY: 0, rotateY: 0 };

  const zoomIn = () => {
    handleOpenDialog();
    handleChangeImage({ alt: 'Image preview', src });
  }

  return (
    <motion.figure className='w-full md:max-w-[350px] aspect-video cursor-zoom-in'
      animate={ isMobileScreen ? imageStyleDefault : { skewX: 2, skewY: -2, rotateY: 30 }}
      whileHover={imageStyleDefault}
    >
      <Image className='w-full h-full object-cover rounded-lg'
        src={src}
        alt='project image preview'
        onClick={zoomIn}
        width={1366}
        height={679}
      />
    </motion.figure>
  )
}
