'use client'

import { useState } from 'react'
import { Save, Store, User, Truck, Receipt } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'
import UploadBox from '@/components/admin/UploadBox'

type Tab = 'store' | 'profile' | 'shipping' | 'tax'

const tabs: { value: Tab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { value: 'store', label: 'Infos boutique', icon: Store },
  { value: 'profile', label: 'Profil admin', icon: User },
  { value: 'shipping', label: 'Livraison', icon: Truck },
  { value: 'tax', label: 'TVA & Taxes', icon: Receipt },
]

const inputClass =
  'w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent'
const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5'

function SaveButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 px-5 py-2.5 bg-lime-400 hover:bg-lime-500 rounded-xl text-sm font-semibold text-black transition-colors"
    >
      <Save className="w-4 h-4" />
      Enregistrer
    </button>
  )
}

function StoreTab() {
  const [form, setForm] = useState({
    storeName: 'Meta Art',
    email: 'contact@meta-art.fr',
    phone: '+33 1 23 45 67 89',
    address: '12 Rue de l\'Innovation, 75001 Paris, France',
    currency: 'EUR',
  })
  const set = (k: string, v: string) => setForm((prev) => ({ ...prev, [k]: v }))
  const handleSave = () => {
    // TODO: Save store info to Supabase or env config
    console.log('Store info saved:', form)
    alert('Informations enregistrées (console.log).')
  }
  return (
    <div className="space-y-5">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Logo</h3>
        <UploadBox label="Logo de la boutique" accept="image/png, image/svg+xml, image/webp" />
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Informations générales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Nom de la boutique</label>
            <input className={inputClass} value={form.storeName} onChange={(e) => set('storeName', e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Email de contact</label>
            <input type="email" className={inputClass} value={form.email} onChange={(e) => set('email', e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Téléphone</label>
            <input className={inputClass} value={form.phone} onChange={(e) => set('phone', e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Devise</label>
            <input className={`${inputClass} bg-gray-50 cursor-not-allowed`} value="EUR — Euro (€)" readOnly />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>Adresse</label>
            <input className={inputClass} value={form.address} onChange={(e) => set('address', e.target.value)} />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <SaveButton onClick={handleSave} />
      </div>
    </div>
  )
}

function ProfileTab() {
  const [form, setForm] = useState({
    name: 'Administrateur',
    email: 'admin@meta-art.fr',
    currentPw: '',
    newPw: '',
    confirmPw: '',
  })
  const set = (k: string, v: string) => setForm((prev) => ({ ...prev, [k]: v }))
  const handleSave = () => {
    // TODO: Update admin profile in Supabase Auth
    console.log('Profile saved:', form)
    alert('Profil enregistré (console.log).')
  }
  return (
    <div className="space-y-5">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Informations du compte</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Nom</label>
            <input className={inputClass} value={form.name} onChange={(e) => set('name', e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input type="email" className={inputClass} value={form.email} onChange={(e) => set('email', e.target.value)} />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Changer le mot de passe</h3>
        <div className="space-y-4 max-w-sm">
          {[
            { key: 'currentPw', label: 'Mot de passe actuel', placeholder: '••••••••' },
            { key: 'newPw', label: 'Nouveau mot de passe', placeholder: '••••••••' },
            { key: 'confirmPw', label: 'Confirmer le nouveau mot de passe', placeholder: '••••••••' },
          ].map(({ key, label, placeholder }) => (
            <div key={key}>
              <label className={labelClass}>{label}</label>
              <input
                type="password"
                className={inputClass}
                value={form[key as keyof typeof form]}
                onChange={(e) => set(key, e.target.value)}
                placeholder={placeholder}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <SaveButton onClick={handleSave} />
      </div>
    </div>
  )
}

function ShippingTab() {
  const zones = [
    { zone: 'France métropolitaine', carrier: 'Colissimo', delay: '2-3 jours', price: '6.90€ / Gratuit dès 80€' },
    { zone: 'Europe (UE)', carrier: 'DHL Express', delay: '3-5 jours', price: '14.90€' },
    { zone: 'France (Mondial Relay)', carrier: 'Mondial Relay', delay: '3-4 jours', price: '4.90€' },
  ]
  return (
    <div className="space-y-5">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-900">Zones de livraison</h3>
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-lg">
            Connecter un prestataire pour activer la gestion avancée
          </span>
        </div>
        <div className="space-y-3">
          {zones.map((z) => (
            <div key={z.zone} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50/50 transition-colors">
              <div>
                <p className="text-sm font-medium text-gray-900">{z.zone}</p>
                <p className="text-xs text-gray-500">{z.carrier} — {z.delay}</p>
              </div>
              <p className="text-sm font-semibold text-gray-900">{z.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center text-center">
        <Truck className="w-10 h-10 text-gray-200 mb-3" />
        <p className="text-gray-500 font-medium">Prestataire de livraison</p>
        <p className="text-sm text-gray-400 mt-1 max-w-sm">
          Connectez Colissimo, Mondial Relay, DHL ou votre transporteur pour activer la gestion automatique des envois.
        </p>
      </div>
    </div>
  )
}

function TaxTab() {
  return (
    <div className="space-y-5">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Configuration TVA</h3>
        <div className="space-y-3">
          {[
            { label: 'TVA standard (produits physiques)', rate: '20%', status: 'Actif' },
            { label: 'TVA réduite (livres numériques)', rate: '5.5%', status: 'Inactif' },
            { label: 'Exonéré (exportation hors UE)', rate: '0%', status: 'Inactif' },
          ].map((t) => (
            <div key={t.label} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
              <div>
                <p className="text-sm font-medium text-gray-900">{t.label}</p>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    t.status === 'Actif' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {t.status}
                </span>
              </div>
              <p className="text-lg font-bold text-gray-900">{t.rate}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center text-center">
        <Receipt className="w-10 h-10 text-gray-200 mb-3" />
        <p className="text-gray-500 font-medium">Intégration comptable</p>
        <p className="text-sm text-gray-400 mt-1 max-w-sm">
          TVA 20% configurée par défaut. Connectez votre logiciel comptable (Pennylane, Sage, Quickbooks) pour une gestion fiscale avancée.
        </p>
      </div>
    </div>
  )
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('store')

  return (
    <AdminLayout>
      <div className="space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
          <p className="text-sm text-gray-500 mt-0.5">Configurez votre boutique Meta Art.</p>
        </div>

        {/* Tab nav */}
        <div className="flex gap-1 overflow-x-auto pb-1">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === tab.value
                    ? 'bg-[#0f172a] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab content */}
        {activeTab === 'store' && <StoreTab />}
        {activeTab === 'profile' && <ProfileTab />}
        {activeTab === 'shipping' && <ShippingTab />}
        {activeTab === 'tax' && <TaxTab />}
      </div>
    </AdminLayout>
  )
}
