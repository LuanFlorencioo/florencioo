import { ReactNode } from 'react';

type SkillsContainerProps = {
  children?: ReactNode;
}

export default function SkillsContainer({ children }: SkillsContainerProps) {
  return (
    <section className='w-full max-w-[768px] flex flex-wrap justify-center gap-5 cursor-default select-none'>
      {children}
    </section>
  )
}
