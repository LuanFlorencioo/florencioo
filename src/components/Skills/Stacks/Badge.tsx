import { MouseEventHandler, useState } from "react";
import Image from "next/image";

interface BadgeProps {
  iconUrl: string
  iconName: string
}

export default function Badge({ iconName, iconUrl }: BadgeProps) {
  const [ isHover, setIsHover ] = useState(false);

  const handleShowSpan: MouseEventHandler = () => {
    if (window.innerWidth > 450) setIsHover(!isHover);
  }

  return (
    <div
      onMouseEnter={handleShowSpan}
      onMouseLeave={handleShowSpan}
      className="w-10 h-10 border border-gray-400 rounded flex justify-center items-center transition relative md:hover:border-orange md:hover:-translate-y-1"
    >
      <Image
        src={iconUrl}
        alt="HTML Icon"
        width={20}
        height={20}
      />
      {
        isHover && (
          <span className="w-max h-max py-1 px-3 bg-gray-300 rounded text-xs text-gray-500 absolute -top-8 left-1/2 -translate-x-1/2 hidden xl:block">
            {iconName}
          </span>
        )
      }
    </div>
  )
}
