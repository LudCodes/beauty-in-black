import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Beauty in Black | Beleza, Cabelos e Identidade',
  description: 'Conheça o Beauty in Black, um conceito de salão dedicado à valorização da beleza negra, ao cuidado capilar e à autoestima feminina.',
  generator: 'v0.app',
  keywords: ['beleza negra', 'salão de beleza', 'cabelos naturais', 'tranças', 'Beauty in Black'],
  openGraph: {
    title: 'Beauty in Black | Sua beleza. Suas raízes. Seu poder.',
    description: 'Um espaço para sua beleza existir sem pedir licença.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = { themeColor: '#0A0909', colorScheme: 'dark', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
