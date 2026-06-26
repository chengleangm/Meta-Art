import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité RGPD de Meta Art — Comment nous collectons et utilisons vos données personnelles.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-700">Accueil</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Politique de confidentialité</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Politique de Confidentialité</h1>
        <p className="text-gray-400 text-sm mb-2">Dernière mise à jour : 1er janvier 2024</p>
        <p className="text-gray-500 text-sm mb-8">
          Meta Art SAS s&apos;engage à protéger vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés.
        </p>

        <div className="space-y-6">
          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Responsable du traitement</h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>Meta Art SAS</strong><br />
              SIREN : 123 456 789<br />
              Siège : 12 Rue de l&apos;Innovation, 75011 Paris, France<br />
              DPO : dpo@meta-art.fr<br />
              Téléphone : +33 1 23 45 67 89
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Données collectées</h2>
            <p className="text-gray-600 leading-relaxed mb-3">Nous collectons les données suivantes :</p>
            <ul className="text-gray-600 space-y-1.5 list-disc list-inside">
              <li>Données d&apos;identité : nom, prénom, email, téléphone</li>
              <li>Données de livraison : adresse postale</li>
              <li>Données de paiement : non stockées (traitées par notre PSP certifié PCI-DSS)</li>
              <li>Données de navigation : cookies, adresse IP, pages visitées</li>
              <li>Historique de commandes et préférences</li>
              <li>Communications : emails, messages de contact</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Finalités et bases légales</h2>
            <div className="space-y-3">
              {[
                { purpose: 'Traitement des commandes', base: 'Exécution du contrat' },
                { purpose: 'Service après-vente et support', base: 'Exécution du contrat' },
                { purpose: 'Newsletter marketing', base: 'Consentement' },
                { purpose: 'Analyse du site et amélioration', base: 'Intérêt légitime' },
                { purpose: 'Obligations légales (comptabilité)', base: 'Obligation légale' },
                { purpose: 'Lutte contre la fraude', base: 'Intérêt légitime' },
              ].map((row) => (
                <div key={row.purpose} className="flex items-start gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-lime-400 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">{row.purpose}</span>
                    <span className="text-gray-500"> — Base : {row.base}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Durée de conservation</h2>
            <ul className="text-gray-600 space-y-1.5 list-disc list-inside">
              <li>Données de compte : jusqu&apos;à la suppression du compte + 3 ans</li>
              <li>Données de commandes : 10 ans (obligation comptable)</li>
              <li>Cookies analytiques : 13 mois</li>
              <li>Données marketing : jusqu&apos;au retrait du consentement</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Vos droits</h2>
            <p className="text-gray-600 mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="text-gray-600 space-y-1.5 list-disc list-inside">
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification en cas d&apos;inexactitude</li>
              <li>Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p className="text-gray-600 mt-3">
              Pour exercer ces droits : dpo@meta-art.fr. Vous pouvez également introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés) sur <a href="https://www.cnil.fr" className="text-lime-600 hover:underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez gérer vos préférences de cookies à tout moment.
            </p>
            <div className="space-y-2">
              {[
                { type: 'Cookies essentiels', desc: 'Nécessaires au fonctionnement du site (panier, session). Ne peuvent pas être désactivés.' },
                { type: 'Cookies analytiques', desc: 'Mesure d\'audience (Google Analytics). Activés avec votre consentement.' },
                { type: 'Cookies marketing', desc: 'Personnalisation des publicités. Activés avec votre consentement.' },
              ].map((c) => (
                <div key={c.type} className="bg-gray-50 rounded-xl p-3 text-sm">
                  <p className="font-semibold text-gray-900">{c.type}</p>
                  <p className="text-gray-500">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Transferts internationaux</h2>
            <p className="text-gray-600 leading-relaxed">
              Certains prestataires peuvent transférer des données hors de l&apos;UE (ex : serveurs AWS). Dans ce cas, Meta Art s&apos;assure que des garanties appropriées sont en place (clauses contractuelles types de la Commission Européenne, certification Privacy Shield ou équivalent).
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contact DPO</h2>
            <p className="text-gray-600 leading-relaxed">
              Pour toute question relative à vos données personnelles, contactez notre Délégué à la Protection des Données (DPO) :<br />
              <strong>Email :</strong> dpo@meta-art.fr<br />
              <strong>Courrier :</strong> Meta Art SAS — DPO — 12 Rue de l&apos;Innovation, 75011 Paris
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
