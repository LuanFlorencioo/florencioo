import { links } from "@/data";
import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      src={links.avatar}
      alt="Avatar Github"
      width={208}
      height={208}
      className="w-max h-max rounded-full z-10"
    />
  )
}
