import { IconType } from "react-icons/lib";
import { BsDiscord, BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

interface Contact {
  label: string
  value: string
  icon: IconType
}

const contacts: Contact[] = [
  {
    label: "E-mail",
    value: "luanflorencio.dev@gmail.com",
    icon: HiOutlineMail,
  },
  {
    label: "Celular",
    value: "+55 (21) 96421-6903",
    icon: BsFillTelephoneFill,
  },
  {
    label: "Discord",
    value: "florencioo",
    icon: BsDiscord,
  },
]

export default contacts;
