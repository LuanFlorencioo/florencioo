import CoverImage from "./CoverImage";
import Title from "./Title";
import Tags from "./Tags";
import Description from "./Description";
import Buttons from "./Buttons";

interface ProjectProps {
  coverImage: string
  title: string
  tags: string[]
  description: string
  repo: string
  app: string
}

export default function Project({
  app,
  coverImage,
  description,
  repo,
  tags,
  title
}: ProjectProps) {
  return (
    <li className="w-full max-w-[275px] h-[375px] p-3 bg-white bg-opacity-5 backdrop-blur-sm rounded-lg flex flex-col gap-3 transition select-none md:hover:bg-opacity-10">
      <CoverImage image={coverImage} />

      <div className="w-full h-full flex flex-col justify-between">
        <div className="w-full flex flex-col gap-4">
          <Title text={title} />

          <Tags tags={tags} />

          <Description text={description} />
        </div>

        <Buttons linkApp={app} linkRepo={repo} />
      </div>
    </li>
  )
}
