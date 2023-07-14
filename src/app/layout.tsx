import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Luan Florencio | Porfolio",
  description: "Portfolio by Luan Florencio",
  applicationName: "Portfolio by Luan Florencio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
