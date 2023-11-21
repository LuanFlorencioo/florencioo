import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { font } from '@/styles';
import './globals.css';

export const metadata: Metadata = {
  title: 'Florencioo',
  description: 'Portfolio profissional do Luan Florencio como desenvolvedor web',
}

type RootLayoutProps = {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={font.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
