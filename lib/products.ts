export type ProductCategory =
  | 'printers'
  | 'filament'
  | 'resin'
  | 'models'
  | 'accessories'
  | 'tools'
  | 'spare-parts'

export interface Product {
  id: string
  name: string
  slug: string
  category: ProductCategory
  description: string
  shortDescription: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  inStock: boolean
  stockCount: number
  imageUrl: string
  images: string[]
  tags: string[]
  featured: boolean
  bestSeller: boolean
  specifications: Record<string, string>
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'MetaPrint Pro 3D Printer',
    slug: 'metaprint-pro-3d-printer',
    category: 'printers',
    description:
      'The MetaPrint Pro is our flagship FDM 3D printer designed for professionals and enthusiasts alike. Featuring a large build volume of 250x250x300mm, auto bed leveling with 25-point mesh compensation, direct drive extruder, and a silent stepper motor system. Compatible with a wide range of filaments including PLA, PETG, ABS, TPU, and more. The high-precision rail system ensures consistent layer quality for even the most demanding prints.',
    shortDescription: 'Imprimante 3D FDM professionnelle avec nivelage automatique et grand volume d\'impression.',
    price: 499,
    originalPrice: 649,
    rating: 4.8,
    reviewCount: 312,
    inStock: true,
    stockCount: 15,
    imageUrl: 'https://picsum.photos/seed/ma-printer1/600/400',
    images: [
      'https://picsum.photos/seed/ma-printer1/600/400',
      'https://picsum.photos/seed/ma-printer1b/600/400',
      'https://picsum.photos/seed/ma-printer1c/600/400',
    ],
    tags: ['fdm', 'professionnel', 'grand format', 'auto-nivellement'],
    featured: true,
    bestSeller: true,
    specifications: {
      'Volume d\'impression': '250 x 250 x 300 mm',
      'Technologie': 'FDM (Fused Deposition Modeling)',
      'Diamètre buse': '0.4 mm (remplaçable)',
      'Précision couche': '0.1 - 0.35 mm',
      'Vitesse d\'impression': 'jusqu\'à 150 mm/s',
      'Filament compatible': 'PLA, PETG, ABS, TPU, ASA',
      'Diamètre filament': '1.75 mm',
      'Température buse': 'jusqu\'à 260°C',
      'Température plateau': 'jusqu\'à 100°C',
      'Nivelage': 'Automatique 25 points',
      'Connectivité': 'USB, SD Card, WiFi',
      'Poids': '8.5 kg',
    },
  },
  {
    id: 'p2',
    name: 'Bambu Style High Speed 3D Printer',
    slug: 'bambu-style-high-speed-3d-printer',
    category: 'printers',
    description:
      'Experience next-generation 3D printing speed with our Bambu Style High Speed printer. Utilizing CoreXY kinematics and an integrated AI camera, this machine delivers print speeds up to 500mm/s with exceptional accuracy. Multi-color printing support with an AMS (Automatic Material System) allows up to 4 different filament colors in a single print. Perfect for rapid prototyping and production environments.',
    shortDescription: 'Imprimante haute vitesse CoreXY avec système multi-couleurs automatique.',
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    reviewCount: 187,
    inStock: true,
    stockCount: 8,
    imageUrl: 'https://picsum.photos/seed/ma-printer2/600/400',
    images: [
      'https://picsum.photos/seed/ma-printer2/600/400',
      'https://picsum.photos/seed/ma-printer2b/600/400',
    ],
    tags: ['corexY', 'haute vitesse', 'multi-couleur', 'ams'],
    featured: true,
    bestSeller: false,
    specifications: {
      'Volume d\'impression': '256 x 256 x 256 mm',
      'Technologie': 'FDM CoreXY',
      'Vitesse d\'impression': 'jusqu\'à 500 mm/s',
      'Accélération': 'jusqu\'à 20 000 mm/s²',
      'Diamètre buse': '0.4 mm (remplaçable)',
      'Précision couche': '0.05 - 0.35 mm',
      'Multi-couleur': '4 couleurs (AMS)',
      'Filament compatible': 'PLA, PETG, ABS, TPU, PA, ASA',
      'Caméra AI': 'Oui (détection d\'erreurs)',
      'Connectivité': 'WiFi, LAN, SD Card',
      'Poids': '13.2 kg',
    },
  },
  {
    id: 'p3',
    name: 'PLA Filament 1KG Noir',
    slug: 'pla-filament-1kg-noir',
    category: 'filament',
    description:
      'Notre filament PLA Noir de qualité premium est fabriqué avec des granulés PLA de haute pureté pour garantir des impressions régulières et sans bouchage. Le noir profond offre un rendu mat et élégant, idéal pour les pièces techniques et décoratives. Tolérance diamètre ±0.02mm pour une extrusion parfaite.',
    shortDescription: 'Filament PLA premium 1.75mm, noir mat, haute qualité, tolérance ±0.02mm.',
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.7,
    reviewCount: 856,
    inStock: true,
    stockCount: 200,
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    ],
    tags: ['pla', 'noir', '1.75mm', '1kg', 'premium'],
    featured: true,
    bestSeller: true,
    specifications: {
      'Matériau': 'PLA (Acide Polylactique)',
      'Couleur': 'Noir Mat',
      'Diamètre': '1.75 mm (±0.02mm)',
      'Poids': '1 KG (bobine incluse)',
      'Température impression': '190 - 220°C',
      'Température plateau': '20 - 60°C',
      'Vitesse impression': '40 - 120 mm/s',
      'Densité': '1.24 g/cm³',
      'Rétraction recommandée': '4 - 7 mm',
    },
  },
  {
    id: 'p4',
    name: 'PLA Filament 1KG Blanc',
    slug: 'pla-filament-1kg-blanc',
    category: 'filament',
    description:
      'Le filament PLA Blanc est indispensable dans tout atelier d\'impression 3D. Sa couleur neutre le rend parfait pour la peinture post-impression, le prototypage et les créations artistiques. Haute translucidité pour des impressions d\'aspect propre. Compatible avec toutes les imprimantes 3D FDM standard.',
    shortDescription: 'Filament PLA 1.75mm blanc crème, idéal pour la peinture et le prototypage.',
    price: 24.99,
    rating: 4.6,
    reviewCount: 742,
    inStock: true,
    stockCount: 180,
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    ],
    tags: ['pla', 'blanc', '1.75mm', '1kg'],
    featured: false,
    bestSeller: true,
    specifications: {
      'Matériau': 'PLA (Acide Polylactique)',
      'Couleur': 'Blanc Crème',
      'Diamètre': '1.75 mm (±0.02mm)',
      'Poids': '1 KG (bobine incluse)',
      'Température impression': '190 - 220°C',
      'Température plateau': '20 - 60°C',
      'Vitesse impression': '40 - 120 mm/s',
    },
  },
  {
    id: 'p5',
    name: 'PETG Filament 1KG Transparent',
    slug: 'petg-filament-1kg-transparent',
    category: 'filament',
    description:
      'Le PETG (Polyéthylène Téréphtalate Glycolisé) combine les avantages du PLA et de l\'ABS. Il offre une excellente résistance aux chocs, une bonne résistance thermique et est semi-translucide dans sa version naturelle. Idéal pour les pièces mécaniques, les récipients alimentaires (après certification) et les impressions qui nécessitent durabilité et flexibilité.',
    shortDescription: 'Filament PETG transparent, résistant aux chocs, idéal pour pièces techniques.',
    price: 29.99,
    originalPrice: 35.99,
    rating: 4.5,
    reviewCount: 423,
    inStock: true,
    stockCount: 120,
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    ],
    tags: ['petg', 'transparent', '1.75mm', '1kg', 'résistant'],
    featured: true,
    bestSeller: false,
    specifications: {
      'Matériau': 'PETG',
      'Couleur': 'Transparent / Naturel',
      'Diamètre': '1.75 mm (±0.02mm)',
      'Poids': '1 KG',
      'Température impression': '230 - 250°C',
      'Température plateau': '70 - 90°C',
      'Résistance thermique': 'jusqu\'à 80°C',
      'Résistance chimique': 'Bonne (acides dilués)',
    },
  },
  {
    id: 'p6',
    name: 'TPU Filament Flexible 95A',
    slug: 'tpu-filament-flexible-95a',
    category: 'filament',
    description:
      'Le filament TPU Shore 95A est le matériau de référence pour toutes vos impressions flexibles. Parfait pour créer des coques de téléphone, joints d\'étanchéité, semelles de chaussures, protections et tout autre objet nécessitant une flexibilité et une résistance à l\'abrasion exceptionnelles. Sa nature élastomère lui confère une excellente résilience.',
    shortDescription: 'Filament TPU flexible Shore 95A pour protections et joints, noir.',
    price: 34.99,
    originalPrice: 39.99,
    rating: 4.4,
    reviewCount: 298,
    inStock: true,
    stockCount: 85,
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    ],
    tags: ['tpu', 'flexible', 'élastomère', '95a', 'noir'],
    featured: false,
    bestSeller: false,
    specifications: {
      'Matériau': 'TPU (Polyuréthane Thermoplastique)',
      'Dureté Shore': '95A',
      'Couleur': 'Noir',
      'Diamètre': '1.75 mm (±0.03mm)',
      'Poids': '1 KG',
      'Température impression': '220 - 240°C',
      'Température plateau': '30 - 60°C',
      'Allongement à la rupture': '>500%',
    },
  },
  {
    id: 'p7',
    name: 'Résine Standard 1L Gris',
    slug: 'resine-standard-1l-gris',
    category: 'resin',
    description:
      'La résine standard grise de Meta Art est spécialement formulée pour les imprimantes MSLA/LCD (Elegoo, Anycubic, Phrozen, etc.). Sa faible viscosité permet une reproduction détaillée même sur les modèles les plus complexes. Le gris neutre facilite la détection des défauts de surface. Idéale pour le prototypage, les figurines et les bijoux.',
    shortDescription: 'Résine photopolymère grise 1L pour imprimantes SLA/MSLA, haute précision.',
    price: 34.99,
    originalPrice: 42.99,
    rating: 4.6,
    reviewCount: 534,
    inStock: true,
    stockCount: 60,
    imageUrl: 'https://picsum.photos/seed/ma-resin/600/400',
    images: [
      'https://picsum.photos/seed/ma-resin/600/400',
    ],
    tags: ['résine', 'standard', 'gris', '1l', 'sla'],
    featured: true,
    bestSeller: true,
    specifications: {
      'Type': 'Résine Photopolymère Standard',
      'Couleur': 'Gris',
      'Volume': '1 Litre',
      'Longueur d\'onde UV': '385 - 405 nm',
      'Viscosité': '150 - 200 cps à 25°C',
      'Dureté Shore': '80D après polymérisation',
      'Temps d\'exposition': '1.5 - 3s (dépend de l\'imprimante)',
      'Compatibilité': 'MSLA, LCD, DLP',
      'Shrinkage': '< 1%',
    },
  },
  {
    id: 'p8',
    name: 'Résine Transparente 1L',
    slug: 'resine-transparente-1l',
    category: 'resin',
    description:
      'La résine transparente offre une clarté optique exceptionnelle après polissage. Parfaite pour créer des objets en verre, des lentilles, des bijoux avec inclusions et toutes créations nécessitant de la transparence. Se colore facilement avec des pigments résine pour créer des effets de couleur translucide uniques.',
    shortDescription: 'Résine transparente 1L haute clarté pour créations vitrées et bijoux.',
    price: 39.99,
    originalPrice: 48.99,
    rating: 4.3,
    reviewCount: 189,
    inStock: true,
    stockCount: 40,
    imageUrl: 'https://picsum.photos/seed/ma-resin/600/400',
    images: [
      'https://picsum.photos/seed/ma-resin/600/400',
    ],
    tags: ['résine', 'transparente', 'clear', '1l', 'bijoux'],
    featured: true,
    bestSeller: false,
    specifications: {
      'Type': 'Résine Photopolymère Transparente',
      'Couleur': 'Incolore / Transparent',
      'Volume': '1 Litre',
      'Transmission lumière': '>92% après polissage',
      'Viscosité': '130 - 170 cps à 25°C',
      'Longueur d\'onde UV': '385 - 405 nm',
      'Temps d\'exposition': '2 - 4s',
      'Jaunissement': 'Très faible (stabilisé UV)',
    },
  },
  {
    id: 'p9',
    name: 'Pack Figurines Médiévales STL',
    slug: 'pack-figurines-medievales-stl',
    category: 'models',
    description:
      'Un pack exceptionnel de 25 figurines médiévales en haute résolution optimisé pour l\'impression résine. Inclut chevaliers, archers, mages, créatures fantastiques et décors de jeu de rôle. Chaque modèle est pré-supporté et orienté pour un résultat optimal. Compatible avec DnD, Warhammer et tous vos jeux de table.',
    shortDescription: '25 figurines médiévales STL haute résolution, pré-supportées, pour jeux de rôle.',
    price: 9.99,
    originalPrice: 19.99,
    rating: 4.9,
    reviewCount: 1203,
    inStock: true,
    stockCount: 9999,
    imageUrl: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    ],
    tags: ['stl', 'figurines', 'médiéval', 'dnd', 'jeu de rôle', 'résine'],
    featured: true,
    bestSeller: true,
    specifications: {
      'Format': 'STL + LYS (pré-supportés)',
      'Nombre de modèles': '25 figurines + 8 décors',
      'Résolution': 'Haute (0.01mm détail)',
      'Taille recommandée': '28mm - 75mm',
      'Pré-supporté': 'Oui (Chitubox & Lychee)',
      'Testé sur': 'Elegoo Mars, Saturn, Phrozen Sonic',
      'Licence': 'Personnel & impression commerciale',
      'Mise à jour': 'Mises à jour gratuites incluses',
    },
  },
  {
    id: 'p10',
    name: 'Pack Déco Maison 3D Models',
    slug: 'pack-deco-maison-3d-models',
    category: 'models',
    description:
      'Transformez votre intérieur avec ce pack de 30 modèles de décoration maison soigneusement sélectionnés. Vases organiques, sculptures abstraites, porte-photos, rangements design, et bien plus encore. Tous optimisés pour l\'impression FDM avec des supports minimes. Fichiers inclus : STL, 3MF avec paramètres Bambu Lab et Prusa Slicer.',
    shortDescription: '30 modèles déco maison STL/3MF, minimaliste et moderne, pour impression FDM.',
    price: 12.99,
    originalPrice: 24.99,
    rating: 4.7,
    reviewCount: 678,
    inStock: true,
    stockCount: 9999,
    imageUrl: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    ],
    tags: ['stl', '3mf', 'décoration', 'maison', 'design', 'fdm'],
    featured: true,
    bestSeller: false,
    specifications: {
      'Format': 'STL + 3MF',
      'Nombre de modèles': '30 pièces',
      'Style': 'Minimaliste / Contemporain',
      'Optimisé pour': 'FDM (PLA, PETG)',
      'Supports': 'Minimisés voire supprimés',
      'Profils inclus': 'Bambu Lab, Prusa Slicer, Cura',
      'Licence': 'Usage personnel uniquement',
    },
  },
  {
    id: 'p11',
    name: 'Kit Buses 0.4/0.6/0.8mm',
    slug: 'kit-buses-04-06-08mm',
    category: 'spare-parts',
    description:
      'Kit complet de buses d\'impression en laiton de haute qualité compatibles avec les imprimantes Ender, CR-10, Prusa et la grande majorité des imprimantes FDM du marché. Ce kit inclut 10 buses (4x0.4mm, 3x0.6mm, 3x0.8mm) permettant de choisir la résolution selon les projets. Les buses en laiton offrent une excellente conductivité thermique et durabilité.',
    shortDescription: 'Kit 10 buses laiton 0.4/0.6/0.8mm compatible Ender, Prusa, CR-10.',
    price: 14.99,
    originalPrice: 19.99,
    rating: 4.5,
    reviewCount: 445,
    inStock: true,
    stockCount: 150,
    imageUrl: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=600&q=80',
    ],
    tags: ['bus', 'laiton', 'spare parts', 'ender', 'prusa'],
    featured: false,
    bestSeller: true,
    specifications: {
      'Matériau': 'Laiton MK8',
      'Diamètres inclus': '0.4mm (x4), 0.6mm (x3), 0.8mm (x3)',
      'Filetage': 'M6',
      'Longueur': '13 mm',
      'Compatibilité': 'Ender 3/5/6, CR-10, Prusa i3, Anet A8',
      'Température max': '240°C',
      'Contenu': '10 buses + clé de montage',
    },
  },
  {
    id: 'p12',
    name: 'Plateau d\'Impression PEI Magnétique',
    slug: 'plateau-impression-pei-magnetique',
    category: 'accessories',
    description:
      'Remplacez votre plateau d\'impression par notre système magnétique PEI (Polyetherimide) pour une adhérence parfaite pendant l\'impression et un retrait ultra-simple des pièces terminées. Il suffit de fléchir légèrement le plateau pour décoller les impressions sans endommager la surface. Compatible avec PLA, PETG, ABS, TPU.',
    shortDescription: 'Plateau PEI magnétique 235x235mm, adhérence excellente, retrait facile des pièces.',
    price: 22.99,
    originalPrice: 29.99,
    rating: 4.8,
    reviewCount: 891,
    inStock: true,
    stockCount: 75,
    imageUrl: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=600&q=80',
    ],
    tags: ['pei', 'plateau', 'magnétique', 'ender', 'accessoire'],
    featured: false,
    bestSeller: true,
    specifications: {
      'Taille': '235 x 235 mm',
      'Matériau surface': 'PEI (Polyetherimide)',
      'Fixation': 'Magnétique (plaque acier + feuille PEI)',
      'Épaisseur': '1mm (feuille PEI)',
      'Compatibilité filament': 'PLA, PETG, ABS, TPU, ASA',
      'Température max': '120°C',
      'Nettoyage': 'Alcool isopropylique',
      'Compatibilité': 'Ender 3/5, CR-10, Prusa MK3',
    },
  },
  {
    id: 'p13',
    name: 'Kit Outils de Finition Précision',
    slug: 'kit-outils-finition-precision',
    category: 'tools',
    description:
      'Le kit complet pour la finition professionnelle de vos impressions 3D. Inclut spatules, pinces, scalpels, limes de précision, ponçage (grain 100 à 2000), et outils de retrait des supports. Tout ce dont vous avez besoin pour obtenir une surface parfaite sur vos impressions FDM et résine. Rangement pratique inclus.',
    shortDescription: 'Kit 20 outils de finition pour impressions 3D, spatules, scalpels, limes.',
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.6,
    reviewCount: 334,
    inStock: true,
    stockCount: 60,
    imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
    ],
    tags: ['outils', 'finition', 'scalpel', 'spatule', 'ponçage'],
    featured: false,
    bestSeller: false,
    specifications: {
      'Contenu': '20 outils de finition',
      'Spatules': '5 formats différents',
      'Scalpels': '3 lames + manche',
      'Limes': 'Grain 100, 240, 400, 800, 1500, 2000',
      'Pinces': '3 paires (droite, coudée, brucelles)',
      'Étui': 'Rangement en tissu roll-up',
      'Matériau': 'Acier inoxydable / ABS',
    },
  },
  {
    id: 'p14',
    name: 'Boîte de Stockage Filament',
    slug: 'boite-stockage-filament',
    category: 'accessories',
    description:
      'Protégez vos bobines de filament de l\'humidité avec notre boîte de stockage hermétique. Équipée d\'un compartiment pour dessiccants silica gel, d\'un hygromètre digital intégré et pouvant contenir jusqu\'à 2 bobines de 1KG. Le verrou hermétique et le joint en silicone garantissent une étanchéité parfaite pour conserver la qualité de vos filaments.',
    shortDescription: 'Boîte hermétique pour 2 bobines de filament avec hygromètre digital intégré.',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.7,
    reviewCount: 567,
    inStock: true,
    stockCount: 45,
    imageUrl: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=600&q=80',
    ],
    tags: ['stockage', 'filament', 'hermétique', 'hygromètre', 'dessiccant'],
    featured: false,
    bestSeller: true,
    specifications: {
      'Capacité': '2 bobines de 1KG standard',
      'Étanchéité': 'Joint silicone + verrou hermétique',
      'Hygromètre': 'Digital (% humidité + température)',
      'Dessiccant': '200g silica gel inclus',
      'Matériau': 'ABS recyclé',
      'Dimensions': '38 x 28 x 18 cm',
      'Poids': '0.8 kg',
    },
  },
  {
    id: 'p15',
    name: 'Kit Hotend Complet All-Metal',
    slug: 'kit-hotend-complet-all-metal',
    category: 'spare-parts',
    description:
      'Améliorez ou remplacez votre hotend avec notre kit all-metal haute performance. Compatible avec les températures d\'extrusion jusqu\'à 300°C, permettant l\'utilisation de filaments haute performance comme le Nylon, PC, ABS et composites. Inclut radiateur, bloc chauffant bimétallique, cartouche de chauffe 24V et thermistance.',
    shortDescription: 'Hotend all-metal remplacement complet 300°C, pour filaments haute performance.',
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.4,
    reviewCount: 213,
    inStock: true,
    stockCount: 30,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    ],
    tags: ['hotend', 'all-metal', 'spare parts', 'haute température', 'nylon'],
    featured: false,
    bestSeller: false,
    specifications: {
      'Type': 'All-Metal Hotend',
      'Température max': '300°C',
      'Voltage cartouche': '24V / 40W',
      'Thermistance': 'NTC 100K',
      'Filetage buse': 'M6',
      'Matériau gorge': 'Titane (sans PTFE)',
      'Compatibilité': 'Ender 3/5, CR-10 (MK8)',
      'Contenu': 'Radiateur + Bloc + Cartouche + Thermistance + Buse 0.4mm',
    },
  },
  {
    id: 'p16',
    name: 'Bâton Adhésif 3D Printing',
    slug: 'baton-adhesif-3d-printing',
    category: 'tools',
    description:
      'Améliorez l\'adhérence de la première couche avec notre bâton adhésif spécifiquement formulé pour l\'impression 3D. Non-toxique, sans odeur, se dissout à l\'eau pour un nettoyage facile. Très efficace avec PLA, PETG et ABS sur plateaux verre et métal. Une fine couche suffit pour garantir un excellent collage pendant l\'impression et un retrait facile une fois refroidi.',
    shortDescription: 'Bâton adhésif spécial 3D, non-toxique, pour PLA/PETG/ABS, nettoyage à l\'eau.',
    price: 7.99,
    originalPrice: 11.99,
    rating: 4.3,
    reviewCount: 1089,
    inStock: true,
    stockCount: 300,
    imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
    ],
    tags: ['adhésif', 'bâton', 'collage', 'pla', 'adhérence', 'plateau'],
    featured: false,
    bestSeller: true,
    specifications: {
      'Contenu': '3 bâtons x 21g',
      'Formule': 'Water-soluble, non-toxique',
      'Efficace sur': 'PLA, PETG, ABS, HIPS',
      'Surfaces': 'Verre, métal, PEI, BuildTak',
      'Température utilisation': '20°C - 110°C',
      'Nettoyage': 'Eau tiède',
      'Odeur': 'Aucune',
    },
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.bestSeller)
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  )
}
