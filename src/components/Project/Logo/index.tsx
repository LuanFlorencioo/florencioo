import Image from 'next/image';

type LogoProps = {
  src: string;
  alt: string;
};

export function Logo(props: LogoProps) {
  return (
    <figure className='w-full max-w-[100px] sm:max-w-[175px] aspect-square'>
      <Image
        {...props}
        width={200}
        height={200}
        priority={true}
        className='w-full h-full object-cover'
      />
    </figure>
  )
}
