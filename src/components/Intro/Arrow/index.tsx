import { BiSolidChevronDown } from "react-icons/bi";

export default function Arrow() {
  return (
    <a href="#habilidades" className="hidden absolute bottom-12 left-1/2 -translate-x-1/2 md:block">
      <button className="w-max h-max p-2 bg-gray-100 rounded-full ring-2 ring-gray-400 text-2xl text-gray-400 transition animate-bounce md:hover:ring-orange md:hover:text-orange">
        <BiSolidChevronDown />
      </button>
    </a>
  )
}
