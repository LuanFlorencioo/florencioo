'use client';

import Image from 'next/image';
import { useHomeDialogStore } from '@/store';

type CoverProps = {
  imageCover: string;
}

export default function Cover({ imageCover }: CoverProps) {
  const { handleChangeImage, handleOpenDialog } = useHomeDialogStore();

  const zoomIn = () => {
    handleChangeImage({ alt: 'Project image cover', src: imageCover });
    handleOpenDialog();
  }

  return (
    <figure className='w-full aspect-video cursor-zoom-in'>
      <Image className='w-full h-full object-cover rounded-lg'
        src={imageCover}
        alt='project image cover'
        width={1366}
        height={679}
        priority={true}
        onClick={zoomIn}
      />
    </figure>
  )
}
