export interface Category {
  id: string
  name: string
  slug: string
  description: string
  imageUrl: string
  productCount: number
  featured: boolean
  color: string
}

export const categories: Category[] = [
  {
    id: 'cat1',
    name: 'Imprimantes 3D',
    slug: 'printers',
    description: 'Découvrez notre sélection d\'imprimantes 3D FDM et résine pour tous niveaux, du débutant au professionnel.',
    imageUrl: 'https://picsum.photos/seed/ma-printer1/600/400',
    productCount: 12,
    featured: true,
    color: 'from-blue-600 to-blue-900',
  },
  {
    id: 'cat2',
    name: 'Filament',
    slug: 'filament',
    description: 'PLA, PETG, ABS, TPU, Soie, Carbone — une vaste gamme de filaments premium 1.75mm pour tous vos projets.',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    productCount: 48,
    featured: true,
    color: 'from-purple-600 to-purple-900',
  },
  {
    id: 'cat3',
    name: 'Résine',
    slug: 'resin',
    description: 'Résines photopolymères pour imprimantes SLA/MSLA. Standard, ABS-like, transparente, lavable à l\'eau.',
    imageUrl: 'https://picsum.photos/seed/ma-resin/600/400',
    productCount: 18,
    featured: true,
    color: 'from-amber-600 to-amber-900',
  },
  {
    id: 'cat4',
    name: 'Modèles 3D',
    slug: 'models',
    description: 'Des milliers de fichiers STL et 3MF : figurines, déco, pièces techniques, jouets. Téléchargement immédiat.',
    imageUrl: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    productCount: 250,
    featured: true,
    color: 'from-green-600 to-green-900',
  },
  {
    id: 'cat5',
    name: 'Accessoires',
    slug: 'accessories',
    description: 'Plateaux magnétiques, boîtes de stockage, et tout ce qu\'il faut pour améliorer votre expérience d\'impression.',
    imageUrl: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=600&q=80',
    productCount: 35,
    featured: true,
    color: 'from-rose-600 to-rose-900',
  },
  {
    id: 'cat6',
    name: 'Outils & Finition',
    slug: 'tools',
    description: 'Scalpels, spatules, bâtons adhésifs, ponçage — tous les outils pour finir vos créations comme un pro.',
    imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
    productCount: 22,
    featured: false,
    color: 'from-gray-600 to-gray-900',
  },
  {
    id: 'cat7',
    name: 'Pièces Détachées',
    slug: 'spare-parts',
    description: 'Buses, hotends, plateaux, courroies — pièces de remplacement pour maintenir votre imprimante en parfait état.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    productCount: 54,
    featured: false,
    color: 'from-cyan-600 to-cyan-900',
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getFeaturedCategories(): Category[] {
  return categories.filter((c) => c.featured)
}
