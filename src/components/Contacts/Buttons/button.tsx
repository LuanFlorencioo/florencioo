import Link from "next/link";
import { IconType } from "react-icons/lib";

interface ButtonProps {
  link: string
  label: string
  icon: IconType
}

export default function Button({ icon: Icon, label, link}: ButtonProps) {
  return (
    <Link target="_blank" className="w-full h-max" href={link}>
      <button className="w-full py-3 px-5 bg-gray-300 rounded-lg flex justify-center items-center gap-2 font-inter font-bold text-lg text-white transition md:hover:bg-orange">
        <Icon /> {label}
      </button>
    </Link>
  )
}
