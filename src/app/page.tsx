import { HomeGreeting, HomeHero, HomeTypewriter } from '@/components';

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
    </main>
  )
}