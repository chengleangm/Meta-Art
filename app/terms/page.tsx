import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description: 'Conditions Générales de Vente de Meta Art SAS — Boutique e-commerce d\'impression 3D.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-700">Accueil</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">CGV</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Conditions Générales de Vente</h1>
        <p className="text-gray-400 text-sm mb-8">Dernière mise à jour : 1er janvier 2024 — Meta Art SAS</p>

        <div className="prose prose-sm max-w-none space-y-8">
          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Article 1 — Objet et champ d&apos;application</h2>
            <p className="text-gray-600 leading-relaxed">
              Les présentes Conditions Générales de Vente (CGV) s&apos;appliquent à toutes les ventes conclues par la société Meta Art SAS, SIREN 123 456 789, dont le siège social est situé 12 Rue de l&apos;Innovation, 75011 Paris, sur le site internet meta-art.fr. Toute commande implique l&apos;acceptation pleine et entière des présentes CGV.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Article 2 — Prix</h2>
            <p className="text-gray-600 leading-relaxed">
              Les prix indiqués sur le site sont exprimés en euros, toutes taxes comprises (TVA française de 20%). Meta Art se réserve le droit de modifier ses prix à tout moment, mais les produits seront facturés au prix en vigueur lors de la validation de la commande.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Article 3 — Commandes</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              La commande est ferme et définitive dès sa validation par le client. Une confirmation de commande est adressée par email. Meta Art se réserve le droit d&apos;annuler toute commande pour un motif légitime (rupture de stock, fraude présumée, erreur de prix).
            </p>
            <p className="text-gray-600 leading-relaxed">
              Pour les produits numériques (fichiers STL, 3MF, OBJ), le téléchargement vaut livraison. Conformément à l&apos;article L.221-28 du Code de la consommation, le droit de rétractation ne s&apos;applique pas aux contenus numériques fournis sur un support immatériel dont l&apos;exécution a commencé après consentement du consommateur.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Article 4 — Paiement</h2>
            <p className="text-gray-600 leading-relaxed">
              Le paiement s&apos;effectue en ligne par carte bancaire (Visa, Mastercard, American Express) ou PayPal, via une connexion sécurisée SSL. Le débit est effectué au moment de la validation de la commande.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Article 5 — Livraison</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Les produits physiques sont livrés à l&apos;adresse indiquée lors de la commande. Les délais de livraison sont donnés à titre indicatif. Meta Art ne saurait être tenu responsable des retards imputables aux transporteurs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              La livraison est offerte pour toute commande de 50€ ou plus (hors service Express) en France métropolitaine. Pour les commandes inférieures à 50€, les frais de port sont de 5.99€ en Colissimo standard.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Article 6 — Droit de rétractation et retours</h2>
            <p className="text-gray-600 leading-relaxed">
              Conformément à la directive européenne 2011/83/UE, le client dispose d&apos;un délai de 14 jours (étendu à 30 jours chez Meta Art) à compter de la réception du produit pour exercer son droit de rétractation. Le produit doit être retourné dans son emballage d&apos;origine, non utilisé. Les frais de retour sont à la charge du client (sauf produit défectueux). Le remboursement intervient sous 14 jours maximum après réception du retour.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Article 7 — Garanties</h2>
            <p className="text-gray-600 leading-relaxed">
              Tous nos produits bénéficient de la garantie légale de conformité (2 ans) et de la garantie des vices cachés conformément aux articles L.217-4 et suivants du Code de la consommation. Les imprimantes 3D bénéficient en outre d&apos;une garantie constructeur d&apos;au moins 1 an.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Article 8 — Propriété intellectuelle</h2>
            <p className="text-gray-600 leading-relaxed">
              Les modèles 3D vendus sont protégés par le droit d&apos;auteur. Sauf mention contraire, la licence accordée est pour usage personnel uniquement. Toute reproduction, distribution ou revente sans autorisation expresse est interdite.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Article 9 — Résolution des litiges</h2>
            <p className="text-gray-600 leading-relaxed">
              En cas de litige, le client peut recourir à la médiation de la consommation. Meta Art est adhérent à la plateforme de médiation en ligne de l&apos;UE : <a href="https://ec.europa.eu/consumers/odr" className="text-lime-600 hover:underline" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>. Les présentes CGV sont soumises au droit français.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Article 10 — Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              Pour toute question relative aux présentes CGV : Meta Art SAS — 12 Rue de l&apos;Innovation, 75011 Paris — contact@meta-art.fr — +33 1 23 45 67 89.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
