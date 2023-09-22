import Link from "next/link";
import { BiArrowFromBottom } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="w-full py-10 px-5 bg-orange">
      <div className="box-container flex flex-col-reverse justify-center items-center gap-10 md:flex-row md:justify-between">
        <p className="font-inter font-normal text-base text-white">
          2023 - Portfolio developed by Luan Florencio
        </p>

        <Link className="w-max h-max" href="#inicio">
          <button className="w-max h-max p-2 bg-white rounded-lg text-xl text-orange">
            <BiArrowFromBottom />
          </button>
        </Link>
      </div>
    </footer>
  )
}
