export type FilamentMaterial = 'PLA' | 'PETG' | 'ABS' | 'TPU' | 'Carbon Fiber' | 'Silk PLA' | 'ASA' | 'Nylon'

export interface Filament {
  id: string
  name: string
  material: FilamentMaterial
  color: string
  colorHex: string
  diameter: '1.75mm'
  weight: '1KG'
  price: number
  printTemp: string
  bedTemp: string
  description: string
  imageUrl: string
  inStock: boolean
}

export const filaments: Filament[] = [
  {
    id: 'f1',
    name: 'PLA Premium Noir',
    material: 'PLA',
    color: 'Noir',
    colorHex: '#1a1a1a',
    diameter: '1.75mm',
    weight: '1KG',
    price: 24.99,
    printTemp: '190 - 220°C',
    bedTemp: '20 - 60°C',
    description: 'PLA noir mat haute qualité, idéal pour impressions techniques et décoratives.',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    inStock: true,
  },
  {
    id: 'f2',
    name: 'PLA Premium Blanc',
    material: 'PLA',
    color: 'Blanc',
    colorHex: '#f5f5f5',
    diameter: '1.75mm',
    weight: '1KG',
    price: 24.99,
    printTemp: '190 - 220°C',
    bedTemp: '20 - 60°C',
    description: 'PLA blanc crème, parfait pour la peinture post-impression et le prototypage.',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    inStock: true,
  },
  {
    id: 'f3',
    name: 'PLA Premium Rouge',
    material: 'PLA',
    color: 'Rouge',
    colorHex: '#dc2626',
    diameter: '1.75mm',
    weight: '1KG',
    price: 24.99,
    printTemp: '190 - 220°C',
    bedTemp: '20 - 60°C',
    description: 'PLA rouge vif pour créations colorées et pièces de signalisation.',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    inStock: true,
  },
  {
    id: 'f4',
    name: 'PLA Premium Bleu',
    material: 'PLA',
    color: 'Bleu',
    colorHex: '#2563eb',
    diameter: '1.75mm',
    weight: '1KG',
    price: 24.99,
    printTemp: '190 - 220°C',
    bedTemp: '20 - 60°C',
    description: 'PLA bleu intense pour objets techniques et décoratifs.',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    inStock: true,
  },
  {
    id: 'f5',
    name: 'PETG Transparent',
    material: 'PETG',
    color: 'Transparent',
    colorHex: '#e0f2fe',
    diameter: '1.75mm',
    weight: '1KG',
    price: 29.99,
    printTemp: '230 - 250°C',
    bedTemp: '70 - 90°C',
    description: 'PETG transparent haute résistance chimique et thermique.',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    inStock: true,
  },
  {
    id: 'f6',
    name: 'PETG Noir',
    material: 'PETG',
    color: 'Noir',
    colorHex: '#111827',
    diameter: '1.75mm',
    weight: '1KG',
    price: 29.99,
    printTemp: '230 - 250°C',
    bedTemp: '70 - 90°C',
    description: 'PETG noir pour pièces mécaniques et fonctionnelles résistantes.',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    inStock: true,
  },
  {
    id: 'f7',
    name: 'ABS Naturel',
    material: 'ABS',
    color: 'Naturel',
    colorHex: '#fef3c7',
    diameter: '1.75mm',
    weight: '1KG',
    price: 27.99,
    printTemp: '230 - 250°C',
    bedTemp: '90 - 110°C',
    description: 'ABS naturel pour pièces résistantes à la chaleur et post-usinables.',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    inStock: true,
  },
  {
    id: 'f8',
    name: 'TPU Flexible 95A Noir',
    material: 'TPU',
    color: 'Noir',
    colorHex: '#0f172a',
    diameter: '1.75mm',
    weight: '1KG',
    price: 34.99,
    printTemp: '220 - 240°C',
    bedTemp: '30 - 60°C',
    description: 'TPU Shore 95A pour objets flexibles: coques, joints, semelles.',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    inStock: true,
  },
  {
    id: 'f9',
    name: 'Carbon Fiber PLA Composite',
    material: 'Carbon Fiber',
    color: 'Noir Carbone',
    colorHex: '#18181b',
    diameter: '1.75mm',
    weight: '1KG',
    price: 49.99,
    printTemp: '200 - 230°C',
    bedTemp: '25 - 60°C',
    description: 'PLA renforcé fibres de carbone pour pièces légères et ultra-rigides.',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    inStock: true,
  },
  {
    id: 'f10',
    name: 'Silk PLA Arc-en-Ciel',
    material: 'Silk PLA',
    color: 'Arc-en-ciel',
    colorHex: '#f0abfc',
    diameter: '1.75mm',
    weight: '1KG',
    price: 32.99,
    printTemp: '190 - 220°C',
    bedTemp: '20 - 60°C',
    description: 'PLA soyeux multicolore avec effet métallique lustré arc-en-ciel.',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    inStock: true,
  },
]

export function getFilamentsByMaterial(material: FilamentMaterial): Filament[] {
  return filaments.filter((f) => f.material === material)
}
