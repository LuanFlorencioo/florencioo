import { ReactNode } from 'react';

type OtherPageListProps = {
  children: ReactNode;
}

export default function OtherPageList({ children }: OtherPageListProps) {
  return (
    <ul className="flex flex-col gap-4 md:items-end">
      {children}
    </ul>
  )
}
