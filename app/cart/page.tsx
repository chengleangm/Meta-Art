'use client'

import Link from 'next/link'
import { ShoppingCart, ArrowRight, Tag } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import CartItem from '@/components/CartItem'

const SHIPPING_THRESHOLD = 50
const SHIPPING_COST = 5.99
const TAX_RATE = 0.20

export default function CartPage() {
  const { items, total, clearCart } = useCart()
  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)

  const shipping = total >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST
  const tax = total * TAX_RATE
  const grandTotal = total + shipping

  const applyPromo = () => {
    if (promoCode.toUpperCase() === 'META10') {
      setPromoApplied(true)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="w-20 h-20 rounded-3xl bg-gray-100 flex items-center justify-center mb-6">
          <ShoppingCart size={36} className="text-gray-300" />
        </div>
        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Votre panier est vide</h1>
        <p className="text-gray-400 text-center max-w-xs mb-8">
          Découvrez notre boutique et ajoutez des produits à votre panier pour commencer vos achats.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-4 bg-lime-400 text-black font-bold rounded-2xl hover:bg-lime-300 transition-all shadow-lg shadow-lime-400/30"
        >
          Continuer vos achats <ArrowRight size={18} />
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-700">Accueil</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Panier</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Votre panier</h1>
          <button
            onClick={clearCart}
            className="text-sm text-gray-400 hover:text-red-500 transition-colors font-medium"
          >
            Vider le panier
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <Link
                href="/shop"
                className="text-sm font-semibold text-gray-600 hover:text-gray-900 flex items-center gap-1"
              >
                ← Continuer vos achats
              </Link>
            </div>
          </div>

          {/* Order summary */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-20">
              <h2 className="font-bold text-gray-900 text-lg mb-5">Récapitulatif</h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Sous-total</span>
                  <span className="font-semibold text-gray-900">{total.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Livraison</span>
                  <span className={`font-semibold ${shipping === 0 ? 'text-green-600' : 'text-gray-900'}`}>
                    {shipping === 0 ? 'Gratuite' : `${shipping.toFixed(2)} €`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray-400">
                    Encore {(SHIPPING_THRESHOLD - total).toFixed(2)} € pour la livraison gratuite
                  </p>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">TVA (20%)</span>
                  <span className="font-semibold text-gray-900">{tax.toFixed(2)} €</span>
                </div>
              </div>

              {/* Promo code */}
              <div className="border-t border-gray-100 pt-4 mb-4">
                {promoApplied ? (
                  <div className="flex items-center gap-2 text-green-600 text-sm font-semibold bg-green-50 rounded-xl px-3 py-2">
                    <Tag size={14} />
                    Code META10 appliqué (-10%)
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Code promo"
                      className="flex-1 text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:ring-2 focus:ring-lime-400 min-w-0"
                    />
                    <button
                      onClick={applyPromo}
                      className="px-4 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-black transition-colors shrink-0"
                    >
                      Appliquer
                    </button>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="border-t border-gray-100 pt-4 mb-5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">Total TTC</span>
                  <span className="text-2xl font-extrabold text-gray-900">{grandTotal.toFixed(2)} €</span>
                </div>
              </div>

              {/* Checkout button */}
              <Link
                href="/checkout"
                className="w-full flex items-center justify-center gap-2 py-4 bg-lime-400 text-black font-bold rounded-2xl hover:bg-lime-300 active:bg-lime-500 transition-all shadow-lg shadow-lime-400/30 text-base"
              >
                Procéder au paiement <ArrowRight size={18} />
              </Link>

              <div className="mt-4 flex flex-col gap-1.5 text-center">
                <p className="text-xs text-gray-400">Paiement 100% sécurisé — SSL</p>
                <div className="flex items-center justify-center gap-2">
                  {['Visa', 'MC', 'Amex', 'PayPal'].map((p) => (
                    <span key={p} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-medium">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
