'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { CheckCircle, Package, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 max-w-md w-full text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>

        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Commande confirmée !</h1>
        <p className="text-gray-500 mb-6 text-sm leading-relaxed">
          Merci pour votre achat. Vous allez recevoir un email de confirmation avec les détails de votre commande.
        </p>

        <div className="bg-lime-50 border border-lime-200 rounded-2xl p-4 mb-8 flex items-start gap-3 text-left">
          <Package className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-gray-800">Livraison en cours de préparation</p>
            <p className="text-xs text-gray-500 mt-0.5">Vous serez notifié par email dès l&apos;expédition de votre colis.</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/shop"
            className="flex items-center justify-center gap-2 py-3 bg-lime-400 text-black font-bold rounded-xl hover:bg-lime-300 transition-colors"
          >
            Continuer les achats
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/"
            className="py-3 text-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
