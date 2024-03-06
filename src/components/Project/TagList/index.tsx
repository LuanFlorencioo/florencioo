type TagListProps = {
  tags: string[];
}

export function TagList({ tags }: TagListProps) {
  return (
    <div className='flex flex-col gap-2'>
      <h3 className='font-normal text-base text-brand-400'>
        Tecnologias usadas:
      </h3>

      <ul className='flex flex-wrap gap-1'>
        {
          tags.map((tag) => (
            <li key={tag} className='w-max h-max px-2 py-1 rounded bg-white bg-opacity-20'>
              <p className='font-normal text-sm text-brand-400 capitalize'>
                {tag}
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
