import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Zap, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À propos de Meta Art',
  description: 'Découvrez l\'histoire de Meta Art, boutique française spécialisée en impression 3D depuis 2019.',
}

const team = [
  {
    name: 'Alexandre Moreau',
    role: 'Fondateur & CEO',
    bio: 'Passionné d\'impression 3D depuis 2012, Alexandre a fondé Meta Art pour rendre l\'impression 3D accessible à tous.',
    initials: 'AM',
    color: 'bg-blue-500',
  },
  {
    name: 'Sophie Lefèvre',
    role: 'Directrice Technique',
    bio: 'Ingénieure en matériaux, Sophie supervise la sélection et le testing de tous les produits de la boutique.',
    initials: 'SL',
    color: 'bg-purple-500',
  },
  {
    name: 'Théo Blanchard',
    role: 'Responsable Support',
    bio: 'Maker passionné, Théo guide nos clients avec expertise et créativité depuis plus de 3 ans.',
    initials: 'TB',
    color: 'bg-lime-500',
  },
  {
    name: 'Camille Durand',
    role: 'Designer 3D',
    bio: 'Camille crée les modèles exclusifs Meta Art et développe nos tutoriels d\'impression premium.',
    initials: 'CD',
    color: 'bg-rose-500',
  },
]

const milestones = [
  { year: '2019', title: 'Fondation de Meta Art', desc: 'Lancement de la boutique en ligne avec 50 produits.' },
  { year: '2020', title: '1 000 clients', desc: 'Première année complète avec 1 000 commandes livrées.' },
  { year: '2021', title: 'Modèles 3D numériques', desc: 'Lancement de notre bibliothèque de fichiers STL et 3MF.' },
  { year: '2022', title: 'Expansion européenne', desc: 'Livraison disponible dans 15 pays européens.' },
  { year: '2023', title: '10 000 clients', desc: 'Cap des 10 000 clients satisfaits franchi.' },
  { year: '2024', title: 'Catalogue premium', desc: 'Plus de 400 produits et 250 modèles 3D exclusifs.' },
]

const values = [
  { icon: Heart, title: 'Passion', desc: 'Nous aimons vraiment l\'impression 3D et ça se ressent dans chacun de nos choix.' },
  { icon: Zap, title: 'Innovation', desc: 'Toujours à l\'affût des dernières technologies pour vous proposer le meilleur.' },
  { icon: Globe, title: 'Accessibilité', desc: 'Notre mission : rendre l\'impression 3D accessible à tous, débutants ou experts.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-gray-900 py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://picsum.photos/seed/ma-about/1200/600"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block bg-lime-400/20 text-lime-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            Notre histoire
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            La passion de l&apos;impression 3D
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Meta Art est née en 2019 de la passion d&apos;un groupe de makers français qui rêvaient de démocratiser l&apos;impression 3D en France. Aujourd&apos;hui, nous servons plus de 10 000 clients avec plus de 400 produits soigneusement sélectionnés.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-lime-100 text-lime-800 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Notre mission
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
              Concrétiser vos idées en 3D
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Chez Meta Art, nous croyons que chacun devrait pouvoir créer, innover et fabriquer avec les meilleures technologies disponibles. C&apos;est pourquoi nous sélectionnons avec soin chaque produit de notre catalogue.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Qu&apos;il s&apos;agisse de votre première imprimante 3D ou de consommables professionnels, notre équipe d&apos;experts est là pour vous accompagner à chaque étape de vos projets.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-lime-400 text-black font-bold rounded-2xl hover:bg-lime-300 transition-all shadow-lg shadow-lime-400/20"
            >
              Explorer la boutique <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative h-72 rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&q=80"
              alt="Meta Art Mission"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white/60 border-y border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">Nos valeurs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col items-center text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-lime-100 flex items-center justify-center mb-4">
                  <v.icon size={24} className="text-lime-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-8">L&apos;équipe Meta Art</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
              <div className={`w-16 h-16 rounded-2xl ${member.color} text-white text-xl font-black flex items-center justify-center mx-auto mb-4`}>
                {member.initials}
              </div>
              <h3 className="font-bold text-gray-900">{member.name}</h3>
              <p className="text-xs text-lime-600 font-semibold mb-2">{member.role}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gray-900 py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-10 text-center">Notre parcours</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2 hidden sm:block" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex gap-6 items-start ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  <div className="flex-1 sm:text-right">
                    {i % 2 === 0 && (
                      <>
                        <p className="text-lime-400 font-bold text-lg">{m.year}</p>
                        <p className="text-white font-semibold">{m.title}</p>
                        <p className="text-gray-400 text-sm">{m.desc}</p>
                      </>
                    )}
                  </div>
                  <div className="hidden sm:flex w-10 h-10 rounded-full bg-lime-400 text-black items-center justify-center font-black text-sm shrink-0 z-10">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    {i % 2 !== 0 && (
                      <>
                        <p className="text-lime-400 font-bold text-lg">{m.year}</p>
                        <p className="text-white font-semibold">{m.title}</p>
                        <p className="text-gray-400 text-sm">{m.desc}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Prêt à imprimer ?</h2>
        <p className="text-gray-500 mb-8">Rejoignez la communauté Meta Art et donnez vie à vos projets d&apos;impression 3D.</p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-4 bg-lime-400 text-black font-bold rounded-2xl hover:bg-lime-300 transition-all shadow-lg shadow-lime-400/20 text-lg"
        >
          Commencer maintenant <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  )
}
