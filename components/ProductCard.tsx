'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Star, Heart } from 'lucide-react'
import { Product } from '@/lib/products'
import { useCart } from '@/context/CartContext'
import { useLanguage } from '@/context/LanguageContext'

interface ProductCardProps {
  product: Product
  className?: string
}

const categoryColors: Record<string, string> = {
  printers: 'bg-blue-100 text-blue-700',
  filament: 'bg-purple-100 text-purple-700',
  resin: 'bg-amber-100 text-amber-700',
  models: 'bg-green-100 text-green-700',
  accessories: 'bg-rose-100 text-rose-700',
  tools: 'bg-gray-100 text-gray-700',
  'spare-parts': 'bg-cyan-100 text-cyan-700',
}

const categoryKeyFr: Record<string, string> = {
  printers: 'Imprimante',
  filament: 'Filament',
  resin: 'Résine',
  models: 'Modèle 3D',
  accessories: 'Accessoire',
  tools: 'Outil',
  'spare-parts': 'Pièce détachée',
}

const categoryKeyEn: Record<string, string> = {
  printers: 'Printer',
  filament: 'Filament',
  resin: 'Resin',
  models: '3D Model',
  accessories: 'Accessory',
  tools: 'Tool',
  'spare-parts': 'Spare Part',
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={13}
          className={
            star <= Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'
          }
        />
      ))}
    </div>
  )
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  const { addItem } = useCart()
  const { t, language } = useLanguage()

  const catLabels = language === 'fr' ? categoryKeyFr : categoryKeyEn
  const catLabel = catLabels[product.category] ?? product.category
  const catColor = categoryColors[product.category] ?? 'bg-gray-100 text-gray-700'

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 flex flex-col ${className}`}
    >
      {/* Image */}
      <Link href={`/shop/${product.slug}`} className="relative block overflow-hidden bg-gray-50 aspect-[4/3]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
            -{discount}%
          </span>
        )}
        {product.bestSeller && (
          <span className="absolute top-3 right-3 bg-lime-400 text-black text-xs font-bold px-2 py-1 rounded-lg">
            {t.product.bestSeller}
          </span>
        )}
        <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-rose-500 hover:bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-200">
          <Heart size={16} />
        </button>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-lg ${catColor}`}>
            {catLabel}
          </span>
          {product.inStock ? (
            product.stockCount < 10 ? (
              <span className="text-xs text-orange-600 font-medium">{t.product.lowStock}</span>
            ) : (
              <span className="text-xs text-green-600 font-medium">{t.product.inStock}</span>
            )
          ) : (
            <span className="text-xs text-red-500 font-medium">{t.product.outOfStock}</span>
          )}
        </div>

        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1 hover:text-gray-700 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs text-gray-400 line-clamp-2 mb-3 leading-relaxed flex-1">
          {product.shortDescription}
        </p>

        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-400">
            ({product.reviewCount} {t.product.reviews})
          </span>
        </div>

        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-xl font-extrabold text-gray-900">{product.price.toFixed(2)} €</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">{product.originalPrice.toFixed(2)} €</span>
          )}
        </div>

        <button
          onClick={() => addItem(product)}
          disabled={!product.inStock}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-lime-400 text-black text-sm font-semibold hover:bg-lime-300 active:bg-lime-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm shadow-lime-400/30"
        >
          <ShoppingCart size={16} />
          {product.inStock ? t.product.addToCart : t.product.unavailable}
        </button>
      </div>
    </div>
  )
}
