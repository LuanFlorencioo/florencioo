import { InputFilterTech, KnowledgeTechs, TitlePage } from '@/components';

export default function Conhecimento() {
  return (
    <main className='w-full min-h-screen px-4 pt-40 pb-60 bg-brand-500 bg-light-2 bg-cover bg-center'>
      <section className='w-full max-w-4xl mx-auto flex flex-col gap-20'>
        <TitlePage>Conhecimento</TitlePage>

        <InputFilterTech />

        <KnowledgeTechs />
      </section>
    </main>
  )
}
