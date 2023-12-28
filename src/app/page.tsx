import {
  Button,
  HomeAbout,
  HomeGreeting,
  HomeHero,
  HomeTypewriter,
  HomeKnowledge,
  HomeKnowledgeCard,
} from '@/components';
import { knowledges, pages } from '@/data';
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
            Desde ainda pequeno, sempre me interessei por tecnologia e pude encontrar nisso uma vocação intrínseca alinhado a minha criatividade e vontade de absorver conhecimento.
          </HomeAbout.Text>

          <HomeAbout.Text>
            Sou desenvolvedor web com muito orgulho pelo o que faço, tendo diversos projetos e aplicações que realizei durante toda essa minha jornada com estudos e aprofundamento.
          </HomeAbout.Text>

          <Button href={pages.find(page => page.label === 'Sobre Mim')?.href}>
            Ler Mais
          </Button>
        </HomeAbout.Article>

        <HomeAbout.Figure src={Me} alt='Me' />
      </HomeAbout>

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

        <HomeKnowledge.Text>
          Clique no botão abaixo para ver quais são as tecnologias, frameworks e ferramentas que utilizo
        </HomeKnowledge.Text>

        <Button href={pages.find(page => page.label === 'Conhecimento')?.href}>
          Saber Mais
        </Button>
      </HomeKnowledge>
    </main>
  )
}
