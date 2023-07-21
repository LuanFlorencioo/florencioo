import Image from "next/image";
import { links } from "@/data";

export default function Avatar() {
  return (
    <div className="w-max flex items-center gap-3">
      <Image
        src={links.avatar}
        width={460}
        height={460}
        alt="Avatar github"
        priority
        className="w-8 h-8 rounded-full"
      />

      <p className="font-lexend font-bold text-base text-orange">
        Luan Florencio
      </p>
    </div>
  )
}
