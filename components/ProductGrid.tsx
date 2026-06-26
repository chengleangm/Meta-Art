import ProductCard from './ProductCard'
import { Product } from '@/lib/products'
import { Package } from 'lucide-react'

interface ProductGridProps {
  products: Product[]
  isLoading?: boolean
  className?: string
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
      <div className="bg-gray-200 aspect-[4/3]" />
      <div className="p-4">
        <div className="h-3 bg-gray-200 rounded w-1/3 mb-3" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-3 bg-gray-200 rounded w-full mb-1" />
        <div className="h-3 bg-gray-200 rounded w-2/3 mb-3" />
        <div className="h-3 bg-gray-200 rounded w-1/2 mb-3" />
        <div className="h-8 bg-gray-200 rounded-xl w-full mt-3" />
      </div>
    </div>
  )
}

export default function ProductGrid({ products, isLoading = false, className = '' }: ProductGridProps) {
  if (isLoading) {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ${className}`}>
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
          <Package size={32} className="text-gray-400" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Aucun produit trouvé</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Modifiez vos filtres ou revenez plus tard pour découvrir de nouveaux produits.
        </p>
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
