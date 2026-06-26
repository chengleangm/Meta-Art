'use client'

import { useState } from 'react'
import Link from 'next/link'
import ProductGrid from '@/components/ProductGrid'
import { getProductsByCategory } from '@/lib/products'

const resinTypes = [
  { id: 'all', label: 'Tous types' },
  { id: 'standard', label: 'Standard' },
  { id: 'abs-like', label: 'ABS-Like' },
  { id: 'water-washable', label: 'Lavable à l\'eau' },
  { id: 'clear', label: 'Transparente' },
]

const resinGuide = [
  {
    type: 'Standard',
    use: 'Figurines, prototypage, maquettes',
    finish: 'Mat / Semi-brillant',
    washable: 'IPA (alcool isopropylique)',
    color: 'bg-amber-50 border-amber-200',
  },
  {
    type: 'ABS-Like',
    use: 'Pièces résistantes, pièces mécaniques',
    finish: 'Mat',
    washable: 'IPA',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    type: 'Eau Lavable',
    use: 'Usage général, moins de contraintes',
    finish: 'Semi-brillant',
    washable: 'Eau du robinet',
    color: 'bg-green-50 border-green-200',
  },
  {
    type: 'Transparente',
    use: 'Bijoux, effets vitrés, inclusions',
    finish: 'Transparent (polissable)',
    washable: 'IPA',
    color: 'bg-purple-50 border-purple-200',
  },
]

export default function ResinPage() {
  const [activeType, setActiveType] = useState('all')
  const resinProducts = getProductsByCategory('resin')

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-700">Accueil</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Résine</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-amber-900 to-orange-950 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block bg-lime-400/20 text-lime-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Résines SLA/MSLA
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Résines Photopolymères
          </h1>
          <p className="text-amber-200 text-base max-w-xl">
            Standard, ABS-Like, transparente, lavable à l&apos;eau — des résines haute précision pour vos imprimantes LCD/MSLA/DLP.
          </p>
        </div>
      </div>

      {/* Type filter */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {resinTypes.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveType(t.id)}
                className={`shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeType === t.id
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Résines ({resinProducts.length} produits)
          </h2>
        </div>
        <ProductGrid products={resinProducts} />
      </div>

      {/* Resin guide */}
      <div className="bg-white/60 border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Guide des types de résine</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resinGuide.map((g) => (
              <div key={g.type} className={`rounded-2xl border p-5 ${g.color}`}>
                <h3 className="font-bold text-gray-900 mb-3">{g.type}</h3>
                <dl className="space-y-1.5 text-sm">
                  <div>
                    <dt className="text-xs text-gray-500 font-medium">Utilisation</dt>
                    <dd className="text-gray-800">{g.use}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 font-medium">Finition</dt>
                    <dd className="text-gray-800">{g.finish}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 font-medium">Nettoyage</dt>
                    <dd className="text-gray-800">{g.washable}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          {/* Safety note */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-4">
            <p className="text-sm text-amber-800 font-medium">
              ⚠️ <strong>Sécurité résine :</strong> Portez toujours des gants en nitrile et des lunettes lors de la manipulation. Travaillez dans un espace bien ventilé. Conservez à l&apos;abri de la lumière et à température ambiante (15-25°C).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
