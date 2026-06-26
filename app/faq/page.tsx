'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, MessageCircle } from 'lucide-react'

const faqCategories = [
  {
    id: 'orders',
    label: 'Commandes',
    color: 'bg-blue-100 text-blue-700',
    questions: [
      {
        q: 'Comment passer une commande sur Meta Art ?',
        a: 'Ajoutez les produits souhaités à votre panier, puis cliquez sur "Procéder au paiement". Renseignez vos coordonnées, choisissez votre mode de livraison et finalisez le paiement. Vous recevrez une confirmation par email.',
      },
      {
        q: 'Puis-je modifier ou annuler ma commande ?',
        a: 'Vous pouvez annuler ou modifier votre commande dans les 2 heures suivant la passation, avant qu\'elle soit préparée. Contactez notre support par email ou téléphone pour toute modification.',
      },
      {
        q: 'Comment suivre ma commande ?',
        a: 'Un email de confirmation avec numéro de suivi vous sera envoyé dès l\'expédition. Vous pouvez suivre votre colis directement sur le site du transporteur (Colissimo, Chronopost).',
      },
      {
        q: 'Acceptez-vous les commandes professionnelles ?',
        a: 'Oui, nous avons un programme B2B avec des remises sur volume et facturation avec TVA déductible. Contactez-nous à pro@meta-art.fr pour en savoir plus.',
      },
    ],
  },
  {
    id: 'shipping',
    label: 'Livraison',
    color: 'bg-green-100 text-green-700',
    questions: [
      {
        q: 'Quels sont les délais de livraison ?',
        a: 'En France métropolitaine : 3-5 jours ouvrés en Colissimo standard, 24h en Chronopost Express. Pour l\'Europe : 5-10 jours ouvrés. Les délais partent du jour d\'expédition.',
      },
      {
        q: 'La livraison est-elle gratuite ?',
        a: 'Oui, la livraison est offerte pour toute commande de 50€ ou plus en France métropolitaine (hors envoi Express). Pour les commandes inférieures à 50€, les frais sont de 5.99€.',
      },
      {
        q: 'Livrez-vous en dehors de la France ?',
        a: 'Nous livrons dans toute l\'Union Européenne ainsi qu\'en Suisse. Les frais de port varient selon le pays (8€ à 15€). Des frais de douane peuvent s\'appliquer hors UE.',
      },
      {
        q: 'Que faire si mon colis est perdu ou endommagé ?',
        a: 'Contactez-nous dans les 7 jours suivant la date de livraison prévue. Nous prendrons en charge le réacheminement ou le remboursement selon les disponibilités.',
      },
    ],
  },
  {
    id: 'products',
    label: 'Produits',
    color: 'bg-purple-100 text-purple-700',
    questions: [
      {
        q: 'Les filaments sont-ils compatibles avec toutes les imprimantes ?',
        a: 'Nos filaments 1.75mm sont compatibles avec la grande majorité des imprimantes FDM du marché (Bambu Lab, Prusa, Creality, Elegoo, Anycubic...). Vérifiez que votre imprimante utilise du filament 1.75mm.',
      },
      {
        q: 'Quelle résine choisir pour mon imprimante ?',
        a: 'Nos résines sont compatibles avec les imprimantes MSLA/LCD/DLP (385-405nm). Vérifiez la longueur d\'onde de votre machine. Notre résine Standard est recommandée pour débuter, l\'ABS-Like pour les pièces fonctionnelles.',
      },
      {
        q: 'Les modèles 3D sont-ils prêts à imprimer ?',
        a: 'Oui, tous nos modèles sont testés et optimisés pour l\'impression. Certains packs incluent des fichiers pré-supportés pour l\'impression résine. Les fichiers 3MF incluent les paramètres recommandés.',
      },
      {
        q: 'Proposez-vous des imprimantes reconditionnées ?',
        a: 'Actuellement, nous ne vendons que des produits neufs. Nous réfléchissons à un programme de reconditionnement certifié pour 2025. Inscrivez-vous à la newsletter pour être informé.',
      },
    ],
  },
  {
    id: 'returns',
    label: 'Retours',
    color: 'bg-rose-100 text-rose-700',
    questions: [
      {
        q: 'Quelle est la politique de retour ?',
        a: 'Vous disposez de 30 jours à compter de la réception pour retourner un article non utilisé dans son emballage d\'origine. Les retours pour changement d\'avis sont à votre charge ; ceux pour produit défectueux sont remboursés.',
      },
      {
        q: 'Comment demander un remboursement ?',
        a: 'Contactez notre support avec votre numéro de commande et la raison du retour. Nous traiterons votre demande sous 48h et le remboursement sera effectué sous 5-10 jours ouvrés.',
      },
      {
        q: 'Les fichiers numériques (STL) sont-ils remboursables ?',
        a: 'Conformément à la réglementation européenne, les produits numériques téléchargés ne sont pas remboursables. En cas d\'erreur de fichier, nous le remplaçons gratuitement.',
      },
    ],
  },
  {
    id: 'models',
    label: 'Modèles 3D',
    color: 'bg-amber-100 text-amber-700',
    questions: [
      {
        q: 'Puis-je utiliser les modèles à des fins commerciales ?',
        a: 'Cela dépend de la licence de chaque modèle (indiquée sur la fiche produit). Les modèles "Commercial" peuvent être imprimés et vendus ; les modèles "Personnel" sont pour usage privé uniquement.',
      },
      {
        q: 'Comment recevoir les fichiers après achat ?',
        a: 'Un email avec le lien de téléchargement vous est envoyé immédiatement après paiement. Les fichiers sont également disponibles dans votre espace client pendant 1 an.',
      },
      {
        q: 'Quels logiciels sont nécessaires pour ouvrir les fichiers STL ?',
        a: 'Les fichiers STL s\'ouvrent dans tous les slicers (Cura, PrusaSlicer, Bambu Studio, Chitubox). Pour modifier les modèles, vous aurez besoin de Blender, Fusion 360 ou similar.',
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className="text-sm font-semibold text-gray-900">{question}</span>
        <ChevronDown
          size={18}
          className={`text-gray-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-4 pr-8">
          <p className="text-sm text-gray-500 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('orders')

  const current = faqCategories.find((c) => c.id === activeCategory)!

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-700">Accueil</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">FAQ</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-14 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white mb-3">Questions fréquentes</h1>
          <p className="text-gray-400">Trouvez rapidement des réponses à vos questions. Si vous ne trouvez pas ce que vous cherchez, contactez-nous !</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-5">
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${current.color}`}>
              {current.label}
            </span>
            <p className="text-sm text-gray-400">{current.questions.length} questions</p>
          </div>
          {current.questions.map((faq) => (
            <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 bg-lime-50 border border-lime-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-lime-400 flex items-center justify-center shrink-0">
            <MessageCircle size={22} className="text-black" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="font-bold text-gray-900">Vous n&apos;avez pas trouvé votre réponse ?</p>
            <p className="text-sm text-gray-500">Notre équipe répond sous 24h en jours ouvrés.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-5 py-2.5 bg-lime-400 text-black font-bold rounded-xl hover:bg-lime-300 transition-all text-sm"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  )
}
