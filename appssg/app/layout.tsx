import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KW Szuflandia',
  description: 'Produkujemy ręcznie robione meble. Zajmujemy się głównie tworzeniem organizerów, szuflad, stolików i skrzyń. KW Szuflandia to stolarnia. Znajdujemy się w Cięcinie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
