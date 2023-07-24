import { useState } from "react";
import { IconType } from "react-icons/lib"
import { GoCopy } from "react-icons/go";

interface ContactProps {
  label: string
  value: string
  icon: IconType
}

export default function Contact({ icon: Icon, label, value }: ContactProps) {
  const [hasCliped, setHasCliped] = useState(false);
  const handleClipboard = () => {
    navigator.clipboard.writeText(value);
    if (!hasCliped) {
      setHasCliped(true);
      setTimeout(() => {
        setHasCliped(false);
      }, 1000);
    }
  };

  return (
    <li className="w-full flex flex-wrap gap-y-4">
      <span className="w-full flex items-center gap-2 text-base text-white relative">
        <span className="w-5 h-1 bg-orange absolute -left-[2px] top-full"/>

        {<Icon />}

        <h3 className="font-lexend font-bold selection:bg-orange selection:bg-opacity-50 selection:text-gray-700">
          {label}:
        </h3>
      </span>


      <span className="w-max h-max pl-3 bg-gray-100 rounded-lg flex items-center gap-3 relative">
        <p className="font-inter font-normal text-base text-gray-600 selection:bg-orange selection:bg-opacity-50 selection:text-gray-700">
          {value}
        </p>

        <button
          onClick={handleClipboard}
          className="w-max h-max p-3 bg-gray-300 rounded-r-lg text-gray-700 transition md:hover:bg-gray-400 md:hover:text-white"
        >
          <GoCopy />
        </button>

        {
          hasCliped && (
            <span className="font-inter font-normal text-sm text-orange absolute right-0 -top-5 select-none">
              copiado!
            </span>
          )
        }

      </span>
    </li>
  )
}
