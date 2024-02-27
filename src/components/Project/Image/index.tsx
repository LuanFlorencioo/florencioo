import Image from 'next/image';

type ImageProps = {
  src: string;
  alt: string;
}

export function ProjectImage(props: ImageProps) {
  return (
    <figure className='w-full max-w-[502px] aspect-video'>
      <Image
        {...props}
        width={1366}
        height={768}
        priority={true}
        className='w-full h-full object-cover rounded'
      />
    </figure>
  )
}
