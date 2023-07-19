import './globals.css';
import type { Metadata } from 'next';
import { ChildrenProp } from '@/common';

export const metadata: Metadata = {
  title: "Luan Florencio | Porfolio",
  description: "Portfolio by Luan Florencio",
  applicationName: "Portfolio by Luan Florencio",
}

export default function RootLayout({ children }: ChildrenProp) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
