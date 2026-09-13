import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Armchair, 
  Droplets, 
  Package, 
  Layers, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Truck, 
  ShoppingBag, 
  PhoneCall, 
  ChevronRight, 
  ChevronDown, 
  Info,
  Clock,
  Zap,
  HelpCircle
} from 'lucide-react';
import { Product, ProductVariant, CategorySlug } from '../types';
import { PRODUCTS } from '../data/mockData';

interface CategoryPageProps {
  categorySlug: CategorySlug;
  onSelectCategory: (slug: CategorySlug) => void;
  onSelectProduct: (product: Product) => void;
  onQuickAddToCart: (product: Product, variant: ProductVariant) => void;
  onOrderCODDirect: (product: Product, variant: ProductVariant) => void;
  onNavigateHome: () => void;
  onNavigateShop?: () => void;
}

interface CategoryConfig {
  slug: CategorySlug;
  title: string;
  bengaliSubtitle: string;
  tagline: string;
  badge: string;
  heroGradient: string;
  accentColor: string;
  icon: React.ComponentType<{ className?: string }>;
  stats: { label: string; value: string }[];
  problemTitle: string;
  problemPoints: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  productIds: string[];
}

const CATEGORY_CONFIGS: Record<CategorySlug, CategoryConfig> = {
  pest: {
    slug: 'pest',
    title: 'Pest Control & Prevention',
    bengaliSubtitle: 'তেলাপোকা, উইপোকা, ছারপোকা ও ক্ষতিকর পোকা স্থায়ীভাবে দূর করার বায়ো-ফর্মুলা',
    tagline: '100% Lethal on Cold-Blooded Pests • Zero Toxic Fumes • Safe for Children & Pets',
    badge: 'BIO-ACTIVE ERADICATION',
    heroGradient: 'from-[#00271B] via-[#043E2B] to-[#0A583E]',
    accentColor: '#006C49',
    icon: ShieldCheck,
    stats: [
      { label: 'Knockdown Time', value: '48 Hours' },
      { label: 'Residual Barrier', value: '90 Days' },
      { label: 'Chemical Fumes', value: '0.0%' },
      { label: 'Customer Rating', value: '4.9 / 5.0' }
    ],
    problemTitle: 'Why Standard Chemical Sprays Fail vs Botanical Neuro-Blocks',
    problemPoints: [
      {
        title: 'Instant Cuticle Dissolution',
        desc: 'Enzymatic plant terpenes break down insect lipid barriers within 180 seconds on direct contact.'
      },
      {
        title: 'Disrupts Octopamine Receptors',
        desc: 'Targets biological receptors found exclusively in insects, leaving humans, dogs, and cats completely unaffected.'
      },
      {
        title: 'Micro-Encapsulated 90-Day Defense',
        desc: 'Cedarwood and thyme resins cure onto cracks and baseboards to stop egg hatching and scout migrations.'
      }
    ],
    faqs: [
      {
        q: 'কিচেন বা খাবাবের ঘরে স্প্রে করলে কি কোনো ক্ষতি হবে?',
        a: 'না। আল্ট্রাশিল্ড পেস্ট গার্ড ১০০% ভেষজ উপাদান (রোজমেরি, সিডারউড ও পুদিনা এক্সট্র্যাক্ট) দিয়ে তৈরি। এতে কোনো বিষাক্ত অর্গানোফসফেট নেই। কিচেন কাউন্টার ও সিঙ্কের আশেপাশে নিরাপদে স্প্রে করা যায়।'
      },
      {
        q: 'তেলাপোকা ও ছারপোকা কি পুরোপুরি বংশবৃদ্ধি বন্ধ হবে?',
        a: 'হ্যাঁ। এই ফর্মুলা শুধু বড় পোকা মারে না, বরং তাদের ডিমের প্রোটিন শেল ভেঙে দেয়। একবার স্প্রে করার পর ৯০ দিন পর্যন্ত নতুন বংশবৃদ্ধি প্রতিরোধ করে।'
      },
      {
        q: 'কীভাবে ব্যবহার করলে সবচেয়ে ভালো রেজাল্ট পাওয়া যাবে?',
        a: 'রাতে ঘুমানোর আগে কিচেন সিঙ্কের নিচে, ফ্রিজের পেছনের অংশে এবং ক্যাবিনেটের কোণায় ভালো করে স্প্রে করে সারারাত রেখে দিন। সকালে শুকনো পরিষ্কার করে নিন।'
      }
    ],
    productIds: ['eco-pest-guard', 'termite-wood-shield', 'eco-pest-family-double']
  },
  kitchen: {
    slug: 'kitchen',
    title: 'Kitchen & Heavy Degreasing',
    bengaliSubtitle: 'কিচেন চিমনি, চুলার পোড়া তেল ও গ্রীজ দূরকারী বায়ো-এনজাইম সলিউশন',
    tagline: 'Dissolves Baked Grease & Carbon Residue in 60 Seconds • Food-Prep Area Safe',
    badge: 'RAPID BIO-EMULSION',
    heroGradient: 'from-[#2A1800] via-[#482800] to-[#6E3C00]',
    accentColor: '#D97706',
    icon: Sparkles,
    stats: [
      { label: 'Dissolve Time', value: '60 Seconds' },
      { label: 'Caustic Soda', value: '0%' },
      { label: 'Surface Safe', value: 'Stainless & Tile' },
      { label: 'Aroma', value: 'Citrus Botanical' }
    ],
    problemTitle: 'Scientific Surface Cleansing Without Corrosive Caustic Sodas',
    problemPoints: [
      {
        title: 'Plant Bio-Solvent Formula',
        desc: 'Naturally liquefies heavy polymerized cooking oil without eroding aluminum mesh chimneys or marble tiles.'
      },
      {
        title: 'Roach Pheromone Neutralizer',
        desc: 'Degreases and strips the greasy odor trails that female roaches use to navigate kitchen countertops.'
      },
      {
        title: 'Zero Noxious Vapors',
        desc: 'No burning throat or eye irritation common with harsh lye cleaners. Gentle citrus scent leaves kitchen fresh.'
      }
    ],
    faqs: [
      {
        q: 'কিচেন চিমনি ও চুলার কালো তেল কি ঘষাঘষি ছাড়াই দূর হবে?',
        a: 'হ্যাঁ! স্প্রে করে ৬০-৯০ সেকেন্ড অপেক্ষা করুন। তেল ও গ্রীজ গলে নরম হয়ে তরল হয়ে যাবে, তখন শুধু নরম কাপড় বা টিস্যু দিয়ে মুছে নিলেই কাচের মতো চকচকে হবে।'
      },
      {
        q: 'স্টেইনলেস স্টিল বা মার্বেল পাথরের কোনো ক্ষতি হবে কি?',
        a: 'না, কারণ এতে ক্ষতিকর কস্টিক সোডা বা এসিড নেই। এটি স্টেইনলেস স্টিল, গ্লাস, টাইলস এবং মার্বেল সারফেসে সম্পূর্ণ নিরাপদ।'
      },
      {
        q: '১টি বোতল দিয়ে কতদিন ব্যবহার করা সম্ভব?',
        a: 'একটি ৫০০ মিলি বোতল দিয়ে সাধারণ গৃহস্থালির কিচেন ও চিমনি ২-৩ মাস নিয়মিত পরিষ্কার করা যায়।'
      }
    ],
    productIds: ['eko-kitchen-degreaser']
  },
  leather: {
    slug: 'leather',
    title: 'Leather & Interior Shield',
    bengaliSubtitle: 'লেদার সোফা, গাড়ির সিট ও আসবাবের গভীর কন্ডিশনিং ও ডাস্ট-মাইট সুরক্ষা',
    tagline: 'Pure Carnauba & Jojoba Wax Emulsion • Non-Greasy Satin Finish • Dust Mite Shield',
    badge: 'PREMIUM FURNITURE CARE',
    heroGradient: 'from-[#23150D] via-[#3B2215] to-[#59331E]',
    accentColor: '#854D0E',
    icon: Armchair,
    stats: [
      { label: 'Active Wax', value: 'Carnauba & Jojoba' },
      { label: 'Dust Mite Repel', value: '99.4%' },
      { label: 'Finish Type', value: 'Non-Sticky Satin' },
      { label: 'UV Shield', value: 'Built-in UV-A/B' }
    ],
    problemTitle: 'Restores Fiber Moisture While Repelling Sub-Surface Allergen Colonies',
    problemPoints: [
      {
        title: 'Deep Pore Conditioning',
        desc: 'Replaces lost natural oils to eliminate leather cracking, peeling, and hardening caused by room moisture and heat.'
      },
      {
        title: 'Microscopic Dust Mite Barrier',
        desc: 'Envelops sofa cushion seams in a natural bio-film that prevents allergen-producing mites from nesting.'
      },
      {
        title: 'Satin Non-Sticky Touch',
        desc: 'Absorbs completely within 5 minutes. Clothes and skin stay clean with zero greasy or waxy residue.'
      }
    ],
    faqs: [
      {
        q: 'সোফায় ব্যবহারের পর কি আঠালো ভাব থাকবে বা পোশাকে লাগবে?',
        a: 'একদমই না। ৫ মিনিটের মধ্যে লেদারের গভীরে শুষে নিয়ে একটি নন-স্টিকি সাটিন ফিনিশ দেয়। পোশাকে কোনো দাগ বা তেলতেলে ভাব লাগে না।'
      },
      {
        q: 'রেক্সিন বা ফক্স লেদারে কি ব্যবহার করা যাবে?',
        a: 'হ্যাঁ! এটি আসল চামড়ার পাশাপাশি রেক্সিন, পিইউ লেদার এবং গাড়ির সিটে সমান কার্যকর ও চকচকে সুরক্ষা প্রদান করে।'
      },
      {
        q: 'কতদিন পরপর এটি ব্যবহার করা উচিত?',
        a: 'মাসে ১ থেকে ২ বার হালকা স্প্রে করে মাইক্রোফাইবার কাপড় দিয়ে মুছে নিলেই সোফা নতুনের মতো দীর্ঘস্থায়ী থাকে।'
      }
    ],
    productIds: ['eco-leather-shield']
  },
  concentrate: {
    slug: 'concentrate',
    title: 'Eco-Shield Concentrates & Bulk Refills',
    bengaliSubtitle: '৩২ গুণ ডাইলুশন সাশ্রয়ী বাউন্ডারি ও লন স্প্রে • বড় বাড়ি, বাগান ও বাণিজ্যিক স্থানের জন্য',
    tagline: 'High-Concentration Bio-Defense • Yields up to 32 Liters • Cuts Protection Cost by 70%',
    badge: 'HIGH-YIELD INDUSTRIAL',
    heroGradient: 'from-[#001E36] via-[#053258] to-[#0A4D84]',
    accentColor: '#0284C7',
    icon: Droplets,
    stats: [
      { label: 'Dilution Ratio', value: '1:32 Liters' },
      { label: 'Weather Barrier', value: '6 Months' },
      { label: 'Commercial Savings', value: '70%+' },
      { label: 'Lawn & Soil Safe', value: '100%' }
    ],
    problemTitle: 'Industrial Strength Dilution for Large Perimeters & Severe Outbreaks',
    problemPoints: [
      {
        title: '32x High-Dilution Economics',
        desc: '1 Liter bottle produces 32 full spray refills. Save up to 70% compared to purchasing individual retail cans.'
      },
      {
        title: 'Rain-Proof Outdoor Adhesion',
        desc: 'Polymerized botanical base adheres to outdoor concrete, foundation walls, and lawn soil without washing away.'
      },
      {
        title: 'Precision Termite Deep Injections',
        desc: 'Direct-needle injector kit reaches queen colonies deep inside subterranean furniture and timber pillars.'
      }
    ],
    faqs: [
      {
        q: 'কনসেন্ট্রেট কীভাবে পানিতে মেশাতে হবে?',
        a: 'সাধারণ বাউন্ডারি স্প্রের জন্য ১ লিটার পানিতে ৩০ মিলি কনসেন্ট্রেট মেশান। যদি উইপোকা বা তীব্র উপদ্রব থাকে তবে ১ লিটার পানিতে ৬০ মিলি মিশিয়ে নিন।'
      },
      {
        q: 'বাগানের ঘাস বা গাছের কোনো ক্ষতি হবে কি?',
        a: 'না। এটি ১০০% অর্গানিক উপাদানে তৈরি হওয়ায় ঘাস, ফুলের গাছ এবং মাটির অনুজীবের জন্য সম্পূর্ণ নিরাপদ।'
      },
      {
        q: 'উইপোকা ধ্বংসকারী সিরিঞ্জ কীভাবে কাঠের ভেতরে দিতে হয়?',
        a: 'কাঠের যে স্থানে উইপোকার ছিদ্র বা গুঁড়া দেখা যায়, সেখানে প্রিসিশন সুই ঢুকিয়ে ২-৩ ফোঁটা তরল ইনজেক্ট করলেই রানি পোকা সহ পুরো কলোনি ধ্বংস হয়।'
      }
    ],
    productIds: ['eco-perimeter-concentrate', 'termite-wood-shield']
  },
  combos: {
    slug: 'combos',
    title: 'Combos & Multi-Room Value Bundles',
    bengaliSubtitle: 'সম্পূর্ণ ঘর সুরক্ষা কম্বো প্যাক • সর্বোচ্চ ৩০% সাশ্রয় ও ফ্রি এক্সপ্রেস ডেলিভারি',
    tagline: 'Dual-Action and Trio Multi-Room Arsenals with Free Delivery Nationwide',
    badge: 'MAXIMUM VALUE SAVINGS',
    heroGradient: 'from-[#00271B] via-[#063E2A] to-[#0F5A3E]',
    accentColor: '#059669',
    icon: Package,
    stats: [
      { label: 'Bundle Discount', value: 'Up to 30% OFF' },
      { label: 'Home Delivery', value: 'FREE Nationwide' },
      { label: 'Bonus Items', value: 'Sprayers & Towel' },
      { label: 'Rider Inspection', value: 'Allowed' }
    ],
    problemTitle: 'Whole-Home Botanical Sanitization in a Single Convenient Package',
    problemPoints: [
      {
        title: 'Cross-Contamination Prevention',
        desc: 'Treat pest infestation, kitchen grease, and upholstery dust mites simultaneously so insects have nowhere to hide.'
      },
      {
        title: 'Maximum Savings & Free Shipping',
        desc: 'Save hundreds of Taka compared to buying individual bottles, plus free express courier delivery to your doorstep.'
      },
      {
        title: 'Complimentary Pro Accessories',
        desc: 'Includes high-output adjustable mist nozzles and ultra-soft microfiber buffing cloths.'
      }
    ],
    faqs: [
      {
        q: 'কম্বো প্যাকে কি কি পণ্য পাওয়া যাবে?',
        a: 'আমাদের কমপ্লিট হোম স্যানিটেশন ট্রায়ো প্যাকে থাকছে: ১টি ইকো পেস্ট গার্ড (৪৫০ মিলি), ১টি কিচেন ও চিমনি ক্লিনার (৫০০ মিলি) এবং ১টি লেদার শিল্ড (৫০০ মিলি) সাথে ২টি স্প্রেয়ার ও মাইক্রোফাইবার কাপড় ফ্রি।'
      },
      {
        q: 'ক্যাশ অন ডেলিভারিতে প্যাকেট চেক করে টাকা দেওয়া যাবে?',
        a: 'অবশ্যই! রাইডারের সামনে প্যাকেট খুলে ভেতরের বোতলগুলো চেক করে তারপর মূল্য পরিশোধ করতে পারবেন।'
      },
      {
        q: 'ডেলিভারি চার্জ কি সম্পূর্ণ ফ্রি?',
        a: 'হ্যাঁ, আমাদের সব কম্বো ও মাল্টি-প্যাক অর্ডারে ঢাকা এবং ঢাকার বাইরে ফ্রি ডেলিভারি সুবিধা প্রযোজ্য।'
      }
    ],
    productIds: ['complete-home-trio', 'eco-pest-family-double']
  },
  all: {
    slug: 'all',
    title: 'Complete Scientific Portfolio',
    bengaliSubtitle: 'আল্ট্রাশিল্ডের সকল ক্যাটাগরি ও ফর্মুলার পূর্ণ তালিকা',
    tagline: 'Explore All Targeted Industrial Formulas by Category and Room Requirement',
    badge: 'ALL CATEGORIES',
    heroGradient: 'from-[#0F172A] via-[#1E293B] to-[#334155]',
    accentColor: '#3B82F6',
    icon: Layers,
    stats: [
      { label: 'Total Categories', value: '5 Distinct Lines' },
      { label: 'Safety Standard', value: '100% Bio-Organic' },
      { label: 'Nationwide Users', value: '50,000+ Homes' },
      { label: 'Cash on Delivery', value: 'All 64 Districts' }
    ],
    problemTitle: 'Engineered for Complete Household Environmental Safety',
    problemPoints: [
      {
        title: 'Targeted Action',
        desc: 'No single generic chemical; each product has a tailored pH and botanical concentration for its target surface.'
      },
      {
        title: 'Laboratory Verified',
        desc: 'Clinically tested for zero organophosphates, zero caustic sodium hydroxides, and zero persistent toxins.'
      },
      {
        title: 'Money Back Guarantee',
        desc: 'Every single product is backed by our signature 100% Satisfaction or Full Refund promise.'
      }
    ],
    faqs: [
      {
        q: 'আমার বাসার জন্য কোন ক্যাটাগরি সবচেয়ে উপযুক্ত?',
        a: 'যদি আপনার বাসায় তেলাপোকা বা ক্ষতিকর পোকা থাকে তবে Pest Control বেছে নিন। কিচেন চিমনির জন্য Kitchen Degreasing এবং সোফার জন্য Leather Care বেছে নিন। সব রুমের জন্য Combo Bundle সবচেয়ে সাশ্রয়ী।'
      },
      {
        q: 'অর্ডার করার কতদিনের মধ্যে ডেলিভারি পাওয়া যাবে?',
        a: 'ঢাকায় ১ কার্যদিবসে এবং ঢাকার বাইরে ২-৩ কার্যদিবসের মধ্যে নির্ভরযোগ্য কুরিয়ারে ক্যাশ অন ডেলিভারি পৌঁছে দেওয়া হয়।'
      }
    ],
    productIds: [
      'eco-pest-guard',
      'eko-kitchen-degreaser',
      'eco-leather-shield',
      'termite-wood-shield',
      'complete-home-trio',
      'eco-perimeter-concentrate'
    ]
  }
};

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categorySlug,
  onSelectCategory,
  onSelectProduct,
  onQuickAddToCart,
  onOrderCODDirect,
  onNavigateHome,
  onNavigateShop
}) => {
  const currentConfig = CATEGORY_CONFIGS[categorySlug] || CATEGORY_CONFIGS.pest;
  const IconComponent = currentConfig.icon;

  // Track selected variant per product
  const [selectedVariants, setSelectedVariants] = useState<Record<string, ProductVariant>>({});
  const [addedAnimationMap, setAddedAnimationMap] = useState<Record<string, boolean>>({});
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Category navigation tabs
  const categoryTabs: { slug: CategorySlug; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { slug: 'pest', label: 'Pest Control', icon: ShieldCheck },
    { slug: 'kitchen', label: 'Kitchen Degreaser', icon: Sparkles },
    { slug: 'leather', label: 'Leather Shield', icon: Armchair },
    { slug: 'concentrate', label: 'Concentrates', icon: Droplets },
    { slug: 'combos', label: 'Value Combos', icon: Package },
    { slug: 'all', label: 'All Products (Shop)', icon: Layers }
  ];

  // Get matching products
  const categoryProducts = PRODUCTS.filter(p => currentConfig.productIds.includes(p.id));

  // Handle variant selection
  const handleVariantSelect = (productId: string, variant: ProductVariant) => {
    setSelectedVariants(prev => ({
      ...prev,
      [productId]: variant
    }));
  };

  const getActiveVariant = (product: Product): ProductVariant => {
    return selectedVariants[product.id] || product.variants[0];
  };

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const variant = getActiveVariant(product);
    onQuickAddToCart(product, variant);
    setAddedAnimationMap(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedAnimationMap(prev => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  const handleCODClick = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const variant = getActiveVariant(product);
    onOrderCODDirect(product, variant);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FE] pb-20 animate-in fade-in duration-200">
      
      {/* 1. BREADCRUMBS & TOP SWITCHER BAR */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            
            {/* Breadcrumb links */}
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <button 
                onClick={onNavigateHome}
                className="hover:text-slate-900 font-semibold cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <button
                onClick={() => (onNavigateShop ? onNavigateShop() : onSelectCategory('all'))}
                className="hover:text-slate-900 font-semibold cursor-pointer"
              >
                Shop All / Categories
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-bold text-[#006C49] truncate max-w-[200px]">
                {currentConfig.title}
              </span>
            </div>

            {/* Quick Category Switcher Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {categoryTabs.map((tab) => {
                const isActive = categorySlug === tab.slug;
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.slug}
                    onClick={() => {
                      if (tab.slug === 'all' && onNavigateShop) {
                        onNavigateShop();
                      } else {
                        onSelectCategory(tab.slug);
                      }
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                      isActive
                        ? 'bg-[#00271B] text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <TabIcon className={`w-3.5 h-3.5 ${isActive ? 'text-[#10B981]' : 'text-slate-500'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* 2. DEDICATED CATEGORY HERO BANNER */}
      <div className={`bg-linear-to-r ${currentConfig.heroGradient} text-white relative overflow-hidden py-12 sm:py-16`}>
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            
            {/* Category badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-black tracking-wider uppercase mb-4">
              <IconComponent className="w-4 h-4 text-emerald-300" />
              <span>{currentConfig.badge}</span>
            </div>

            {/* Title & Bengail subtitle */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Space_Grotesk',sans-serif] tracking-tight text-white leading-tight">
              {currentConfig.title}
            </h1>

            <p className="text-sm sm:text-base text-emerald-100/90 font-medium mt-2 leading-relaxed">
              {currentConfig.bengaliSubtitle}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal">
              {currentConfig.tagline}
            </p>

            {/* 4 Stats Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              {currentConfig.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10"
                >
                  <p className="text-[11px] text-emerald-200/80 font-medium">{stat.label}</p>
                  <p className="text-base sm:text-lg font-black text-white mt-0.5">{stat.value}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* 3. PRODUCTS GRID FOR THIS CATEGORY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#006C49] block mb-1">
              PORTFOLIO SELECTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Space_Grotesk',sans-serif]">
              {categoryProducts.length} Verified {currentConfig.title} Formulas
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              All items packaged with tamper-proof security seals and eligible for Cash on Delivery nationwide.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
            <Truck className="w-4 h-4 text-[#006C49]" />
            <span className="font-semibold">ঢাকা ১ দিন • সারা দেশ ২-৩ দিনে হোম ডেলিভারি</span>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categoryProducts.map((product) => {
            const activeVariant = getActiveVariant(product);
            const isAdded = addedAnimationMap[product.id];

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
              >
                {/* Image Header with Badge */}
                <div className="relative aspect-4/3 bg-slate-50 p-6 flex items-center justify-center overflow-hidden border-b border-slate-100">
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#00271B] text-white shadow-md">
                    {product.badge || 'PRO FORMULA'}
                  </span>

                  <span className="absolute top-4 right-4 z-10 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800">
                    Save {activeVariant.savingsPercent}%
                  </span>

                  <img
                    src={product.featuredImage}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div>
                    {/* Category tag & Star Rating */}
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#006C49]">
                        {product.categoryLabel}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-black text-slate-800 text-xs">{product.rating}</span>
                        <span className="text-[11px] text-slate-400">({product.reviewCount})</span>
                      </div>
                    </div>

                    {/* Product Title & Bengali Subtitle */}
                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#006C49] transition-colors line-clamp-2 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-emerald-800 font-semibold mt-1 line-clamp-1">
                      {product.bengaliSubtitle}
                    </p>

                    <p className="text-xs text-slate-500 mt-2.5 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Volume / Pack Variant Selector */}
                    {product.variants.length > 1 && (
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                          Select Size / Pack:
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {product.variants.map((v) => {
                            const isSelected = activeVariant.id === v.id;
                            return (
                              <button
                                key={v.id}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleVariantSelect(product.id, v);
                                }}
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                  isSelected
                                    ? 'bg-[#00271B] text-white shadow-2xs ring-1 ring-emerald-500'
                                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                }`}
                              >
                                {v.volume}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Pricing & CTA Buttons */}
                  <div className="pt-3 border-t border-slate-100 space-y-3">
                    
                    {/* Price display */}
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-slate-900 font-['Space_Grotesk',sans-serif]">
                          ৳{activeVariant.price}
                        </span>
                        {activeVariant.originalPrice > activeVariant.price && (
                          <span className="text-xs text-slate-400 line-through">
                            ৳{activeVariant.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-bold text-[#006C49]">
                        In Stock • Cash on Delivery
                      </span>
                    </div>

                    {/* Action buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={(e) => handleAddToCart(product, e)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                        }`}
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>{isAdded ? 'Added ✓' : 'Add to Cart'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleCODClick(product, e)}
                        className="py-2.5 px-3 rounded-xl text-xs font-black text-white bg-[#00271B] hover:bg-[#00422e] transition-all flex items-center justify-center gap-1 shadow-sm cursor-pointer"
                      >
                        <span>Cash on Delivery</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* 4. CATEGORY SCIENCE & EFFICACY GUIDE */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#006C49] block mb-1">
              SCIENTIFIC ADVANTAGE
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-['Space_Grotesk',sans-serif]">
              {currentConfig.problemTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentConfig.problemPoints.map((pt, i) => (
              <div 
                key={i}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-2"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#006C49] flex items-center justify-center font-black text-xs">
                  0{i + 1}
                </div>
                <h4 className="text-sm font-black text-slate-900">{pt.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. FREQUENTLY ASKED QUESTIONS SPECIFIC TO THIS CATEGORY */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-[#006C49]" />
            <h3 className="text-lg sm:text-xl font-black text-slate-900 font-['Space_Grotesk',sans-serif]">
              {currentConfig.title} – সাধারণ জিজ্ঞাসাসমূহ (FAQ)
            </h3>
          </div>

          <div className="space-y-3">
            {currentConfig.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-slate-50/70 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-900 pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#006C49]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. HELP / COD SUPPORT BANNER */}
        <div className="mt-12 rounded-3xl bg-linear-to-br from-[#00271B] to-[#0A4D35] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#6CF8BB]">
              24/7 EXPERT ASSISTANCE
            </span>
            <h4 className="text-xl sm:text-2xl font-black font-['Space_Grotesk',sans-serif]">
              কোন ফর্মুলা আপনার বাসার জন্য সেরা?
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-md">
              আমাদের সার্টিফাইড বায়ো-সেফটি এক্সপার্টদের সাথে ফোনে সরাসরি কথা বলুন অথবা সরাসরি ক্যাশ অন ডেলিভারি অর্ডার দিন।
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="tel:01800555737"
              className="px-5 py-3 rounded-xl bg-white text-[#00271B] font-black text-xs flex items-center gap-2 hover:bg-emerald-50 transition-all shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-[#006C49]" />
              <span>কল করুন: 01800-555PEST</span>
            </a>
            <button
              onClick={() => onSelectCategory('all')}
              className="px-5 py-3 rounded-xl bg-emerald-800/80 hover:bg-emerald-800 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>সকল ক্যাটাগরি দেখুন</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
