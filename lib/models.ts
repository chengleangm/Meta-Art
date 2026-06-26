export type ModelFormat = 'STL' | 'OBJ' | '3MF'
export type ModelLicense = 'Free' | 'Commercial' | 'Personal'
export type ModelCategory =
  | 'Miniatures'
  | 'Home Decor'
  | 'Tools'
  | 'Toys'
  | 'Architecture'
  | 'Parts'
  | 'Jewelry'
  | 'Art'

export interface Model3D {
  id: string
  name: string
  category: ModelCategory
  fileFormat: ModelFormat[]
  license: ModelLicense
  downloadType: 'free' | 'paid'
  price: number
  rating: number
  reviewCount: number
  description: string
  imageUrl: string
  polyCount: string
  software: string[]
  previewImages: string[]
  tags: string[]
}

export const models: Model3D[] = [
  {
    id: 'm1',
    name: 'Pack Figurines Médiévales (25 modèles)',
    category: 'Miniatures',
    fileFormat: ['STL'],
    license: 'Personal',
    downloadType: 'paid',
    price: 9.99,
    rating: 4.9,
    reviewCount: 1203,
    description: '25 figurines médiévales haute résolution: chevaliers, mages, archers, créatures. Pré-supportés pour résine.',
    imageUrl: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    polyCount: '500K - 2M polygones',
    software: ['Chitubox', 'Lychee Slicer', 'PrusaSlicer'],
    previewImages: [
      'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    ],
    tags: ['médiéval', 'figurines', 'dnd', 'warhammer', 'résine'],
  },
  {
    id: 'm2',
    name: 'Pack Déco Maison Minimaliste (30 pièces)',
    category: 'Home Decor',
    fileFormat: ['STL', '3MF'],
    license: 'Personal',
    downloadType: 'paid',
    price: 12.99,
    rating: 4.7,
    reviewCount: 678,
    description: '30 pièces décoratives design: vases, sculptures, porte-photos, rangements. Style scandinave moderne.',
    imageUrl: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    polyCount: '50K - 200K polygones',
    software: ['Cura', 'PrusaSlicer', 'Bambu Studio'],
    previewImages: [
      'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    ],
    tags: ['déco', 'maison', 'minimaliste', 'vase', 'fdm'],
  },
  {
    id: 'm3',
    name: 'Organisateur de Bureau Modulaire',
    category: 'Tools',
    fileFormat: ['STL', '3MF'],
    license: 'Commercial',
    downloadType: 'paid',
    price: 6.99,
    rating: 4.6,
    reviewCount: 445,
    description: 'Système d\'organisation modulaire pour bureau: porte-stylos, tiroirs, séparateurs. Personnalisable.',
    imageUrl: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    polyCount: '10K - 50K polygones',
    software: ['Cura', 'PrusaSlicer', 'Bambu Studio'],
    previewImages: [
      'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    ],
    tags: ['organisation', 'bureau', 'modulaire', 'utilitaire'],
  },
  {
    id: 'm4',
    name: 'Collection Bijoux Géométriques',
    category: 'Jewelry',
    fileFormat: ['STL', 'OBJ'],
    license: 'Commercial',
    downloadType: 'paid',
    price: 14.99,
    rating: 4.8,
    reviewCount: 234,
    description: 'Collection de 15 bijoux géométriques: colliers, boucles d\'oreilles, bagues. Optimisés résine haute résolution.',
    imageUrl: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    polyCount: '200K - 1M polygones',
    software: ['Chitubox', 'Lychee Slicer'],
    previewImages: [
      'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    ],
    tags: ['bijoux', 'géométrique', 'résine', 'collier', 'bague'],
  },
  {
    id: 'm5',
    name: 'Maquette Château Médiéval',
    category: 'Architecture',
    fileFormat: ['STL', 'OBJ', '3MF'],
    license: 'Personal',
    downloadType: 'paid',
    price: 19.99,
    rating: 4.9,
    reviewCount: 156,
    description: 'Maquette architecturale détaillée d\'un château médiéval en plusieurs pièces assemblables. Idéal pour wargame.',
    imageUrl: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    polyCount: '1M - 5M polygones',
    software: ['PrusaSlicer', 'Cura', 'Bambu Studio'],
    previewImages: [
      'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    ],
    tags: ['château', 'médiéval', 'architecture', 'wargame', 'maquette'],
  },
  {
    id: 'm6',
    name: 'Voitures de Course Miniatures (10 modèles)',
    category: 'Toys',
    fileFormat: ['STL', '3MF'],
    license: 'Personal',
    downloadType: 'paid',
    price: 7.99,
    rating: 4.5,
    reviewCount: 389,
    description: '10 voitures de course miniatures style F1 et rallye. Roues mobiles possibles. Pour enfants 8+.',
    imageUrl: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    polyCount: '100K - 500K polygones',
    software: ['Cura', 'PrusaSlicer'],
    previewImages: [
      'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    ],
    tags: ['voitures', 'jouets', 'course', 'f1', 'enfants'],
  },
  {
    id: 'm7',
    name: 'Pièces Techniques Industrielles Pack',
    category: 'Parts',
    fileFormat: ['STL', 'OBJ'],
    license: 'Commercial',
    downloadType: 'paid',
    price: 29.99,
    rating: 4.4,
    reviewCount: 98,
    description: 'Pack de pièces techniques: engrenages, supports, brides, roulements imprimables. Tolérances dimensionnelles strictes.',
    imageUrl: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    polyCount: '5K - 100K polygones',
    software: ['Cura', 'PrusaSlicer', 'Simplify3D'],
    previewImages: [
      'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    ],
    tags: ['technique', 'industriel', 'engrenages', 'pièces', 'mécanique'],
  },
  {
    id: 'm8',
    name: 'Sculpture Abstraite "Flux"',
    category: 'Art',
    fileFormat: ['STL', 'OBJ'],
    license: 'Personal',
    downloadType: 'free',
    price: 0,
    rating: 4.8,
    reviewCount: 2341,
    description: 'Sculpture abstraite organique "Flux" — un modèle gratuit offert par Meta Art. Parfait pour FDM et résine.',
    imageUrl: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    polyCount: '300K polygones',
    software: ['Cura', 'PrusaSlicer', 'Chitubox'],
    previewImages: [
      'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    ],
    tags: ['sculpture', 'abstraite', 'art', 'gratuit', 'organique'],
  },
]

export function getFreeModels(): Model3D[] {
  return models.filter((m) => m.downloadType === 'free')
}

export function getModelsByCategory(category: ModelCategory): Model3D[] {
  return models.filter((m) => m.category === category)
}
