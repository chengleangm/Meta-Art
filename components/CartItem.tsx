'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Trash2, Minus, Plus } from 'lucide-react'
import { CartItem as CartItemType, useCart } from '@/context/CartContext'

interface CartItemProps {
  item: CartItemType
}

export default function CartItem({ item }: CartItemProps) {
  const { removeItem, updateQuantity } = useCart()
  const { product, quantity } = item

  return (
    <div className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
      {/* Image */}
      <Link href={`/shop/${product.slug}`} className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-50 shrink-0">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </Link>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <Link href={`/shop/${product.slug}`}>
              <h4 className="font-semibold text-gray-900 text-sm leading-tight truncate hover:text-gray-700">
                {product.name}
              </h4>
            </Link>
            <p className="text-xs text-gray-400 mt-0.5">{product.category}</p>
          </div>
          <button
            onClick={() => removeItem(product.id)}
            className="shrink-0 text-gray-300 hover:text-rose-500 transition-colors"
            aria-label="Supprimer"
          >
            <Trash2 size={16} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity selector */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-gray-600 hover:bg-lime-400 hover:text-black shadow-sm transition-all"
            >
              <Minus size={14} />
            </button>
            <span className="text-sm font-semibold text-gray-900 w-6 text-center">{quantity}</span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-gray-600 hover:bg-lime-400 hover:text-black shadow-sm transition-all"
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Prices */}
          <div className="text-right">
            <p className="text-sm font-extrabold text-gray-900">
              {(product.price * quantity).toFixed(2)} €
            </p>
            {quantity > 1 && (
              <p className="text-xs text-gray-400">{product.price.toFixed(2)} € / unité</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
