import { ElementType } from 'react';

type IconProps = {
  icon: ElementType;
}

export default function Icon({ icon: Icon }: IconProps) {
  return (
    <div className='w-[60px] h-[60px] border border-[#00000010] rounded-lg flex justify-center items-center text-brand-200 text-3xl'>
      {<Icon />}
    </div>
  )
}
