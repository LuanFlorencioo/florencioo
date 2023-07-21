import Link from "next/link";
import { HiDocumentText } from "react-icons/hi";
import { links } from "@/data";

export default function Button() {
  return (
    <Link href={links.curriculum} target="_blank">
      <button className="w-max h-max py-3 px-6 bg-gray-100 border-2 border-gray-300 rounded-lg font-inter font-bold text-base text-orange flex items-center gap-2 transition relative  md:hover:border-orange">
        <HiDocumentText />
        Visualizar Currículo
        <span className="w-3 h-3 bg-orange rounded-full absolute -top-1 -right-1 animate-ping" />
        <span className="w-3 h-3 bg-orange rounded-full absolute -top-1 -right-1" />
      </button>
    </Link>
  )
}
