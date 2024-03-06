import { ComponentProps } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

type ButtonMobileProps = {
  hasClicked: boolean,
}

export default function ButtonMobile({
  hasClicked,
  ...props
}: ButtonMobileProps & ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className='w-10 h-10 rounded-lg border border-[#00000010] bg-transparent flex justify-center items-center text-xl text-brand-100 transition-colors data-[has-clicked=true]:animate-button-mobile data-[has-clicked=true]:text-brand-200'
      data-has-clicked={hasClicked}
    >
      {hasClicked ? <IoClose /> : <FaBars />}
    </button>
  )
}
