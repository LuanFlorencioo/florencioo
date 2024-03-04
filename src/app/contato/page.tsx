import { HomeContact } from '@/components';
import ContactPicture from '@/assets/imgs/contact-picture.jpg';

export default function Contato() {
  return (
    <main className='w-full min-h-screen bg-brand-500'>
      <HomeContact>
        <HomeContact.Article>
          <HomeContact.Content>
            <HomeContact.Contact
              type='email'
              value='luanflorencio.dev@gmail.com'
            />

            <HomeContact.Contact
              type='phone'
              value='+55 21 96421-6903'
            />

            <HomeContact.SocialMedia />
          </HomeContact.Content>

          <HomeContact.Figure src={ContactPicture} alt='Contact Picture' />
        </HomeContact.Article>
      </HomeContact>
    </main>
  )
}
