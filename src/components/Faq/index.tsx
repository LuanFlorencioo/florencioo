import Ask from './Ask';

export default function Faq() {
  return (
    <article className='w-full flex flex-col gap-10'>
      <h2 className='font-bold text-2xl text-brand-100 md:selection:bg-brand-200 md:selection:text-brand-500'>FAQ - Perguntas frequentes</h2>
 
      <ul className='w-full border-t border-b border-brand-400 divide-y divide-brand-400'>
        <Ask question='Quais são seus 3 pontos fortes em sua personalidade?'>
          <ul className='w-full flex flex-col gap-2 text-brand-100 md:selection:bg-brand-200 md:selection:text-brand-500'>
            <li>
              <p>
                <strong>Criatividade:</strong> Minha imaginação é uma poderosa ferramenta que me impulsiona a encontrar soluções únicas e gerar ideias e pensar fora da caixa. Particularmente, aprecio realizar atividades que me permitem liberar minha imaginação sem restrições.
              </p>
            </li>

            <li>
              <p>
                <strong>Explorador:</strong> A vontade de aprender, o desejo de desbravar e aprofundar novos conhecimentos e a busca pelo novo e desconhecido alimenta meu crescimento pessoal, expandindo meu horizonte e permitindo que eu possa explorar com resiliência coisas importantes e que acho interessantes.
              </p>
            </li>

            <li>
              <p>
                <strong>Racionalidade:</strong> Minha abordagem racional se destaca na maneira como tomo minhas decisões. Ao ponderar as opções disponíveis, considerando prós e contras, eu construo uma base sólida para minhas escolhas. A minha capacidade de analisar questões de maneira lógica e objetiva permite que eu desenvolva estratégias eficientes para superar obstáculos, transformando desafios em oportunidades de crescimento.
              </p>
            </li>
          </ul>
        </Ask>

        <Ask question='Quais são seus 5 filmes favoritos?'>
          <ol className='w-full flex flex-col gap-2 text-brand-100 md:selection:bg-brand-200 md:selection:text-brand-500'>
            {
              [
                'Interestelar',
                'A Origem',
                'A Chegada',
                'Cidade de Deus',
                'Projeto Almanaque',
              ].map((movie, i) => (
                <li key={movie}>
                  <p>{i + 1}° - <strong>{movie}</strong></p>
                </li>
              ))
            }
          </ol>
        </Ask>

        <Ask question='Quais tecnologias você utilizou na construção deste site?'>
          <p className='w-full text-brand-100 md:selection:bg-brand-200 md:selection:text-brand-500'>
            Eu utilizei NextJS, um framework React para desenvolvimento web front-end que tem a funcionalidade de renderização do lado do servidor e geração de sites estáticos em sua essência. E para estilização escolhi utilizar a biblioteca TailwindCSS.
          </p>
        </Ask>
      </ul>
    </article>
  )
}
