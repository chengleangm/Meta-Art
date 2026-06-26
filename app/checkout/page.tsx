'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { Lock, CreditCard, ChevronRight, Loader2 } from 'lucide-react'

const SHIPPING_OPTIONS = [
  { id: 'standard', label: 'Colissimo Standard (3-5 jours)', price: 5.99, free: true },
  { id: 'express', label: 'Chronopost Express (24h)', price: 9.99, free: false },
]

export default function CheckoutPage() {
  const { items, total } = useCart()
  const [shipping, setShipping] = useState('standard')
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const selectedShipping = SHIPPING_OPTIONS.find((s) => s.id === shipping)!
  const shippingCost = total >= 50 && selectedShipping.free ? 0 : selectedShipping.price
  const grandTotal = total + shippingCost

  const handleStripeCheckout = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          shipping: { label: selectedShipping.label, cost: shippingCost },
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError(data.error ?? 'Une erreur est survenue.')
        setLoading(false)
      }
    } catch {
      setError('Impossible de contacter le serveur de paiement.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo/metaart.png"
              alt="Meta Art"
              width={140}
              height={46}
              className="object-contain"
              style={{ width: 'auto', height: '40px' }}
              priority
            />
          </Link>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Lock size={12} className="text-green-500" />
            Paiement sécurisé SSL
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Steps */}
        <div className="flex items-center gap-3 mb-8">
          {['Coordonnées', 'Livraison', 'Paiement'].map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <div className={`flex items-center gap-2 text-sm font-semibold ${step > i + 1 ? 'text-green-600' : step === i + 1 ? 'text-black' : 'text-gray-300'}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  step > i + 1 ? 'bg-green-500 text-white' : step === i + 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  {step > i + 1 ? '✓' : i + 1}
                </div>
                <span className="hidden sm:block">{s}</span>
              </div>
              {i < 2 && <ChevronRight size={14} className="text-gray-300" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 space-y-5">
            {/* Contact info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-4 text-lg">Coordonnées</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Prénom</label>
                  <input type="text" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-lime-400" placeholder="Jean" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Nom</label>
                  <input type="text" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-lime-400" placeholder="Dupont" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email</label>
                  <input type="email" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-lime-400" placeholder="jean@exemple.fr" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Téléphone</label>
                  <input type="tel" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-lime-400" placeholder="+33 6 12 34 56 78" />
                </div>
              </div>
            </div>

            {/* Shipping address */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-4 text-lg">Adresse de livraison</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Adresse</label>
                  <input type="text" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-lime-400" placeholder="12 Rue de la Paix" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Code postal</label>
                    <input type="text" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-lime-400" placeholder="75001" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Ville</label>
                    <input type="text" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-lime-400" placeholder="Paris" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Pays</label>
                  <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-lime-400 bg-white">
                    <option>France</option>
                    <option>Belgique</option>
                    <option>Suisse</option>
                    <option>Luxembourg</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Shipping method */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-4 text-lg">Mode de livraison</h2>
              <div className="space-y-3">
                {SHIPPING_OPTIONS.map((opt) => {
                  const isFreeShipping = total >= 50 && opt.free
                  return (
                    <label
                      key={opt.id}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        shipping === opt.id ? 'border-lime-400 bg-lime-50' : 'border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="shipping"
                        value={opt.id}
                        checked={shipping === opt.id}
                        onChange={() => setShipping(opt.id)}
                        className="accent-lime-500"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">{opt.label}</p>
                      </div>
                      <p className={`text-sm font-bold ${isFreeShipping ? 'text-green-600' : 'text-gray-900'}`}>
                        {isFreeShipping ? 'Gratuit' : `${opt.price.toFixed(2)} €`}
                      </p>
                    </label>
                  )
                })}
              </div>
            </div>

            {/* Stripe Payment */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                <CreditCard size={20} className="text-lime-500" />
                Paiement sécurisé
              </h2>

              {/* Accepted cards */}
              <div className="flex items-center gap-2 mb-5">
                {['Visa', 'Mastercard', 'Amex', 'CB'].map((card) => (
                  <span key={card} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg border border-gray-200">
                    {card}
                  </span>
                ))}
                <span className="ml-auto flex items-center gap-1 text-xs text-gray-400">
                  <Lock size={11} className="text-green-500" />
                  Chiffrement SSL 256-bit
                </span>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-5 flex items-center gap-3">
                <svg viewBox="0 0 60 25" className="h-6 shrink-0" aria-label="Stripe">
                  <path d="M59.64 14.28h-8.06v-2.12c0-.88.44-1.32 1.24-1.32.8 0 1.24.44 1.24 1.32v.6h5.58v-.6C59.64 9.48 57.4 8 53.82 8c-3.6 0-5.84 1.48-5.84 4.28v2.12h-2.24v3.44h2.24V24h5.58v-8.28h5.52v-1.44zM10.34 24V8.28H4.76V24h5.58zM7.54 6.6c1.84 0 3.12-1.24 3.12-2.92 0-1.64-1.28-2.88-3.12-2.88S4.42 2.04 4.42 3.68C4.42 5.36 5.7 6.6 7.54 6.6zm16.6 10.44c0 1.44-.8 2.24-2.04 2.24-1.24 0-2.04-.8-2.04-2.24V8.28H14.5V17.4c0 4.12 2.44 6.92 6.88 6.92 1.52 0 2.88-.44 3.76-1.16V24h5.58V8.28h-5.58v8.76zM40.78 8c-1.48 0-2.8.52-3.68 1.32V8.28H31.5V24h5.58v-8.76c0-1.44.8-2.24 2.04-2.24 1.24 0 2.04.8 2.04 2.24V24h5.58v-9.12C46.74 10.8 44.22 8 40.78 8z" fill="#6772e5"/>
                </svg>
                <p className="text-sm text-gray-600">
                  Vous allez être redirigé vers <strong>Stripe</strong>, la plateforme de paiement sécurisée. Vos données bancaires ne transitent jamais par nos serveurs.
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600 font-medium">
                  {error}
                </div>
              )}

              <button
                onClick={handleStripeCheckout}
                disabled={loading || items.length === 0}
                className="w-full flex items-center justify-center gap-2 py-4 bg-lime-400 text-black font-bold rounded-2xl hover:bg-lime-300 transition-all shadow-lg shadow-lime-400/30 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Redirection vers Stripe…
                  </>
                ) : (
                  <>
                    <Lock size={18} />
                    Payer {grandTotal.toFixed(2)} € avec Stripe
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sticky top-20">
              <h2 className="font-bold text-gray-900 mb-4">Votre commande</h2>
              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-50 shrink-0">
                      <Image
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-900 truncate">{item.product.name}</p>
                      <p className="text-xs text-gray-400">x{item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold text-gray-900 shrink-0">
                      {(item.product.price * item.quantity).toFixed(2)} €
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Sous-total</span>
                  <span className="font-semibold">{total.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Livraison</span>
                  <span className={`font-semibold ${shippingCost === 0 ? 'text-green-600' : ''}`}>
                    {shippingCost === 0 ? 'Gratuite' : `${shippingCost.toFixed(2)} €`}
                  </span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t border-gray-100 text-base">
                  <span>Total TTC</span>
                  <span>{grandTotal.toFixed(2)} €</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
