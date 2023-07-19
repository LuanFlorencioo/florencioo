import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { useNavbarContext } from "@/contexts";

export default function Button() {
  const { showNavbar, handleShowNavbar } = useNavbarContext();

  return (
    <button onClick={handleShowNavbar} className="w-max h-max p-3 bg-gray-300 rounded-md text-base text-gray-400 hover:bg-gray-400 hover:text-gray-500">
      {showNavbar ? <CgClose /> : <FaBars />}
    </button>
  )
}
