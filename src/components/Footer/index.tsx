import { pages } from '@/data';
import Copyright from './Copyright';
import FooterNav from './FooterNav';
import FooterTitle from './FooterTitle';

export default function Footer() {
  return (
    <footer className='w-full px-4 py-20 static bottom-0 left-0 bg-blob bg-cover bg-no-repeat md:bg-center'>
      <div className='max-w-default mx-auto flex flex-col gap-12 md:flex-row md:flex-wrap md:justify-between'>
        <FooterTitle>
          Florencioo
        </FooterTitle>

        <FooterNav.Root>
          <FooterNav.MainPageList>
            {
              pages.map((page) => (
                <FooterNav.Link key={page.label} href={page.href}>
                  {page.label}
                </FooterNav.Link>
              ))
            }
          </FooterNav.MainPageList>

          <FooterNav.OtherPageList>
            <FooterNav.Link href='/meu-curriculo'>
              Meu Currículo
            </FooterNav.Link>

            <FooterNav.Link href='/faq'>
              FAQ
            </FooterNav.Link>

            <FooterNav.Link href='/sobre-este-portfolio'>
              Sobre Este Portfólio
            </FooterNav.Link>
          </FooterNav.OtherPageList>
        </FooterNav.Root>

        <Copyright>
          2023 © Copyrights. Todos os direitos reservados.
        </Copyright>
      </div>
    </footer>
  )
}
