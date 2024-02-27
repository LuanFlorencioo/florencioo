type TagsProps = {
  tags: string[];
}

export default function Tags({ tags }: TagsProps) {
  return (
    <ul className='w-full flex items-center gap-1 overflow-hidden'>
      {
        tags.map(tag => (
          <li key={tag} className='w-max h-max px-2 py-1 bg-white bg-opacity-20 rounded'>
            <p className='font-bold text-xs text-brand-400 capitalize select-none'>
              {tag}
            </p>
          </li>
        ))
      }
    </ul>
  )
}
