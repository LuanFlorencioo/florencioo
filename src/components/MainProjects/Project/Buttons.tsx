import Link from "next/link"
import { GoLinkExternal, GoRepo } from "react-icons/go"

interface ButtonsProps {
  linkRepo: string
  linkApp: string
}

export default function Buttons({ linkApp, linkRepo}: ButtonsProps) {
  return (
    <div className="w-full flex justify-center">
      <Link
        href={linkRepo}
        target="_blank"
        className="w-1/2 h-max border-r-[1px] border-orange"
      >
        <button className="w-full font-inter py-2 font-bold text-sm text-gray-700 flex items-center justify-center gap-2 md:hover:text-white">
          <GoRepo />
          Repositório
        </button>
      </Link>

      <Link
        href={linkApp}
        target="_blank"
        className="w-1/2 h-max border-l-[1px] border-orange"
      >
        <button className="w-full font-inter py-2 font-bold text-sm text-gray-700 flex items-center justify-center gap-2 md:hover:text-white">
          <GoLinkExternal />
          Conferir
        </button>
      </Link>
    </div>
  )
}
