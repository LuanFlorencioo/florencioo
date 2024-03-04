import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Footer, Header } from '@/components';
import { font } from '@/styles';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luan Florencio Dev.',
  description: 'Website e portfolio profissional do desenvolvedor Web Fullstack Luan Florencio. Confira e conheça um pouco mais sobre a carreira e seus projetos pessoais como desenvoledor e programador.',
}

type RootLayoutProps = {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='pt-BR' className={font.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
