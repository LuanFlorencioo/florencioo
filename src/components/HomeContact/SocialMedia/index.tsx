import { SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import { MdPeople } from 'react-icons/md';
import { Button } from '@/components';

export default function SocialMedia() {
  return (
    <div className='w-full flex flex-col gap-2'>
      <h3 className='font-bold text-lg text-brand-100 flex items-center gap-2 md:selection:bg-brand-200 md:selection:text-brand-500'>
        <MdPeople /> Redes Socias:
      </h3>

      <div className='w-full flex flex-col justify-center items-center xs:items-start gap-4'>
        <Button target='_blank' href='https://api.whatsapp.com/send?phone=+5521964216903&text=Olá, Luan! Estou entrando em contato depois de analisar cuidadosamente o seu portfólio.'>
          <SiWhatsapp /> Whatsapp
        </Button>

        <Button target='_blank' href='https://linkedin.com/in/luanflorencioo'>
          <SiLinkedin /> LinkedIn
        </Button>

        <Button target='_blank' href='https://github.com/LuanFlorencioo'>
          <SiGithub /> Github
        </Button>
      </div>
    </div>
  )
}
