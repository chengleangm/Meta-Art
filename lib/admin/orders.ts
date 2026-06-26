export type PaymentStatus = 'paid' | 'unpaid' | 'pending' | 'failed' | 'refunded'
export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'packed'
  | 'shipped'
  | 'delivered'
  | 'cancelled'

export interface OrderItem {
  name: string
  qty: number
  price: number
}

export interface ShippingAddress {
  street: string
  city: string
  zip: string
  country: string
}

export interface AdminOrder {
  id: string
  customerName: string
  email: string
  phone: string
  total: number
  paymentStatus: PaymentStatus
  orderStatus: OrderStatus
  deliveryStatus: string
  items: OrderItem[]
  shippingAddress: ShippingAddress
  notes: string
  createdAt: string
}

export const adminOrders: AdminOrder[] = [
  {
    id: 'ORD-001',
    customerName: 'Jean-Pierre Dupont',
    email: 'jp.dupont@gmail.com',
    phone: '+33 6 12 34 56 78',
    total: 1324.80,
    paymentStatus: 'paid',
    orderStatus: 'delivered',
    deliveryStatus: 'Livré le 22/01/2024',
    items: [
      { name: 'Bambu Lab X1 Carbon', qty: 1, price: 1299.00 },
      { name: 'Filament PLA+ Rouge Carmin 1kg', qty: 1, price: 24.90 },
    ],
    shippingAddress: { street: '12 Rue de la Paix', city: 'Paris', zip: '75001', country: 'France' },
    notes: 'Livraison en semaine uniquement.',
    createdAt: '2024-01-18T14:30:00Z',
  },
  {
    id: 'ORD-002',
    customerName: 'Marie-Claire Lefebvre',
    email: 'mc.lefebvre@orange.fr',
    phone: '+33 7 98 76 54 32',
    total: 216.80,
    paymentStatus: 'paid',
    orderStatus: 'shipped',
    deliveryStatus: 'En transit — DHL Express',
    items: [
      { name: 'Creality Ender-3 V3 SE', qty: 1, price: 189.00 },
      { name: 'Spatule Acier Inoxydable', qty: 2, price: 12.90 },
    ],
    shippingAddress: { street: '45 Avenue des Lilas', city: 'Lyon', zip: '69003', country: 'France' },
    notes: '',
    createdAt: '2024-02-05T09:15:00Z',
  },
  {
    id: 'ORD-003',
    customerName: 'Thomas Bergeron',
    email: 'thomas.bergeron@hotmail.com',
    phone: '+33 6 55 43 21 09',
    total: 89.70,
    paymentStatus: 'paid',
    orderStatus: 'processing',
    deliveryStatus: 'Préparation en cours',
    items: [
      { name: 'Résine Standard Grise 1L', qty: 1, price: 34.90 },
      { name: 'Plateau Magnétique Flexible', qty: 1, price: 29.90 },
      { name: 'Buse Laiton 0.4mm Pack x5', qty: 1, price: 8.90 },
      { name: 'Filament PLA+ Rouge Carmin 1kg', qty: 1, price: 24.90 },
    ],
    shippingAddress: { street: '8 Rue du Commerce', city: 'Bordeaux', zip: '33000', country: 'France' },
    notes: 'Fragile, emballer avec soin.',
    createdAt: '2024-02-10T16:45:00Z',
  },
  {
    id: 'ORD-004',
    customerName: 'Isabelle Moreau',
    email: 'i.moreau@wanadoo.fr',
    phone: '+33 6 78 90 12 34',
    total: 49.90,
    paymentStatus: 'pending',
    orderStatus: 'pending',
    deliveryStatus: 'En attente de paiement',
    items: [
      { name: 'Kit Outils Impression 3D Pro', qty: 1, price: 49.90 },
    ],
    shippingAddress: { street: '22 Boulevard Haussmann', city: 'Strasbourg', zip: '67000', country: 'France' },
    notes: '',
    createdAt: '2024-02-14T11:00:00Z',
  },
  {
    id: 'ORD-005',
    customerName: 'Philippe Garnier',
    email: 'ph.garnier@free.fr',
    phone: '+33 7 11 22 33 44',
    total: 839.90,
    paymentStatus: 'paid',
    orderStatus: 'confirmed',
    deliveryStatus: 'Commande confirmée',
    items: [
      { name: 'Prusa MK4', qty: 1, price: 799.00 },
      { name: 'Filament PETG Transparent 1kg', qty: 1, price: 27.90 },
    ],
    shippingAddress: { street: '3 Place Bellecour', city: 'Lyon', zip: '69002', country: 'France' },
    notes: 'Merci d\'inclure une facture.',
    createdAt: '2024-02-16T08:30:00Z',
  },
  {
    id: 'ORD-006',
    customerName: 'Sandrine Petit',
    email: 'sandrine.petit@gmail.com',
    phone: '+33 6 99 88 77 66',
    total: 34.90,
    paymentStatus: 'paid',
    orderStatus: 'delivered',
    deliveryStatus: 'Livré le 30/01/2024',
    items: [
      { name: 'Résine Standard Grise 1L', qty: 1, price: 34.90 },
    ],
    shippingAddress: { street: '17 Rue Nationale', city: 'Marseille', zip: '13001', country: 'France' },
    notes: '',
    createdAt: '2024-01-28T13:20:00Z',
  },
  {
    id: 'ORD-007',
    customerName: 'Antoine Dubois',
    email: 'a.dubois@outlook.fr',
    phone: '+33 6 34 56 78 90',
    total: 44.80,
    paymentStatus: 'refunded',
    orderStatus: 'cancelled',
    deliveryStatus: 'Annulée — Remboursée',
    items: [
      { name: 'Filament ABS Noir Intense 1kg', qty: 1, price: 22.90 },
      { name: 'Buse Laiton 0.4mm Pack x5', qty: 1, price: 8.90 },
      { name: 'Câble PTFE Haute Température 1m', qty: 1, price: 6.90 },
    ],
    shippingAddress: { street: '9 Impasse des Roses', city: 'Toulouse', zip: '31000', country: 'France' },
    notes: 'Client a annulé la commande avant expédition.',
    createdAt: '2024-01-22T17:00:00Z',
  },
  {
    id: 'ORD-008',
    customerName: 'Nathalie Rousseau',
    email: 'n.rousseau@sfr.fr',
    phone: '+33 7 22 33 44 55',
    total: 24.90,
    paymentStatus: 'paid',
    orderStatus: 'delivered',
    deliveryStatus: 'Livré le 12/02/2024',
    items: [
      { name: 'Modèle 3D - Dragon Médiéval', qty: 1, price: 9.90 },
      { name: 'Modèle 3D - Figurine Anime Pack', qty: 1, price: 29.90 },
    ],
    shippingAddress: { street: '55 Rue Victor Hugo', city: 'Nice', zip: '06000', country: 'France' },
    notes: 'Téléchargement numérique uniquement.',
    createdAt: '2024-02-08T10:00:00Z',
  },
  {
    id: 'ORD-009',
    customerName: 'Christophe Lambert',
    email: 'ch.lambert@laposte.fr',
    phone: '+33 6 45 67 89 01',
    total: 609.70,
    paymentStatus: 'failed',
    orderStatus: 'cancelled',
    deliveryStatus: 'Paiement échoué',
    items: [
      { name: 'Bambu Lab X1 Carbon', qty: 1, price: 1299.00 },
    ],
    shippingAddress: { street: '1 Allée des Chênes', city: 'Nantes', zip: '44000', country: 'France' },
    notes: 'Carte bancaire refusée. Contacté le client.',
    createdAt: '2024-02-12T15:30:00Z',
  },
  {
    id: 'ORD-010',
    customerName: 'Valérie Simon',
    email: 'val.simon@gmail.com',
    phone: '+33 7 66 55 44 33',
    total: 77.80,
    paymentStatus: 'paid',
    orderStatus: 'packed',
    deliveryStatus: 'Colis préparé',
    items: [
      { name: 'Résine ABS-Like Transparente 500ml', qty: 1, price: 22.90 },
      { name: 'Filament TPU Flexible Blanc 500g', qty: 1, price: 19.90 },
      { name: 'Kit Outils Impression 3D Pro', qty: 1, price: 49.90 },
    ],
    shippingAddress: { street: '33 Chemin des Vignes', city: 'Reims', zip: '51100', country: 'France' },
    notes: '',
    createdAt: '2024-02-17T09:45:00Z',
  },
  {
    id: 'ORD-011',
    customerName: 'François Martin',
    email: 'f.martin@entreprise.fr',
    phone: '+33 6 12 98 76 54',
    total: 189.80,
    paymentStatus: 'unpaid',
    orderStatus: 'pending',
    deliveryStatus: 'En attente de paiement',
    items: [
      { name: 'Filament PLA+ Rouge Carmin 1kg', qty: 2, price: 24.90 },
      { name: 'Résine Standard Grise 1L', qty: 2, price: 34.90 },
      { name: 'Spatule Acier Inoxydable', qty: 4, price: 12.90 },
    ],
    shippingAddress: { street: '78 Rue de la République', city: 'Montpellier', zip: '34000', country: 'France' },
    notes: 'Commande professionnelle, besoin de facture TVA.',
    createdAt: '2024-02-18T12:00:00Z',
  },
  {
    id: 'ORD-012',
    customerName: 'Céline Fontaine',
    email: 'celine.fontaine@yahoo.fr',
    phone: '+33 6 87 65 43 21',
    total: 29.90,
    paymentStatus: 'paid',
    orderStatus: 'delivered',
    deliveryStatus: 'Livré le 05/02/2024',
    items: [
      { name: 'Plateau Magnétique Flexible', qty: 1, price: 29.90 },
    ],
    shippingAddress: { street: '6 Passage de la Madeleine', city: 'Lille', zip: '59000', country: 'France' },
    notes: '',
    createdAt: '2024-02-01T14:00:00Z',
  },
  {
    id: 'ORD-013',
    customerName: 'Julien Lecomte',
    email: 'j.lecomte@gmail.com',
    phone: '+33 7 33 44 55 66',
    total: 54.90,
    paymentStatus: 'paid',
    orderStatus: 'shipped',
    deliveryStatus: 'En transit — Colissimo',
    items: [
      { name: 'Résine 8K Dentaire Beige 500ml', qty: 1, price: 54.90 },
    ],
    shippingAddress: { street: '14 Rue des Artisans', city: 'Rennes', zip: '35000', country: 'France' },
    notes: 'Très fragile, ne pas secouer.',
    createdAt: '2024-02-15T16:20:00Z',
  },
  {
    id: 'ORD-014',
    customerName: 'Sophie Bernard',
    email: 'sophie.b@hotmail.fr',
    phone: '+33 6 22 11 00 99',
    total: 1349.80,
    paymentStatus: 'paid',
    orderStatus: 'processing',
    deliveryStatus: 'En cours de préparation',
    items: [
      { name: 'Bambu Lab X1 Carbon', qty: 1, price: 1299.00 },
      { name: 'Filament PETG Transparent 1kg', qty: 1, price: 27.90 },
      { name: 'Buse Laiton 0.4mm Pack x5', qty: 1, price: 8.90 },
    ],
    shippingAddress: { street: '2 Rue du Château', city: 'Grenoble', zip: '38000', country: 'France' },
    notes: '',
    createdAt: '2024-02-19T10:30:00Z',
  },
  {
    id: 'ORD-015',
    customerName: 'Marc Girard',
    email: 'marc.girard@numericable.fr',
    phone: '+33 7 77 88 99 00',
    total: 19.90,
    paymentStatus: 'paid',
    orderStatus: 'delivered',
    deliveryStatus: 'Livré le 10/02/2024',
    items: [
      { name: 'Modèle 3D - Architecture Gothique', qty: 1, price: 19.90 },
    ],
    shippingAddress: { street: '30 Avenue Jean Jaurès', city: 'Clermont-Ferrand', zip: '63000', country: 'France' },
    notes: 'Téléchargement numérique uniquement.',
    createdAt: '2024-02-07T11:15:00Z',
  },
]
