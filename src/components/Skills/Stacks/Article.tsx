import Badge from "./Badge"

interface ArticleProps {
  title: string
  badges: {
    url: string
    name: string
  }[]
}

export default function Article({ badges, title}: ArticleProps) {
  return (
    <article className="w-full flex flex-col gap-3">
      <h3 className="font-lexend font-bold text-base text-gray-600 uppercase">
        {title}
      </h3>

      <div className="w-full flex items-center flex-wrap gap-2">
        {
          badges.map(({ name, url }, i) => (
            <Badge
              key={i}
              iconName={name}
              iconUrl={url}
            />
          ))
        }
      </div>
    </article>
  )
}
