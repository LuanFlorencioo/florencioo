import ItemList from "./ItemList";

export default function Navbar() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-30 animate-navbar">
      <nav className="w-full h-max py-10 px-5 bg-gray-100 border-b-2 border-gray-300 shadow-nav flex justify-center absolute top-[74px] right-0 z-30">
        <ul className="w-max flex flex-col items-center gap-8">
          <ItemList idSection="#inicio" text="Início" />

          <ItemList idSection="#habilidades" text="Habilidades" />

          <ItemList idSection="#projetos" text="Principais Projetos" />

          <ItemList idSection="#contato" text="Contato" />
        </ul>
      </nav>
    </div>
  )
}
