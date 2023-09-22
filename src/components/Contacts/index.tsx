import ContactList from "./ContactList";
import Subtitle from "./Subtile";
import Title from "./Title";
import Buttons from "./Buttons";

export default function Contacts() {
  return (
    <section id="contato" className="w-full py-20 px-5 bg-[url('/background-4.png')] bg-cover bg-no-repeat">
      <div className="box-container flex flex-wrap justify-evenly items-center gap-20">
        <Title />

        <Subtitle />

        <ContactList />

        <Buttons />
      </div>
    </section>
  )
}
