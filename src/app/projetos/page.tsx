import { ArrowToTop, ImageDialog, ProjectCard, ProjectList, TitlePage } from '@/components';
import { useProjectsStore } from '@/store';
import { Project } from '@/models';
import { fetchProjectsData } from '@/utils';

export default async function Projetos() {
  const { updateState, hasProjects } = useProjectsStore();

  if (!hasProjects) {
    const data: Project[] = await fetchProjectsData();
    updateState(data);
  }

  const { projects } = useProjectsStore();

  return (
    <main className='w-full min-h-screen px-4 pt-40 pb-60 bg-brand-100 bg-dark-4 bg-cover bg-right-top relative'>
      <section className='w-full max-w-sm mx-auto md:max-w-3xl lg:max-w-5xl flex flex-col gap-20'>
        <TitlePage>Projetos</TitlePage>

        <ProjectList>
          {
            projects?.filter(({ is_active }) => is_active).map(project => (
              <ProjectCard key={project.id}>
                <ProjectCard.Cover imageCover={project.image_cover} />

                <ProjectCard.Content>
                  <ProjectCard.Title
                    title={project.name}
                    link={project.link_page}
                  />

                  <ProjectCard.Tags tags={project.tags} />

                  <ProjectCard.Description>
                    {project.short_description}
                  </ProjectCard.Description>
                </ProjectCard.Content>

                <ProjectCard.Buttons
                  app={project.link_app}
                  repo={project.link_repo}
                />
              </ProjectCard>
            ))
          }
        </ProjectList>
      </section>

      <ImageDialog />

      <ArrowToTop />
    </main>
  )
}
