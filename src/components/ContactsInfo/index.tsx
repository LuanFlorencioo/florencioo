import { SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import { Contacts } from '@/models';
import { Button } from '@/components';
import Background from '@/assets/imgs/contact-picture.jpg';
import Content from './Content';
import Contact from './Contact';
import Figure from './Figure';
import SocialMedia from './SocialMedia';

export default function ContactsInfo(contacts: Contacts) {
  return (
    <article className='w-full max-w-5xl mx-auto rounded-lg border border-brand-400 bg-brand-500 shadow-2xl flex flex-col md:flex-row-reverse md:bg-light-3 md:bg-right-bottom md:bg-cover md:bg-no-repeat'>
      <Content>
        <Contact type='email' value={contacts.email} />

        <Contact type='phone' value={contacts.phone} />

        <SocialMedia>
          <Button target='_blank' href={contacts.link_whatsapp}>
            <SiWhatsapp /> Whatsapp
          </Button>

          <Button target='_blank' href={contacts.link_linkedin}>
            <SiLinkedin /> LinkedIn
          </Button>

          <Button target='_blank' href={contacts.link_github}>
            <SiGithub /> Github
          </Button>
        </SocialMedia>
      </Content>

      <Figure src={Background} alt='Contact Picture' />
    </article>
  )
}
