import Image from 'next/image';
import { ImageProps } from 'next/image';

export default function Figure({ ...props }: ImageProps) {
  return (
    <figure className='hidden sm:block w-full md:max-w-md h-52 md:h-[536px]'>
      <Image {...props} className='w-full h-full rounded-lg object-cover' priority={true} />
    </figure>
  )
}
