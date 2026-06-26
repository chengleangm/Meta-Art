import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import { LanguageProvider } from '@/context/LanguageContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Meta Art — Boutique 3D Printing Française',
    template: '%s | Meta Art',
  },
  description:
    'Meta Art est votre boutique française spécialisée en impression 3D. Imprimantes, filaments PLA/PETG/ABS, résines SLA, modèles 3D STL et accessoires. Livraison rapide en France et Europe.',
  keywords: ['impression 3D', 'filament', 'imprimante 3D', 'résine', 'modèles STL', 'boutique française', '3D printing'],
  openGraph: {
    siteName: 'Meta Art',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <CartProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
