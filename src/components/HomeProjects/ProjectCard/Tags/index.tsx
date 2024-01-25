type TagsProps = {
  tags: string[];
}

export default function Tags({ tags }: TagsProps) {
  return (
    <div className='w-full flex flex-wrap items-center gap-1'>
      {
        tags.map((tag, i) => (
          <span key={i} className='w-max px-2 py-1 rounded bg-[#ffffff20] select-none'>
            <p className='font-normal text-xs text-brand-400 capitalize'>
              {tag}
            </p>
          </span>
        ))
      }
    </div>
  )
}
