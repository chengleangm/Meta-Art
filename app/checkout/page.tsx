'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { Lock, CreditCard, ChevronRight } from 'lucide-react'

const SHIPPING_OPTIONS = [
  { id: 'standard', label: 'Colissimo Standard (3-5 jours)', price: 5.99, free: true },
  { id: 'express', label: 'Chronopost Express (24h)', price: 9.99, free: false },
]

export default function CheckoutPage() {
  const { items, total } = useCart()
  const [shipping, setShipping] = useState('standard')
  const [step, setStep] = useState(1)

  const selectedShipping = SHIPPING_OPTIONS.find((s) => s.id === shipping)!
  const shippingCost = total >= 50 && selectedShipping.free ? 0 : selectedShipping.price
  const grandTotal = total + shippingCost

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center">
              <span className="text-lime-400 font-black text-xs">MA</span>
            </div>
            <span className="font-extrabold text-gray-900">Meta<span className="text-lime-500">Art</span></span>
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

            {/* Payment placeholder */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                <CreditCard size={20} className="text-lime-500" />
                Paiement
              </h2>
              {/* TODO: Connect payment provider here (Stripe, PayPlug, etc.) */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-center">
                <p className="font-semibold text-blue-800 mb-2">Intégration paiement à connecter</p>
                <p className="text-sm text-blue-600">
                  Cette section est prête à recevoir l&apos;intégration d&apos;un prestataire de paiement : <strong>Stripe</strong>, <strong>PayPlug</strong> (recommandé France), <strong>Mollie</strong> ou autre.
                </p>
                <div className="flex justify-center gap-3 mt-3">
                  {['Stripe', 'PayPlug', 'Mollie', 'Adyen'].map((p) => (
                    <span key={p} className="text-xs bg-white border border-blue-200 text-blue-700 px-3 py-1 rounded-lg font-semibold">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <button className="mt-4 w-full flex items-center justify-center gap-2 py-4 bg-lime-400 text-black font-bold rounded-2xl hover:bg-lime-300 transition-all shadow-lg shadow-lime-400/30">
                <Lock size={18} />
                Confirmer la commande — {grandTotal.toFixed(2)} €
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
