import { useNavbarContext } from "@/contexts";

interface ItemListProps {
  idSection: "#inicio" | "#habilidades" | "#projetos" | "#contato"
  text: string
}

export default function ItemList({ idSection, text }: ItemListProps) {
  const { handleShowNavbar } = useNavbarContext();

  return (
    <li onClick={handleShowNavbar} className="font-inter font-bold text-xl text-gray-500 md:text-base md:hover:text-orange md:hover:scale-110 md:transition">
      <a href={idSection} className="p-5">
        {text}
      </a>
    </li>
  )
}
