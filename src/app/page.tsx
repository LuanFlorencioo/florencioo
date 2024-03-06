import {
  Button,
  HomeAbout,
  HomeGreeting,
  HomeHero,
  HomeTypewriter,
  HomeKnowledge,
  HomeKnowledgeCard,
  SkillBadge,
  ArrowToTop,
  HomeProjects,
  HomeContact,
  ContactsInfo,
} from '@/components';
import { knowledges, highlightProjects, contacts, techs } from '@/data';
import Me from '@/assets/imgs/me.png';

export default function Home() {
  return (
    <main className='w-full min-h-screen relative'>
      <HomeHero />

      <HomeGreeting>
        <HomeGreeting.Title>
          Desenvolvedor Web <HomeTypewriter
            words={['Front End.', 'Back End.', 'Full Stack.']}
            loop={true}
          />
        </HomeGreeting.Title>

        <HomeGreeting.Text>
          Transformando Ideias em Aplicações Web com Criatividade, Inovação e Paixão.
        </HomeGreeting.Text>
      </HomeGreeting>

      <HomeAbout>
        <HomeAbout.Article>
          <HomeAbout.Title>
            Quem Sou Eu?
          </HomeAbout.Title>

          <HomeAbout.Text>
            Meu nome é Luan Florêncio, moro no Rio de Janeiro, e de costume de qualquer carioca, adoro uma praia, churrasco, samba e um bom domingo de futebol para assistir.
          </HomeAbout.Text>

          <HomeAbout.Text>
            Sou desenvolvedor web com habilidades em <em className='text-brand-300'>Javascript</em>, <em className='text-brand-300'>Typescript</em>, <em className='text-brand-300'>React</em>, <em className='text-brand-300'>NextJs</em>, <em className='text-brand-300'>Node</em>, <em className='text-brand-300'>NestJs</em> e entre outras tecnologias e frameworks.
          </HomeAbout.Text>

          <HomeAbout.Text>
            Desde ainda pequeno, sempre me interessei por tecnologia e pude encontrar nisso uma vocação intrínseca alinhado a minha criatividade e vontade de absorver conhecimento.
          </HomeAbout.Text>

          <HomeAbout.Buttons />
        </HomeAbout.Article>

        <HomeAbout.Figure src={Me} alt='Me' />
      </HomeAbout>

      <ArrowToTop />

      <HomeKnowledge>
        <HomeKnowledge.Title>
          Conhecimento
        </HomeKnowledge.Title>

        <HomeKnowledge.Text>
          A busca constante pela evolução e a atualização contínua são elementos cruciais
        </HomeKnowledge.Text>

        <HomeKnowledge.CardList>
          {
            knowledges.map(({ label, description, icon }) => (
              <HomeKnowledgeCard key={label}>
                <HomeKnowledgeCard.Icon icon={icon} />

                <HomeKnowledgeCard.Title>{label}</HomeKnowledgeCard.Title>

                <HomeKnowledgeCard.Text>{description}</HomeKnowledgeCard.Text>
              </HomeKnowledgeCard>
            ))
          }
        </HomeKnowledge.CardList>

        <HomeKnowledge.Title>
          Habilidades
        </HomeKnowledge.Title>

        <HomeKnowledge.SkillsContainer>
          {
            techs.filter(({ label }) => {
              return [
                'Javascript',
                'React',
                'NextJS',
                'Typescript',
                'Express',
                'NestJS',
                'Google Cloud',
                'Node',
                'Jest',
              ].includes(label)
            }).map(({ label, pathname }) => (
              <SkillBadge
                key={label}
                label={label}
                image={`/techs/${pathname}`}
              />
            ))
          }
        </HomeKnowledge.SkillsContainer>

        <Button href={'/conhecimento'}>
          Veja mais
        </Button>
      </HomeKnowledge>

      <HomeProjects>
        <HomeProjects.Dialog />

        <HomeProjects.Title>
          Principais Projetos
        </HomeProjects.Title>

        {
          highlightProjects.map((project, i) => (
            <HomeProjects.ProjectCard
              key={i}
              title={project.title}
              imagePreview={project.image}
              description={project.description}
              tags={project.tags}
              appLink={project.app}
              repoLink={project.repo}
            />
          ))
        }

        <Button href={'/projetos'}>
          Ver mais projetos
        </Button>
      </HomeProjects>

      <HomeContact>
        <ContactsInfo
          email={contacts.email}
          phone={contacts.phone}
          link_github={contacts.link_github}
          link_linkedin={contacts.link_linkedin}
          link_whatsapp={contacts.link_whatsapp}
        />
      </HomeContact>
    </main>
  )
}
