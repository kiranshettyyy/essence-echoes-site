import noirMasculineImg from '@/assets/perfume-noir-masculine.jpg';
import crystalFeminineImg from '@/assets/perfume-crystal-feminine.jpg';
import roseGoldUnisexImg from '@/assets/perfume-rose-gold-unisex.jpg';
import whiteFreshImg from '@/assets/perfume-white-fresh.jpg';
import vintageAmberImg from '@/assets/perfume-vintage-amber.jpg';

export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  originalPrice?: number;
  images: string[];
  sizes: string[];
  category: 'men' | 'women' | 'unisex';
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  reviews: Review[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Noir Masculine',
    description: 'A sophisticated blend of dark woods and spices',
    fullDescription: 'Noir Masculine embodies the essence of modern masculinity with its rich, complex composition. This sophisticated fragrance opens with fresh bergamot and black pepper, evolving into a heart of smoky incense and cedar, before settling into a deep base of sandalwood and dark amber. Perfect for the confident man who commands attention.',
    price: 89.99,
    originalPrice: 119.99,
    images: [noirMasculineImg, noirMasculineImg, noirMasculineImg],
    sizes: ['30ml', '50ml', '100ml'],
    category: 'men',
    notes: {
      top: ['Bergamot', 'Black Pepper', 'Pink Pepper'],
      middle: ['Incense', 'Cedar', 'Lavender'],
      base: ['Sandalwood', 'Dark Amber', 'Patchouli']
    },
    reviews: [
      {
        id: '1',
        userName: 'James Wilson',
        rating: 5,
        comment: 'Absolutely love this fragrance! Long-lasting and sophisticated.',
        date: '2024-01-15'
      },
      {
        id: '2',
        userName: 'Michael Chen',
        rating: 4,
        comment: 'Great scent for evening wear. Very masculine and elegant.',
        date: '2024-01-10'
      }
    ]
  },
  {
    id: '2',
    name: 'Crystal Femme',
    description: 'Delicate floral bouquet with sparkling freshness',
    fullDescription: 'Crystal Femme captures the essence of feminine elegance with its luminous floral composition. This enchanting fragrance begins with sparkling notes of mandarin and pear, blossoming into a romantic heart of peony and jasmine, before settling into a soft base of white musk and blonde woods. A perfect companion for the modern woman.',
    price: 75.99,
    images: [crystalFeminineImg, crystalFeminineImg, crystalFeminineImg],
    sizes: ['30ml', '50ml', '100ml'],
    category: 'women',
    notes: {
      top: ['Mandarin', 'Pear', 'Pink Grapefruit'],
      middle: ['Peony', 'Jasmine', 'Rose Petals'],
      base: ['White Musk', 'Blonde Woods', 'Soft Amber']
    },
    reviews: [
      {
        id: '3',
        userName: 'Sarah Johnson',
        rating: 5,
        comment: 'Beautiful floral scent that lasts all day. My new favorite!',
        date: '2024-01-12'
      },
      {
        id: '4',
        userName: 'Emma Thompson',
        rating: 5,
        comment: 'Elegant and sophisticated. Perfect for both day and night.',
        date: '2024-01-08'
      }
    ]
  },
  {
    id: '3',
    name: 'Rose Gold Harmony',
    description: 'Contemporary unisex fragrance with warm sophistication',
    fullDescription: 'Rose Gold Harmony represents the perfect balance between masculine and feminine elements. This contemporary unisex fragrance opens with zesty bergamot and cardamom, developing into a harmonious blend of rose and geranium, before concluding with warm sandalwood and precious oud. A versatile scent for those who appreciate refined complexity.',
    price: 95.99,
    images: [roseGoldUnisexImg, roseGoldUnisexImg, roseGoldUnisexImg],
    sizes: ['50ml', '100ml'],
    category: 'unisex',
    notes: {
      top: ['Bergamot', 'Cardamom', 'Ginger'],
      middle: ['Rose', 'Geranium', 'Black Tea'],
      base: ['Sandalwood', 'Oud', 'Vanilla']
    },
    reviews: [
      {
        id: '5',
        userName: 'Alex Rivera',
        rating: 4,
        comment: 'Love that I can share this with my partner. Beautiful unisex scent.',
        date: '2024-01-14'
      }
    ]
  },
  {
    id: '4',
    name: 'Pure Fresh',
    description: 'Clean and invigorating with citrus brightness',
    fullDescription: 'Pure Fresh delivers an instant burst of energy with its clean, invigorating composition. This refreshing fragrance features bright notes of lemon and eucalyptus, supported by crisp mint and aquatic accords, finishing with subtle white tea and clean musk. The perfect choice for those who prefer fresh, uncomplicated elegance.',
    price: 65.99,
    images: [whiteFreshImg, whiteFreshImg, whiteFreshImg],
    sizes: ['30ml', '50ml', '100ml'],
    category: 'unisex',
    notes: {
      top: ['Lemon', 'Eucalyptus', 'Mint'],
      middle: ['White Tea', 'Aquatic Notes', 'Green Leaves'],
      base: ['Clean Musk', 'Soft Woods', 'Mineral Notes']
    },
    reviews: [
      {
        id: '6',
        userName: 'David Park',
        rating: 4,
        comment: 'Perfect for summer! Light, fresh, and clean.',
        date: '2024-01-11'
      },
      {
        id: '7',
        userName: 'Lisa Wong',
        rating: 5,
        comment: 'Great for everyday wear. Not overwhelming at all.',
        date: '2024-01-09'
      }
    ]
  },
  {
    id: '5',
    name: 'Vintage Amber',
    description: 'Timeless elegance with rich oriental warmth',
    fullDescription: 'Vintage Amber pays homage to classic perfumery with its rich, oriental composition. This timeless fragrance opens with warm spices and citrus zest, evolving into a luxurious heart of amber and frankincense, before settling into a deep base of precious woods and vanilla. A sophisticated choice for connoisseurs who appreciate traditional craftsmanship.',
    price: 110.99,
    originalPrice: 149.99,
    images: [vintageAmberImg, vintageAmberImg, vintageAmberImg],
    sizes: ['50ml', '100ml'],
    category: 'unisex',
    notes: {
      top: ['Orange Blossom', 'Cinnamon', 'Cardamom'],
      middle: ['Amber', 'Frankincense', 'Myrrh'],
      base: ['Precious Woods', 'Vanilla', 'Benzoin']
    },
    reviews: [
      {
        id: '8',
        userName: 'Robert Martinez',
        rating: 5,
        comment: 'Exceptional quality and longevity. Worth every penny.',
        date: '2024-01-13'
      },
      {
        id: '9',
        userName: 'Grace Kim',
        rating: 4,
        comment: 'Rich and luxurious. Perfect for special occasions.',
        date: '2024-01-07'
      }
    ]
  }
];