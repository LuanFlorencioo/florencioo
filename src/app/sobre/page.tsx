import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Faq, TitlePage } from '@/components';
import Profile from '@/assets/imgs/profile.png';

export default function Sobre() {
  return (
    <main className='w-full min-h-screen px-4 pt-40 pb-60 bg-brand-500 bg-light-1 bg-cover bg-center md:selection:bg-brand-200 md:selection:text-brand-500'>
      <div className='w-full max-w-4xl mx-auto flex flex-col gap-10'>
        <TitlePage>Sobre Mim</TitlePage>


        <article className='w-full flex flex-col md:flex-row gap-4'>
          <figure className='w-full max-w-[120px] md:max-w-[175px] aspect-square'>
            <Image
              src={Profile}
              alt='Foto de perfil'
              className='w-full h-full object-cover object-center rounded-lg'
            />
          </figure>

          <ul className='w-full flex flex-col items-start gap-2'>
            <li className='text-base text-brand-100'>
              <b>Idade:</b> 21 anos
            </li>

            <li className='text-base text-brand-100'>
              <b>Localidade:</b> Nova Iguaçu - Rio de Janeiro, Brasil
            </li>

            <li className='text-base text-brand-100'>
              <b>Pronomes:</b> ele/dele
            </li>

            <li className='text-base text-brand-100'>
              <b>Cargo:</b> Desenvolvedor Web FullStack
            </li>

            <li className='text-base text-brand-100'>
              <b>Idiomas:</b> Inglês, Português (Nativo)
            </li>

            <li className='text-base text-brand-100'>
              <b>Hobbies:</b> Jogar futebol, Ler livros, Praticar exercícios físicos e Jogar videogames
            </li>
          </ul>
        </article>


        <article className='w-full flex flex-col gap-4'>
          <p className='text-base text-brand-100'>
            Meu nome é Luan Florêncio, tenho 21 anos, moro no Rio de Janeiro, e de costume de qualquer carioca, adoro uma praia, churrasco, samba e um bom domingo de futebol para assistir.
          </p>

          <p className='text-base text-brand-100'>
            Sobre mim, caracterizo-me como alguém em constante evolução, dedicado a aprender e expandir meus conhecimentos diariamente, em busca da minha melhor versão. Carrego uma intrínseca criatividade e curiosidade como parte integrante dessa filosofia de vida. Assim como o sol ilumina o dia, acredito que o conhecimento ilumina nossas mentes.
          </p>

          <p className='text-base text-brand-100'>
            Durante o Ensino Médio descobri minha vocação para ser um programador e desenvolvedor, visto que posso dedicar-me apaixonadamente ao trabalho que está sempre em atualização e aprodundar-me contiuamente nas nuances desse campo. A cada dia que passa me apaixono cada vez mais por esse vasto e fascinante universo da programação.
          </p>
        </article>

        <article className='w-full flex flex-col gap-4'>
          <h3 className='font-bold text-2xl text-brand-200 uppercase'>
            Profissionalização
          </h3>

          <p className='text-base text-brand-100'>
            Sou formado em Desenvolvimento Web Full Stack na <Link href='https://kenzie.com.br/' target='_blank' className='font-bold text-brand-300'>Kenzie Academy Brasil</Link>, uma renomada escola online de programação. Ao longo de 12 meses, dediquei-me intensivamente para adquirir o conhecimento essencial que me capacitou a destacar-me como profissional na área. Durante essa jornada, não apenas aprimorei minhas habilidades técnicas (hard skills), mas também desenvolvi competências socioemocionais (soft skills) fundamentais.
          </p>

          <p className='text-base text-brand-100'>
            A experiência foi enriquecedora, permitindo-me não apenas a realização de diversos projetos desafiadores, mas também a imersão em novas tecnologias e metodologias de trabalho em grupo. Esta trajetória não apenas consolidou meu domínio técnico, mas também fortaleceu minha capacidade de colaboração e adaptação a diferentes contextos profissionais, na qual pude desempenhar na prática papéis como UI/UX Designer, QA e Tech Leader.
          </p>

          <p className='text-base text-brand-100'>
            Ao longo do curso na Kenzie, vivenciei uma oportunidade excepcional ao assumir o papel de aluno-monitor. Nessa função, desempenhei um papel crucial ao orientar uma nova turma iniciante no primeiro módulo. Minhas responsabilidades incluíam auxiliar os alunos, esclarecer dúvidas, fornecer suporte no processo de aprendizagem e orientar na execução de projetos utilizando HTML, CSS, Javascript. Essa experiência enriquecedora fortaleceu não apenas meu conhecimento técnico, mas também minha habilidade de compartilhar e facilitar o aprendizado para outros estudantes.
          </p>

          <p className='text-base text-brand-100'>
            Atualmente estou cursando Análise e Desenvolvimento de Sistemas na <Link href='https://www.unopar.com.br/' target='_blank' className='font-bold text-brand-300'>UNOPAR</Link>, com previsão de conclusão em junho de 2024. Ao longo dos últimos dois anos, minha jornada acadêmica tem sido enriquecedora, proporcionando um profundo aprendizado na área de tecnologia da informação.
          </p>

          <p className='text-base text-brand-100'>
            Durante esse período, fui exposto a uma ampla gama de conhecimentos, abrangendo temas cruciais como desenvolvimento de software, programação, computação em nuvem, banco de dados, análise e modelagem de dados, sistemas operacionais, redes de computadores, engenharia de software, projeto de software, análise de sistemas, entre outros.
          </p>
        </article>

        <article className='w-full flex flex-col gap-4'>
          <h3 className='font-bold text-2xl text-brand-200 uppercase'>
            Interesses Pessoais
          </h3>

          <p className='text-base text-brand-100'>
            Desde a minha infância, cultivava o hábito de jogar futebol e ir ao Maracanã torcer para o Flamengo, sempre imerso em um ambiente repleto de amigos e familiares que compartilhavam o mesmo amor pelo esporte, sendo todos fervorosos torcedores do Flamengo. Isso incluía meu saudoso pai, minha mãe e, principalmente, meu irmão mais velho.
          </p>

          <p className='text-base text-brand-100'>
            Embora meu gênero favorito seja a ficção científica, aprecio bastante a imersão nos clássicos tanto da literatura nacional, como os de Jorge Amado, Fernando Sabino e Machado de Assis, quanto dos autores internacionais, incluindo nomes como Dostoiévski, Charles Dickens, Thomas Mann e Isaac Asimov.
          </p>

          <p className='text-base text-brand-100'>
            Essa diversidade literária enriquece minha experiência de leitura, proporcionando uma ampla variedade de perspectivas e estilos. Como disse o astrônomo e renomado cientista, Carl Sagan, "Um livro é a prova de que os homens são capazes de fazer magia."
          </p>
        </article>

        <div className='w-full flex justify-end'>
          <Link href='/' className='flex items-center gap-2 text-brand-300'>
            Ir para os contato <FaArrowRightLong />
          </Link>
        </div>

        <Faq />
      </div>
    </main>
  )
}
