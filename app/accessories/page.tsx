import type { Metadata } from 'next'
import Link from 'next/link'
import ProductGrid from '@/components/ProductGrid'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Accessoires & Outils',
  description: 'Accessoires, outils et pièces détachées pour imprimantes 3D. Plateaux PEI, buses, hotends, outils de finition.',
}

export default function AccessoriesPage() {
  const accessoryProducts = products.filter((p) =>
    ['accessories', 'tools', 'spare-parts'].includes(p.category)
  )

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-700">Accueil</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Accessoires &amp; Outils</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block bg-lime-400/20 text-lime-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Accessoires & Pièces
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Accessoires &amp; Outils
          </h1>
          <p className="text-gray-400 text-base max-w-xl">
            Tout ce qu&apos;il faut pour upgrader votre imprimante et finaliser vos impressions comme un professionnel.
          </p>
        </div>
      </div>

      {/* Category quick links */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap gap-3">
          {[
            { label: 'Accessoires', count: products.filter((p) => p.category === 'accessories').length },
            { label: 'Outils', count: products.filter((p) => p.category === 'tools').length },
            { label: 'Pièces détachées', count: products.filter((p) => p.category === 'spare-parts').length },
          ].map((c) => (
            <span key={c.label} className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl px-4 py-2">
              {c.label}
              <span className="bg-white rounded-lg px-2 py-0.5 text-xs font-bold text-gray-900">{c.count}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Tous les accessoires ({accessoryProducts.length} produits)
          </h2>
        </div>
        <ProductGrid products={accessoryProducts} />
      </div>
    </div>
  )
}
