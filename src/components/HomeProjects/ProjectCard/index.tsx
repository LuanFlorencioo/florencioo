import ImagePreview from './ImagePreview';
import Title from './Title';
import Description from './Description';
import Tags from './Tags';
import Buttons from './Buttons';

type ProjectCardProps = {
  imagePreview: string;
  title: string;
  tags: string[];
  description: string;
  appLink: string;
  repoLink: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <article className='w-full max-w-[400px] md:max-w-[800px] p-4 flex flex-col md:flex-row gap-4 md:gap-8'>
      <ImagePreview src={props.imagePreview} />

      <div className='w-full max-w-[400px] flex flex-col justify-between gap-5'>
        <div className='flex flex-col gap-2'>
          <Title>{props.title}</Title>

          <Tags tags={props.tags} />

          <Description>{props.description}</Description>
        </div>

        <Buttons appLink={props.appLink} repoLink={props.repoLink} />
      </div>
    </article>
  )
}
