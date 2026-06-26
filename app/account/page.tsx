import type { Metadata } from 'next'
import Link from 'next/link'
import { User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Compte',
  description: 'Accedez a votre espace client Meta Art.',
}

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="w-14 h-14 rounded-2xl bg-lime-100 text-lime-700 flex items-center justify-center mx-auto mb-5">
          <User size={24} />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Compte</h1>
        <p className="text-gray-500 mb-8">
          La connexion client sera branchee ici lorsque l'authentification sera configuree.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-black text-white text-sm font-bold hover:bg-gray-800 transition-colors"
        >
          Continuer vos achats
        </Link>
      </div>
    </div>
  )
}
