import Title from "./Title";
import Subtitle from "./Subtitle";
import Avatar from "./Avatar";
import Button from "./Button";
import Arrow from "./Arrow";

export default function Intro() {
  return (
    <section id="inicio" className="w-full pt-[174px] px-5 pb-40 bg-[url('/background.png')] bg-cover bg-no-repeat md:h-[720px] relative">
      <div className="box-container h-full flex flex-col justify-evenly items-center gap-10 md:flex-row">
        <article className="w-max flex flex-col gap-4 select-none">
          <Title />

          <Subtitle />
        </article>

        <article className="w-max flex flex-col justify-center items-center gap-4">
          <Avatar />

          <Button />
        </article>
      </div>

      <Arrow />
    </section>
  )
}
