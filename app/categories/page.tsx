import type { Metadata } from 'next'
import Link from 'next/link'
import CategoryCard from '@/components/CategoryCard'
import { categories } from '@/lib/categories'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Toutes les catégories',
  description: 'Explorez toutes les catégories de notre boutique 3D : imprimantes, filaments, résines, modèles 3D et accessoires.',
}

export default function CategoriesPage() {
  const totalProducts = products.length
  const totalCategories = categories.length

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-700">Accueil</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Catégories</span>
          </nav>
        </div>
      </div>

      {/* Hero banner */}
      <div className="bg-gradient-to-br from-gray-900 to-black py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-lime-400/20 text-lime-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Catalogue complet
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Toutes nos catégories
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            {totalCategories} catégories · {totalProducts}+ produits · Livraison dans toute l&apos;Europe
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-white">{totalProducts}+</p>
              <p className="text-xs text-gray-400">Produits</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-white">{totalCategories}</p>
              <p className="text-xs text-gray-400">Catégories</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-white">24h</p>
              <p className="text-xs text-gray-400">Expédition</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Explorer par catégorie</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>

        {/* Category details list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/${cat.slug}`}
              className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-lime-200 transition-all duration-300 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900">{cat.name}</h3>
                <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
                  {cat.productCount}+
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{cat.description}</p>
              <span className="text-xs font-semibold text-lime-600 group-hover:text-lime-700">
                Explorer →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
