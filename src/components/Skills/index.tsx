import Title from "./Title";
import Subtitle from "./Subtitle";
import Stacks from "./Stacks";
import Illustration from "./Illustration";

export default function Skills() {
  return (
    <section id="habilidades" className="w-full py-20 px-5 bg-[url('/background-2.svg')] bg-cover bg-bottom bg-no-repeat selection:text-orange selection:bg-white relative">
      <div className="box-container flex flex-wrap justify-center gap-10 md:justify-between">
        <Title />

        <div className="w-full max-w-[350px] flex flex-col items-center gap-10 md:max-w-[40%]">
          <Subtitle />

          <Stacks />
        </div>

        <Illustration />
      </div>
    </section>
  )
}
