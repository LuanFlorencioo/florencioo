import { projects } from "@/data";
import Project from "./Project";
import Title from "./Title";

export default function MainProjects() {
  return (
    <section id="principais-projetos" className="w-full py-20 px-5 bg-[url('/background-3.svg')] bg-cover bg-top bg-no-repeat relative">
      <div className="box-container flex flex-col items-center gap-10">
        <Title />

        <ul className="w-full flex flex-wrap justify-center gap-10">
          {
            projects.map(( project, i ) => (
              <Project
                key={i}
                title={project.title}
                coverImage={project.coverImage}
                tags={project.tags}
                description={project.description}
                repo={project.repo}
                app={project.app}
              />
            ))
          }
        </ul>
      </div>
    </section>
  )
}
