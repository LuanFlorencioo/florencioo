interface TagsProps {
  tags: string[]
}

export default function Tags({ tags }: TagsProps) {
  return (
    <p className="w-full flex flex-wrap items-center gap-2 font-lexend font-bold text-xs text-orange">
      {
        tags.map((tag, i) => (
          <span key={i} className="w-max h-max p-1 bg-orange bg-opacity-20 rounded">
            {tag}
          </span>
        ))
      }
    </p>
  )
}
