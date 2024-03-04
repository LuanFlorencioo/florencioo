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
} from '@/components';
import { knowledges, skills, highlightProjects } from '@/data';
import Me from '@/assets/imgs/me.png';
import ContactPicture from '@/assets/imgs/contact-picture.jpg';

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
            skills.map(({ image, label }) => (
              <SkillBadge key={label} image={image} label={label} />
            ))
          }
        </HomeKnowledge.SkillsContainer>

        <Button href={'/conhecimento'}>
          Saiba mais
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
        <HomeContact.Article>
          <HomeContact.Content>
            <HomeContact.Contact
              type='email'
              value='luanflorencio.dev@gmail.com'
            />

            <HomeContact.Contact
              type='phone'
              value='+55 21 96421-6903'
            />

            <HomeContact.SocialMedia />
          </HomeContact.Content>

          <HomeContact.Figure src={ContactPicture} alt='Contact Picture' />
        </HomeContact.Article>
      </HomeContact>
    </main>
  )
}
