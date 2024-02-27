import { ArrowToTop, TitlePage, Project } from '@/components';
import { useProjectsStore } from '@/store';

type ProjectPageProps = {
  params: {
    project: string;
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { projects } = useProjectsStore();
  const project = projects?.find(({ link_page }) => link_page === params.project);

  return project ? (
    <main className='w-full min-h-screen px-4 pt-40 pb-60 bg-brand-100 relative'>
      <section className='w-full max-w-5xl mx-auto flex flex-col gap-10'>
        <TitlePage textReturn='Voltar aos projetos' linkReturn='/projetos'>
          {project.name}
        </TitlePage>

        <article className='w-full flex flex-col sm:flex-row gap-5'>
          <div className='flex flex-row sm:flex-col gap-5'>
            <Project.Logo
              src={project.logo}
              alt={`${project.name} logo`}
            />

            <Project.Links
              app={project.link_app}
              repo={project.link_repo}
            />
          </div>

          <div className='flex flex-col gap-5'>
            <Project.Text>
              {project.descriptions[0]}
            </Project.Text>

            <Project.TagList tags={project.tags} />
          </div>
        </article>

        <article className='w-full flex flex-wrap justify-center items-center gap-5'>
          {
            project.images.map((image, i) => (
              <Project.Image
                key={`${project.name} image-${i + 1}`}
                src={image}
                alt={`${project.name} image ${i + 1}`}
              />
            ))
          }
        </article>

        <article className='w-full flex flex-col gap-2'>
          {
            project.descriptions.filter((_, i) => i > 0).map((text, i) => (
              <Project.Text key={`description ${i + 1}`}>
                {text}
              </Project.Text>
            ))
          }
        </article>

        <article className='w-full pt-8 px-4 pb-4 rounded-lg border-2 border-[#FFFFFF20] flex flex-col gap-4 relative'>
          <span className='w-max h-max px-4 py-1 bg-brand-100 rounded border border-[#FFFFFF20] absolute -top-5 left-10'>
            <h3 className='font-bold text-lg text-brand-300'>
              Aprendizado
            </h3>
          </span>

          {
            project.apprenticeship.map((text, i) => (
              <Project.Text key={`apprenticeship ${i}`}>
                {text}
              </Project.Text>
            ))
          }
        </article>
      </section>

      <ArrowToTop />
    </main>
  )
  : <Project.NotFound />
}
