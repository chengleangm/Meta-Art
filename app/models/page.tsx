'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Download, Star, Filter } from 'lucide-react'
import { models, ModelCategory, ModelFormat } from '@/lib/models'

const modelCategories: { id: ModelCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'Miniatures', label: 'Figurines' },
  { id: 'Home Decor', label: 'Déco Maison' },
  { id: 'Tools', label: 'Utilitaires' },
  { id: 'Toys', label: 'Jouets' },
  { id: 'Architecture', label: 'Architecture' },
  { id: 'Parts', label: 'Pièces' },
  { id: 'Jewelry', label: 'Bijoux' },
  { id: 'Art', label: 'Art' },
]

const formatOptions: { id: ModelFormat | 'all'; label: string }[] = [
  { id: 'all', label: 'Tous formats' },
  { id: 'STL', label: 'STL' },
  { id: 'OBJ', label: 'OBJ' },
  { id: '3MF', label: '3MF' },
]

export default function ModelsPage() {
  const [activeCategory, setActiveCategory] = useState<ModelCategory | 'all'>('all')
  const [activeFormat, setActiveFormat] = useState<ModelFormat | 'all'>('all')
  const [showFreeOnly, setShowFreeOnly] = useState(false)

  const filtered = models.filter((m) => {
    if (activeCategory !== 'all' && m.category !== activeCategory) return false
    if (activeFormat !== 'all' && !m.fileFormat.includes(activeFormat)) return false
    if (showFreeOnly && m.downloadType !== 'free') return false
    return true
  })

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-700">Accueil</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Modèles 3D</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gray-900 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block bg-lime-400/20 text-lime-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Bibliothèque numérique
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Modèles 3D STL &amp; 3MF
          </h1>
          <p className="text-gray-400 text-base max-w-xl">
            Des centaines de fichiers prêts à imprimer : figurines DnD, déco maison, pièces techniques, jouets et bien plus. Téléchargement immédiat après achat.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap gap-3 items-center">
          {/* Category */}
          <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
            {modelCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as ModelCategory | 'all')}
                className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="flex gap-1.5 ml-auto">
            {formatOptions.map((fmt) => (
              <button
                key={fmt.id}
                onClick={() => setActiveFormat(fmt.id as ModelFormat | 'all')}
                className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeFormat === fmt.id
                    ? 'bg-lime-400 text-black'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {fmt.label}
              </button>
            ))}
            <button
              onClick={() => setShowFreeOnly((v) => !v)}
              className={`shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                showFreeOnly ? 'bg-lime-400 text-black' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Filter size={12} /> Gratuit
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <p className="text-gray-400 text-sm mb-6">{filtered.length} modèle{filtered.length !== 1 ? 's' : ''} trouvé{filtered.length !== 1 ? 's' : ''}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((model) => (
            <div
              key={model.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={model.imageUrl}
                  alt={model.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  {model.fileFormat.map((fmt) => (
                    <span key={fmt} className="bg-black/70 text-lime-400 text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                      {fmt}
                    </span>
                  ))}
                </div>
                {model.downloadType === 'free' && (
                  <span className="absolute top-3 right-3 bg-lime-400 text-black text-[10px] font-black px-2 py-0.5 rounded-lg">
                    GRATUIT
                  </span>
                )}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-xs font-semibold text-gray-400 mb-1">{model.category}</span>
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 line-clamp-2 flex-1">
                  {model.name}
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} size={11} className={s <= Math.round(model.rating) ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">({model.reviewCount})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-extrabold text-gray-900">
                    {model.downloadType === 'free' ? (
                      <span className="text-lime-600">Gratuit</span>
                    ) : (
                      `${model.price.toFixed(2)} €`
                    )}
                  </span>
                  <button className="flex items-center gap-1.5 px-3 py-2 bg-lime-400 text-black text-xs font-bold rounded-xl hover:bg-lime-300 transition-colors shadow-sm">
                    <Download size={13} />
                    {model.downloadType === 'free' ? 'Télécharger' : 'Acheter'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">Aucun modèle ne correspond à vos filtres.</p>
          </div>
        )}
      </div>
    </div>
  )
}
