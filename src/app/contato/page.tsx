import { ContactsInfo } from '@/components';
import { contacts } from '@/data';

export default function Contato() {
  return (
    <main className='w-full min-h-screen bg-brand-500'>
      <section className='w-full px-4 py-24 bg-brand-500'>
        <ContactsInfo
          email={contacts.email}
          phone={contacts.phone}
          link_github={contacts.link_github}
          link_linkedin={contacts.link_linkedin}
          link_whatsapp={contacts.link_whatsapp}
        />
      </section>
    </main>
  )
}
