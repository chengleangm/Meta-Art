'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'bonjour@meta-art.fr',
    link: 'mailto:bonjour@meta-art.fr',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    value: '+33 1 23 45 67 89',
    link: 'tel:+33123456789',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    value: '12 Rue de l\'Innovation, 75011 Paris',
    link: 'https://maps.google.com',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Clock,
    title: 'Horaires',
    value: 'Lun-Ven : 9h - 18h',
    link: null,
    color: 'bg-amber-50 text-amber-600',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-700">Accueil</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Contact</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-14 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white mb-3">Contactez-nous</h1>
          <p className="text-gray-400">Notre équipe répond sous 24h en jours ouvrés. Nous sommes là pour vous aider !</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info cards */}
          <div className="space-y-4">
            <h2 className="font-bold text-gray-900 text-lg mb-5">Nos coordonnées</h2>
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${info.color}`}>
                  <info.icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{info.title}</p>
                  {info.link ? (
                    <a href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm font-semibold text-gray-900 hover:text-lime-600 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-gray-900">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* FAQ link */}
            <div className="bg-lime-50 border border-lime-200 rounded-2xl p-4 mt-4">
              <p className="text-sm font-semibold text-lime-800 mb-1">Consultez notre FAQ</p>
              <p className="text-xs text-lime-700 mb-3">Trouvez rapidement des réponses à vos questions.</p>
              <Link href="/faq" className="text-xs font-bold text-lime-700 hover:text-lime-900">
                Voir la FAQ →
              </Link>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h2 className="text-xl font-extrabold text-gray-900 mb-2">Message envoyé !</h2>
                  <p className="text-gray-500 mb-6">Nous reviendrons vers vous dans les 24h ouvrées.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="px-6 py-3 bg-lime-400 text-black font-bold rounded-2xl hover:bg-lime-300 transition-all"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-bold text-gray-900 text-xl mb-6">Envoyez-nous un message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Nom complet *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                          placeholder="Jean Dupont"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                          placeholder="jean@exemple.fr"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5">Sujet *</label>
                      <select
                        required
                        value={form.subject}
                        onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-lime-400 bg-white"
                      >
                        <option value="">Sélectionner un sujet...</option>
                        <option>Question sur un produit</option>
                        <option>Suivi de commande</option>
                        <option>Retour / Remboursement</option>
                        <option>Problème technique</option>
                        <option>Partenariat / Pro</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={6}
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-lime-400 resize-none"
                        placeholder="Décrivez votre question ou problème en détail..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-lime-400 text-black font-bold rounded-2xl hover:bg-lime-300 transition-all shadow-lg shadow-lime-400/20"
                    >
                      <Send size={18} />
                      Envoyer le message
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      En soumettant ce formulaire, vous acceptez notre{' '}
                      <Link href="/privacy" className="text-lime-600 hover:underline">politique de confidentialité</Link>.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
