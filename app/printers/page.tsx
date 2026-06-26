import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ProductGrid from '@/components/ProductGrid'
import { getProductsByCategory } from '@/lib/products'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Imprimantes 3D',
  description: 'Découvrez notre sélection d\'imprimantes 3D FDM et résine : Bambu Lab, Prusa, Elegoo, Anycubic. Prix compétitifs, livraison rapide.',
}

const buyingGuide = [
  {
    title: 'Débutants',
    desc: 'Optez pour une imprimante FDM avec nivelage automatique et grande communauté (Ender 3, Bambu A1 Mini).',
    color: 'bg-blue-50 border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Enthousiastes',
    desc: 'Une imprimante multi-matériaux ou haute vitesse CoreXY pour des projets plus ambitieux (Bambu X1C, Prusa MK4).',
    color: 'bg-purple-50 border-purple-200',
    badge: 'bg-purple-100 text-purple-700',
  },
  {
    title: 'Professionnels',
    desc: 'Les résines MSLA pour la précision (figurines, bijoux) ou les imprimantes industrielles pour la production en série.',
    color: 'bg-amber-50 border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
  },
]

const printerFeatures = [
  'Nivelage automatique',
  'Volume d\'impression 250x250+',
  'Compatibilité multi-filaments',
  'Connectivité WiFi',
  'Écran tactile',
  'Caméra intégrée',
]

export default function PrintersPage() {
  const printers = getProductsByCategory('printers')

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-700">Accueil</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Imprimantes 3D</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-black py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://picsum.photos/seed/ma-printers-hero/1200/600"
            alt="3D Printers"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block bg-lime-400/20 text-lime-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Imprimantes 3D
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Imprimer sans limites
            </h1>
            <p className="text-gray-300 text-base mb-6">
              Des imprimantes FDM et résine pour tous les niveaux — du débutant passionné au maker professionnel. Performance, fiabilité et précision.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {printerFeatures.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle size={15} className="text-lime-400 shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-60">
              <Image
                src="https://picsum.photos/seed/ma-printer1/600/400"
                alt="3D Printer"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Toutes nos imprimantes ({printers.length})
          </h2>
        </div>
        <ProductGrid products={printers} />
      </div>

      {/* Buying guide */}
      <div className="bg-white/60 border-t border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Guide d&apos;achat imprimante 3D</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {buyingGuide.map((g) => (
              <div key={g.title} className={`rounded-2xl border p-5 ${g.color}`}>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${g.badge} mb-3 inline-block`}>
                  {g.title}
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
