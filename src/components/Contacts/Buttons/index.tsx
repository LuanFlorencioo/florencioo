import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Button from "./button";

export default function Buttons() {
  return (
    <div className="w-full max-w-[500px] flex flex-col gap-3 md:w-max">
      <div className="w-full flex items-center gap-3 md:flex-col">
        <Button
          icon={BsLinkedin}
          label="LinkedIn"
          link="https://linkedin.com/in/luanflorencioo"
        />

        <Button
          icon={BsGithub}
          label="Github"
          link="https://github.com/LuanFlorencioo"
        />
      </div>

      <Button
        icon={BsWhatsapp}
        label="Conversar por Whatsapp"
        link="https://api.whatsapp.com/send?phone=+5521964216903&text=Olá, Luan! Venho entrar em contato após ter dado uma olhada no seu portfolio."
      />
    </div>
  )
}
