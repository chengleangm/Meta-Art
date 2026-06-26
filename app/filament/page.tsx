'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getProductsByCategory } from '@/lib/products'
import { filaments, FilamentMaterial } from '@/lib/filaments'
import ProductGrid from '@/components/ProductGrid'

const materials: { id: FilamentMaterial; label: string; desc: string; color: string }[] = [
  { id: 'PLA', label: 'PLA', desc: 'Facile à imprimer, biodégradable, idéal débutants', color: 'bg-blue-500' },
  { id: 'PETG', label: 'PETG', desc: 'Résistant, translucide, usage extérieur', color: 'bg-purple-500' },
  { id: 'ABS', label: 'ABS', desc: 'Résistance thermique élevée, post-usinable', color: 'bg-orange-500' },
  { id: 'TPU', label: 'TPU', desc: 'Flexible, élastomère, coques et joints', color: 'bg-rose-500' },
  { id: 'Carbon Fiber', label: 'Carbone', desc: 'Ultra rigide, léger, aspect technique', color: 'bg-gray-800' },
  { id: 'Silk PLA', label: 'Soie', desc: 'Brillant, effet métallique, décoratif', color: 'bg-pink-500' },
]

const materialGuide = [
  { material: 'PLA', temp: '190-220°C', bed: '20-60°C', difficulty: 'Facile', color: 'bg-blue-100 text-blue-800' },
  { material: 'PETG', temp: '230-250°C', bed: '70-90°C', difficulty: 'Intermédiaire', color: 'bg-purple-100 text-purple-800' },
  { material: 'ABS', temp: '230-250°C', bed: '90-110°C', difficulty: 'Avancé', color: 'bg-orange-100 text-orange-800' },
  { material: 'TPU', temp: '220-240°C', bed: '30-60°C', difficulty: 'Intermédiaire', color: 'bg-rose-100 text-rose-800' },
  { material: 'Carbon Fiber', temp: '200-230°C', bed: '25-60°C', difficulty: 'Avancé', color: 'bg-gray-100 text-gray-800' },
  { material: 'Silk PLA', temp: '190-220°C', bed: '20-60°C', difficulty: 'Facile', color: 'bg-pink-100 text-pink-800' },
]

export default function FilamentPage() {
  const [activeMaterial, setActiveMaterial] = useState<FilamentMaterial | 'all'>('all')
  const filamentProducts = getProductsByCategory('filament')
  const filteredProducts = activeMaterial === 'all'
    ? filamentProducts
    : filamentProducts.filter((p) =>
        p.tags.some((t) => t.toLowerCase() === activeMaterial.toLowerCase().replace(' ', ''))
      )

  const filteredFilaments = activeMaterial === 'all'
    ? filaments
    : filaments.filter((f) => f.material === activeMaterial)

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-700">Accueil</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Filament</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-900 to-purple-950 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block bg-lime-400/20 text-lime-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Filaments Premium
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Filaments 1.75mm
          </h1>
          <p className="text-purple-300 text-base max-w-xl">
            PLA, PETG, ABS, TPU, Fibre de carbone, Soie — tolérance ±0.02mm pour des impressions parfaites.
          </p>
        </div>
      </div>

      {/* Material type tabs */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            <button
              onClick={() => setActiveMaterial('all')}
              className={`shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeMaterial === 'all'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Tous les filaments
            </button>
            {materials.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveMaterial(m.id)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeMaterial === m.id
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${m.color}`} />
                {m.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Color swatches grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Coloris disponibles</h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {filteredFilaments.map((f) => (
            <div key={f.id} className="flex flex-col items-center gap-1">
              <div
                className="w-10 h-10 rounded-full border-2 border-gray-200 shadow-sm cursor-pointer hover:scale-110 hover:shadow-md transition-all"
                style={{ backgroundColor: f.colorHex }}
                title={`${f.material} ${f.color}`}
              />
              <span className="text-[10px] text-gray-400 font-medium max-w-[48px] text-center leading-tight">{f.color}</span>
            </div>
          ))}
        </div>

        {/* Products grid */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-extrabold text-gray-900">
            {activeMaterial === 'all' ? 'Tous les filaments' : activeMaterial} ({filamentProducts.length} produits)
          </h2>
        </div>
        <ProductGrid products={filamentProducts} />
      </div>

      {/* Material guide */}
      <div className="bg-white/60 border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Guide des matériaux filament</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="pb-3 pr-4 font-semibold text-gray-500">Matériau</th>
                  <th className="pb-3 pr-4 font-semibold text-gray-500">Temp. impression</th>
                  <th className="pb-3 pr-4 font-semibold text-gray-500">Temp. plateau</th>
                  <th className="pb-3 font-semibold text-gray-500">Difficulté</th>
                </tr>
              </thead>
              <tbody>
                {materialGuide.map((row) => (
                  <tr key={row.material} className="border-b border-gray-100">
                    <td className="py-3 pr-4">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${row.color}`}>
                        {row.material}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-gray-700">{row.temp}</td>
                    <td className="py-3 pr-4 text-gray-700">{row.bed}</td>
                    <td className="py-3 text-gray-700">{row.difficulty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
