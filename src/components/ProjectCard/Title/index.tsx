import Link from 'next/link';

type TitleProps = {
  title: string;
  link: string;
};

export default function Title({ title, link }: TitleProps) {
  return (
    <Link href={`projetos/${link}`}>
      <h3 className='font-bold text-xl text-brand-300 truncate'>
        {title}
      </h3>
    </Link>
  )
}
