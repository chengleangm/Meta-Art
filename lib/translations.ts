export type Language = 'fr' | 'en'

export type Translations = {
  nav: {
    shop: string
    printers: string
    filament: string
    models: string
    accessories: string
    cart: string
    about: string
    search: string
    wishlist: string
    account: string
    mobileMenu: {
      cartLabel: string
      aboutLabel: string
    }
  }
  hero: {
    badge: string
    headline1: string
    headline2: string
    headline3: string
    headline4: string
    subtitle: string
    cta1: string
    cta2: string
    socialProof: string
    trustpilot: string
    floatingColors: string
    floatingTrend: string
    floatingTrendProduct: string
    floatingTrendPrice: string
    floatingShipping: string
    floatingShippingDesc: string
  }
  stats: {
    products: string
    downloads: string
    rating: string
    newItems: string
    newValue: string
  }
  sections: {
    categories: {
      label: string
      title: string
      subtitle: string
      cta: string
    }
    featured: {
      label: string
      title: string
      subtitle: string
      cta: string
    }
    bestSellers: {
      label: string
      title: string
      cta: string
    }
    filaments: {
      label: string
      title: string
      subtitle: string
      cta: string
      coloris: string
      from: string
    }
    models: {
      label: string
      title: string
      subtitle: string
      cta: string
      free: string
      freeLabel: string
    }
    why: {
      label: string
      title: string
      subtitle: string
    }
    newsletter: {
      label: string
      title: string
      subtitle: string
      placeholder: string
      button: string
      disclaimer: string
    }
    latest: {
      label: string
      title: string
      cta: string
    }
  }
  product: {
    addToCart: string
    unavailable: string
    inStock: string
    lowStock: string
    outOfStock: string
    bestSeller: string
    reviews: string
  }
  footer: {
    description: string
    navTitle: string
    categoriesTitle: string
    contactTitle: string
    newsletterTitle: string
    newsletterPlaceholder: string
    copyright: string
    siret: string
    links: {
      shop: string
      about: string
      contact: string
      faq: string
      blog: string
      printers: string
      filament: string
      resin: string
      models: string
      accessories: string
      faqLong: string
      terms: string
      privacy: string
      shipping: string
      warranty: string
    }
  }
  features: {
    title: string
    description: string
  }[]
}

const fr: Translations = {
  nav: {
    shop: 'Boutique',
    printers: 'Imprimantes',
    filament: 'Filament',
    models: 'Modèles 3D',
    accessories: 'Accessoires',
    cart: 'Panier',
    about: 'À propos',
    search: 'Rechercher',
    wishlist: 'Wishlist',
    account: 'Compte',
    mobileMenu: {
      cartLabel: 'Panier',
      aboutLabel: 'À propos',
    },
  },
  hero: {
    badge: 'Boutique 3D Française N°1',
    headline1: 'Imprimez',
    headline2: 'vos idées',
    headline3: 'en',
    headline4: '3D',
    subtitle:
      "Découvrez notre sélection premium d'imprimantes 3D, filaments, résines et modèles numériques. Livraison rapide en France et toute l'Europe.",
    cta1: 'Explorer la boutique',
    cta2: 'Imprimantes 3D',
    socialProof: '+12 000 clients satisfaits',
    trustpilot: '4.8/5 sur Trustpilot',
    floatingColors: 'Filaments disponibles',
    floatingTrend: 'TENDANCE',
    floatingTrendProduct: 'MetaPrint Pro',
    floatingTrendPrice: '499 € · 4.8 ⭐',
    floatingShipping: 'Livraison offerte',
    floatingShippingDesc: "dès 50€ d'achat",
  },
  stats: {
    products: 'Produits',
    downloads: 'Téléchargements',
    rating: 'Note moyenne',
    newItems: 'Nouveautés',
    newValue: 'Chaque semaine',
  },
  sections: {
    categories: {
      label: 'Collections',
      title: 'Explorez nos catégories',
      subtitle: "Du matériel pro aux fichiers numériques — tout pour l'impression 3D.",
      cta: 'Voir toutes les catégories',
    },
    featured: {
      label: 'Coup de cœur',
      title: 'Produits vedettes',
      subtitle: 'Notre sélection des meilleures références du moment.',
      cta: 'Voir tous les produits',
    },
    bestSellers: {
      label: 'Populaire',
      title: 'Meilleures ventes',
      cta: 'Voir tout',
    },
    filaments: {
      label: 'Matériaux',
      title: 'Filaments pour tous les projets',
      subtitle: 'PLA, PETG, ABS, TPU, Carbone, Soie — une gamme complète pour chaque application.',
      cta: 'Tous les filaments',
      coloris: 'coloris',
      from: 'À partir de',
    },
    models: {
      label: 'Modèles numériques',
      title: 'Fichiers STL & 3MF',
      subtitle: 'Téléchargez des modèles 3D prêts à imprimer — figurines, déco, pièces techniques et bien plus.',
      cta: 'Voir la bibliothèque',
      free: 'GRATUIT',
      freeLabel: 'Gratuit',
    },
    why: {
      label: 'Pourquoi nous choisir',
      title: "L'expérience Meta Art",
      subtitle: "Nous nous engageons à vous offrir le meilleur de l'impression 3D.",
    },
    newsletter: {
      label: 'Newsletter',
      title: 'Restez informé des nouveautés',
      subtitle: 'Recevez en exclusivité nos nouveaux produits, tutoriels, codes promo et deals flash.',
      placeholder: 'votre@email.fr',
      button: "S'abonner",
      disclaimer: 'Pas de spam. Désinscription en un clic. Données protégées conformément au RGPD.',
    },
    latest: {
      label: 'Récemment ajouté',
      title: 'Nouveaux produits',
      cta: 'Tout voir',
    },
  },
  product: {
    addToCart: 'Ajouter au panier',
    unavailable: 'Indisponible',
    inStock: 'En stock',
    lowStock: 'Stock limité',
    outOfStock: 'Rupture',
    bestSeller: 'Best Seller',
    reviews: 'avis',
  },
  footer: {
    description:
      "Votre boutique française spécialisée en impression 3D. Imprimantes, filaments, résines et modèles 3D — tout pour concrétiser vos idées.",
    navTitle: 'Navigation',
    categoriesTitle: 'Catégories',
    contactTitle: 'Contact',
    newsletterTitle: 'Newsletter',
    newsletterPlaceholder: 'votre@email.fr',
    copyright: `© ${new Date().getFullYear()} Meta Art SAS — Tous droits réservés`,
    siret: 'SIRET 123 456 789 00010',
    links: {
      shop: 'Boutique',
      about: 'À propos',
      contact: 'Contact',
      faq: 'FAQ',
      blog: 'Blog',
      printers: 'Imprimantes 3D',
      filament: 'Filament',
      resin: 'Résine',
      models: 'Modèles 3D',
      accessories: 'Accessoires',
      faqLong: 'Questions fréquentes',
      terms: 'CGV',
      privacy: 'Politique de confidentialité',
      shipping: 'Livraison & Retours',
      warranty: 'Garanties',
    },
  },
  features: [
    {
      title: 'Livraison rapide',
      description:
        "Expédition sous 24h pour les produits en stock. Livraison gratuite dès 50€ d'achat en France métropolitaine.",
    },
    {
      title: 'Qualité garantie',
      description:
        'Tous nos produits sont testés et certifiés. Filaments avec tolérance ±0.02mm, résines à faible rétraction.',
    },
    {
      title: 'Support expert',
      description:
        "Notre équipe de passionnés répond à vos questions du lundi au vendredi de 9h à 18h par chat et email.",
    },
    {
      title: 'Retours faciles',
      description:
        "30 jours pour changer d'avis. Retours gratuits sur les produits défectueux. Remboursement rapide.",
    },
    {
      title: 'Produits premium',
      description:
        'Sélection rigoureuse des meilleures marques mondiales : Bambu Lab, Prusa, eSUN, Elegoo, Phrozen.',
    },
    {
      title: 'Nouveautés hebdo',
      description:
        'Nouveaux produits et modèles 3D ajoutés chaque semaine. Abonnez-vous à notre newsletter pour ne rien manquer.',
    },
  ],
}

const en: Translations = {
  nav: {
    shop: 'Shop',
    printers: 'Printers',
    filament: 'Filament',
    models: '3D Models',
    accessories: 'Accessories',
    cart: 'Cart',
    about: 'About',
    search: 'Search',
    wishlist: 'Wishlist',
    account: 'Account',
    mobileMenu: {
      cartLabel: 'Cart',
      aboutLabel: 'About',
    },
  },
  hero: {
    badge: '#1 French 3D Printing Store',
    headline1: 'Print',
    headline2: 'your ideas',
    headline3: 'in',
    headline4: '3D',
    subtitle:
      'Discover our premium selection of 3D printers, filaments, resins and digital models. Fast delivery across France and Europe.',
    cta1: 'Shop Now',
    cta2: '3D Printers',
    socialProof: '+12,000 satisfied customers',
    trustpilot: '4.8/5 on Trustpilot',
    floatingColors: 'Available Filaments',
    floatingTrend: 'TRENDING',
    floatingTrendProduct: 'MetaPrint Pro',
    floatingTrendPrice: '€499 · 4.8 ⭐',
    floatingShipping: 'Free Shipping',
    floatingShippingDesc: 'on orders over €50',
  },
  stats: {
    products: 'Products',
    downloads: 'Downloads',
    rating: 'Avg Rating',
    newItems: 'New Items',
    newValue: 'Every Week',
  },
  sections: {
    categories: {
      label: 'Collections',
      title: 'Explore our categories',
      subtitle: 'From pro hardware to digital files — everything for 3D printing.',
      cta: 'View all categories',
    },
    featured: {
      label: 'Featured',
      title: 'Top Products',
      subtitle: 'Our selection of the best references right now.',
      cta: 'View all products',
    },
    bestSellers: {
      label: 'Popular',
      title: 'Best Sellers',
      cta: 'View all',
    },
    filaments: {
      label: 'Materials',
      title: 'Filaments for every project',
      subtitle: 'PLA, PETG, ABS, TPU, Carbon Fiber, Silk — a complete range for every application.',
      cta: 'All filaments',
      coloris: 'colors',
      from: 'From',
    },
    models: {
      label: 'Digital Models',
      title: 'STL & 3MF Files',
      subtitle: 'Download 3D models ready to print — miniatures, decor, technical parts and more.',
      cta: 'Browse library',
      free: 'FREE',
      freeLabel: 'Free',
    },
    why: {
      label: 'Why choose us',
      title: 'The Meta Art Experience',
      subtitle: 'We are committed to offering you the best in 3D printing.',
    },
    newsletter: {
      label: 'Newsletter',
      title: 'Stay up to date',
      subtitle: 'Get our latest products, tutorials, promo codes and flash deals delivered to your inbox.',
      placeholder: 'your@email.com',
      button: 'Subscribe',
      disclaimer: 'No spam. Unsubscribe in one click. Data protected under GDPR.',
    },
    latest: {
      label: 'Recently Added',
      title: 'New Products',
      cta: 'View all',
    },
  },
  product: {
    addToCart: 'Add to Cart',
    unavailable: 'Unavailable',
    inStock: 'In Stock',
    lowStock: 'Low Stock',
    outOfStock: 'Out of Stock',
    bestSeller: 'Best Seller',
    reviews: 'reviews',
  },
  footer: {
    description:
      'Your French 3D printing store. Printers, filaments, resins and 3D models — everything to bring your ideas to life.',
    navTitle: 'Navigation',
    categoriesTitle: 'Categories',
    contactTitle: 'Contact',
    newsletterTitle: 'Newsletter',
    newsletterPlaceholder: 'your@email.com',
    copyright: `© ${new Date().getFullYear()} Meta Art SAS — All rights reserved`,
    siret: 'SIRET 123 456 789 00010',
    links: {
      shop: 'Shop',
      about: 'About',
      contact: 'Contact',
      faq: 'FAQ',
      blog: 'Blog',
      printers: '3D Printers',
      filament: 'Filament',
      resin: 'Resin',
      models: '3D Models',
      accessories: 'Accessories',
      faqLong: 'Frequently Asked Questions',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      shipping: 'Shipping & Returns',
      warranty: 'Warranty',
    },
  },
  features: [
    {
      title: 'Fast Shipping',
      description: 'Ships within 24h for in-stock items. Free shipping on orders over €50 in mainland France.',
    },
    {
      title: 'Quality Guaranteed',
      description: 'All products tested and certified. Filaments with ±0.02mm tolerance, low-shrinkage resins.',
    },
    {
      title: 'Expert Support',
      description: 'Our passionate team answers your questions Monday–Friday, 9am–6pm via chat and email.',
    },
    {
      title: 'Easy Returns',
      description: '30 days to change your mind. Free returns on defective items. Fast refunds.',
    },
    {
      title: 'Premium Products',
      description: 'Curated selection of the best global brands: Bambu Lab, Prusa, eSUN, Elegoo, Phrozen.',
    },
    {
      title: 'Weekly New Arrivals',
      description: 'New products and 3D models added every week. Subscribe to our newsletter to stay informed.',
    },
  ],
}

export const translations: Record<Language, Translations> = { fr, en }
