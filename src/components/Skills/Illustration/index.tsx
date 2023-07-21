import Image from "next/image";
import Link from "next/link";
import img from "/public/illustrations/illustration-1.svg";

export default function Illustration() {
  return (
    <figure className="w-full flex flex-col items-center md:max-w-[40%]">
      <Image
        src={img}
        alt="Illustration on Me"
        className="w-[200px] md:w-full"
      />
      
      <figcaption className="-mt-3 font-inter text-sm text-gray-400 underline">
        <Link href="https://storyset.com/online" target="_blank">
          Illustration by Storyset
        </Link>
      </figcaption>
    </figure>
  )
}
