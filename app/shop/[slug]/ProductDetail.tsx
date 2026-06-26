'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Heart, Star, Minus, Plus, Truck, Shield, RefreshCw, ChevronDown } from 'lucide-react'
import { Product } from '@/lib/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ProductCard'

interface ProductDetailProps {
  product: Product
  related: Product[]
}

export default function ProductDetail({ product, related }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [accordionOpen, setAccordionOpen] = useState<string | null>(null)
  const { addItem } = useCart()

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const toggleAccordion = (key: string) =>
    setAccordionOpen((v) => (v === key ? null : key))

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400 flex-wrap">
            <Link href="/" className="hover:text-gray-700">Accueil</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-gray-700">Boutique</Link>
            <span>/</span>
            <Link href={`/${product.category}`} className="hover:text-gray-700 capitalize">{product.category}</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Image gallery */}
          <div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100 mb-4">
              <Image
                src={product.images[activeImage] ?? product.imageUrl}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {discount > 0 && (
                <span className="absolute top-4 left-4 bg-rose-500 text-white text-sm font-bold px-3 py-1 rounded-xl">
                  -{discount}%
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === idx ? 'border-lime-400 shadow-md' : 'border-transparent hover:border-gray-200'
                    }`}
                  >
                    <Image src={img} alt={`Vue ${idx + 1}`} fill sizes="80px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <span className="inline-block bg-lime-100 text-lime-800 text-xs font-bold px-2 py-1 rounded-lg mb-2 capitalize">
                  {product.category}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">{product.name}</h1>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={16} className={s <= Math.round(product.rating) ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'} />
                ))}
              </div>
              <span className="text-sm text-gray-500 font-medium">{product.rating} ({product.reviewCount} avis)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-4xl font-extrabold text-gray-900">{product.price.toFixed(2)} €</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">{product.originalPrice.toFixed(2)} €</span>
              )}
              {discount > 0 && (
                <span className="text-sm bg-rose-100 text-rose-600 font-bold px-2 py-0.5 rounded-lg">-{discount}%</span>
              )}
            </div>

            {/* Stock */}
            <div className="mb-5">
              {product.inStock ? (
                <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${product.stockCount < 10 ? 'text-orange-600' : 'text-green-600'}`}>
                  <span className={`w-2 h-2 rounded-full ${product.stockCount < 10 ? 'bg-orange-400' : 'bg-green-400'}`} />
                  {product.stockCount < 10 ? `Stock limité (${product.stockCount} restants)` : 'En stock'}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-500">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  Rupture de stock
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 border-l-4 border-lime-400 pl-4">
              {product.shortDescription}
            </p>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-1.5">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-gray-600 hover:bg-lime-400 hover:text-black shadow-sm transition-all"
                >
                  <Minus size={16} />
                </button>
                <span className="text-lg font-bold text-gray-900 w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-gray-600 hover:bg-lime-400 hover:text-black shadow-sm transition-all"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={() => addItem(product, quantity)}
                disabled={!product.inStock}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-lime-400 text-black font-bold hover:bg-lime-300 active:bg-lime-500 transition-all shadow-lg shadow-lime-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart size={18} />
                Ajouter au panier
              </button>
              <button className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-rose-500 hover:border-rose-200 shadow-sm transition-all">
                <Heart size={20} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-3 gap-1">
                <Truck size={18} className="text-lime-500" />
                <p className="text-xs font-medium text-gray-700">Livraison rapide</p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-3 gap-1">
                <Shield size={18} className="text-lime-500" />
                <p className="text-xs font-medium text-gray-700">Garantie 2 ans</p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-3 gap-1">
                <RefreshCw size={18} className="text-lime-500" />
                <p className="text-xs font-medium text-gray-700">Retour 30j</p>
              </div>
            </div>

            {/* Tags */}
            {product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Accordions: Description, Specs, Shipping */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Description */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <button
              onClick={() => toggleAccordion('desc')}
              className="w-full flex items-center justify-between px-6 py-4 text-left"
            >
              <h2 className="font-bold text-gray-900">Description complète</h2>
              <ChevronDown
                size={20}
                className={`text-gray-400 transition-transform ${accordionOpen === 'desc' ? 'rotate-180' : ''}`}
              />
            </button>
            {accordionOpen === 'desc' && (
              <div className="px-6 pb-6">
                <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            )}
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <button
              onClick={() => toggleAccordion('specs')}
              className="w-full flex items-center justify-between px-6 py-4 text-left"
            >
              <h2 className="font-bold text-gray-900">Caractéristiques techniques</h2>
              <ChevronDown
                size={20}
                className={`text-gray-400 transition-transform ${accordionOpen === 'specs' ? 'rotate-180' : ''}`}
              />
            </button>
            {accordionOpen === 'specs' && (
              <div className="px-6 pb-6">
                <dl className="divide-y divide-gray-50">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex py-2.5 gap-4">
                      <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide w-40 shrink-0">{key}</dt>
                      <dd className="text-sm text-gray-900 font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>

        {/* Shipping info */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-16">
          <h2 className="font-bold text-gray-900 mb-4">Livraison &amp; Retours</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-900 mb-1">Colissimo (3-5j)</p>
              <p className="text-gray-400">Gratuit dès 50€, sinon 5.99€</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Chronopost (24h)</p>
              <p className="text-gray-400">9.99€ — Livraison le lendemain</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Retours</p>
              <p className="text-gray-400">30 jours pour changer d&apos;avis. Retour gratuit si défaut.</p>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Produits similaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
