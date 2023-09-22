import Image from "next/image";

interface CoverImageProps {
  image: string
}

export default function CoverImage({ image }: CoverImageProps) {
  return (
    <figure className="w-full min-h-[155px] bg-gray-300">
      <Image
        src={image}
        alt="Project Image"
        width={1920}
        height={1080}
        className="w-full h-full rounded object-cover"
        priority
      />
    </figure>
  )
}
