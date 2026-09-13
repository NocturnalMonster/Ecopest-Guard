export type ViewTab = 
  | 'home' 
  | 'shop' 
  | 'category' 
  | 'combos' 
  | 'pdp' 
  | 'blog' 
  | 'article' 
  | 'faq' 
  | 'checkout';

export type CategorySlug = 'pest' | 'kitchen' | 'leather' | 'concentrate' | 'combos' | 'all';

export interface ProductVariant {
  id: string;
  name: string;
  volume: string;
  price: number; // in BDT (৳)
  originalPrice: number;
  savingsPercent: number;
  popular?: boolean;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  bengaliSubtitle: string;
  category: 'pest' | 'kitchen' | 'leather' | 'wood' | 'concentrates' | 'combo';
  categoryLabel: string;
  badge?: string;
  badgeType?: 'bestseller' | 'bio' | 'combo' | 'wood' | 'furniture';
  rating: number;
  reviewCount: number;
  soldCount?: string;
  featuredImage: string;
  galleryImages: string[];
  price: number;
  originalPrice: number;
  discountPercent: number;
  couponAmount: number;
  stockStatus: string;
  dispatchInfo: string;
  description: string;
  bulletFeatures: string[];
  variants: ProductVariant[];
  targetProblems?: string[];
  formulationType?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  variant: ProductVariant;
  quantity: number;
  appliedCoupon: boolean;
}

export interface Article {
  id: string;
  title: string;
  bengaliTitle?: string;
  category: string;
  categorySlug: string;
  readTime: string;
  date: string;
  coverImage: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  productIdsUsed: string[];
  keyHighlights: string[];
  contentPhases?: {
    phaseNumber: string;
    title: string;
    duration: string;
    description: string;
    keyCheck: string;
  }[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'pet-safety' | 'shipping' | 'usage' | 'guarantee';
  highlightPoints?: string[];
}

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  zone: 'dhaka' | 'outside';
  deliveryFee: number;
  address: string;
  notes: string;
  paymentMethod: 'cod' | 'mfs' | 'card';
  mfsProvider?: 'bkash' | 'nagad' | 'rocket';
  mfsTransactionId?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvc?: string;
}
