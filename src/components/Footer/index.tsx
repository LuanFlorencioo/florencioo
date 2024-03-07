import { FlorenciooLogo } from '@/components';
import { pages } from '@/data';
import FooterNav from './FooterNav';

export default function Footer() {
  return (
    <footer className='w-full px-4 py-20 static bottom-0 left-0 bg-dark-3 bg-cover bg-no-repeat md:bg-center'>
      <div className='max-w-default mx-auto flex flex-col gap-12'>
        <span className='w-full'>
          <FlorenciooLogo style='light' />
        </span>

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
            <FooterNav.Link target='_blank' href='https://docs.google.com/document/d/1q4wOX2x_j2vgnr4EXCb_WEP__a1DR9I-xlj7ao89GMM/edit?usp=sharing'>
              Curriculum vitæ
            </FooterNav.Link>

            <FooterNav.Link target='_blank' href='https://linkedin.com/in/luanflorencioo/'>
              LinkedIn
            </FooterNav.Link>

            <FooterNav.Link target='_blank' href='https://github.com/LuanFlorencioo/'>
              Github
            </FooterNav.Link>
          </FooterNav.OtherPageList>
        </FooterNav.Root>
      </div>
    </footer>
  )
}
