import Image, { ImageProps } from 'next/image';

type FigureProps = ImageProps;

export default function Figure({ ...props }: FigureProps) {
  return (
    <figure className='w-full aspect-square flex justify-center items-center hidden sm:block sm:max-w-[350px] md:max-w-[450px]'>
      <Image {...props} priority={true} />
    </figure>
  )
}
