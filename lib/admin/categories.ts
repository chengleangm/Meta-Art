export type CategoryStatus = 'active' | 'inactive'

export interface AdminCategory {
  id: string
  name: string
  slug: string
  description: string
  productCount: number
  status: CategoryStatus
  parentCategory: string | null
  createdAt: string
}

export const adminCategories: AdminCategory[] = [
  {
    id: 'CAT-001',
    name: 'Imprimantes 3D',
    slug: 'printers',
    description: 'Imprimantes 3D FDM, MSLA et SLA pour tous les niveaux.',
    productCount: 3,
    status: 'active',
    parentCategory: null,
    createdAt: '2023-06-01T00:00:00Z',
  },
  {
    id: 'CAT-002',
    name: 'Filaments',
    slug: 'filament',
    description: 'Filaments PLA, PETG, ABS, TPU et autres matériaux d\'impression.',
    productCount: 4,
    status: 'active',
    parentCategory: null,
    createdAt: '2023-06-01T00:00:00Z',
  },
  {
    id: 'CAT-003',
    name: 'Résines',
    slug: 'resin',
    description: 'Résines photopolymères standard, ABS-Like et spécialisées.',
    productCount: 3,
    status: 'active',
    parentCategory: null,
    createdAt: '2023-06-01T00:00:00Z',
  },
  {
    id: 'CAT-004',
    name: 'Modèles 3D',
    slug: 'models',
    description: 'Fichiers STL, OBJ et 3MF téléchargeables instantanément.',
    productCount: 4,
    status: 'active',
    parentCategory: null,
    createdAt: '2023-06-01T00:00:00Z',
  },
  {
    id: 'CAT-005',
    name: 'Accessoires',
    slug: 'accessories',
    description: 'Plateaux, boîtiers et améliorations pour votre imprimante 3D.',
    productCount: 1,
    status: 'active',
    parentCategory: null,
    createdAt: '2023-06-15T00:00:00Z',
  },
  {
    id: 'CAT-006',
    name: 'Outils',
    slug: 'tools',
    description: 'Outils de post-traitement, nettoyage et finition.',
    productCount: 3,
    status: 'active',
    parentCategory: null,
    createdAt: '2023-06-15T00:00:00Z',
  },
  {
    id: 'CAT-007',
    name: 'Pièces Détachées',
    slug: 'spare-parts',
    description: 'Buses, tubes PTFE, thermistances et autres pièces de rechange.',
    productCount: 2,
    status: 'active',
    parentCategory: null,
    createdAt: '2023-07-01T00:00:00Z',
  },
]
