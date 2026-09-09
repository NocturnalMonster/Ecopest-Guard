import React, { useState } from 'react';
import { 
  Star, 
  ShoppingBag, 
  ShieldCheck, 
  Check, 
  CheckCircle2, 
  Leaf, 
  Sparkles,
  Award,
  PawPrint,
  Scissors,
  Quote
} from 'lucide-react';
import { Product, ProductVariant } from '../types';
import { PRODUCTS } from '../data/mockData';

interface CatalogGridProps {
  onSelectProduct: (product: Product) => void;
  onQuickAddToCart: (product: Product, variant: ProductVariant) => void;
  onOrderCODDirect?: (product: Product, variant: ProductVariant) => void;
  onViewArticles?: () => void;
}

interface DisplaySolution {
  id: string;
  badge: string;
  categoryTag: string;
  title: string;
  rating: number;
  reviews: string;
  description: string;
  price: string;
  originalPrice: string;
  image: string;
  categoryFilter: string;
  mappedProductId: string;
}

export const CatalogGrid: React.FC<CatalogGridProps> = ({
  onSelectProduct,
  onQuickAddToCart,
  onOrderCODDirect,
  onViewArticles
}) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [addedMap, setAddedMap] = useState<Record<string, boolean>>({});

  const filterTabs = [
    { id: 'all', label: 'All Products' },
    { id: 'pest', label: 'Pest Control & Prevention' },
    { id: 'kitchen', label: 'Kitchen & Heavy Degreasing' },
    { id: 'leather', label: 'Leather & Interior Shield' },
    { id: 'concentrate', label: 'Eco-Shield Concentrates' }
  ];

  // 4 Featured Solutions matching Screenshot 2 precisely
  const solutions: DisplaySolution[] = [
    {
      id: 'degreaser-750',
      badge: 'Save 22%',
      categoryTag: 'KITCHEN & SURFACE',
      title: 'UltraShield Kitchen & Tile Degreaser (750ml)',
      rating: 4.9,
      reviews: '1,480',
      description: 'Plant-based enzymatic formula breaks down tough grease, cooking oils, and kitchen pests on contact.',
      price: '$24.99',
      originalPrice: '$32.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxHbbNkiuSVnhOhAYYIu_OSEiqvIq2RMGaw-tKvPOddRruTTSjYbUSJQLaUKi_QMVoEF50W-MjFv_KpnALO9GDEChlZAbK7ahuHXWz0WKzD008w8IGQXQAsibWtRFoHv1vbXaZUD_WzXMG6OP7EcFLzy1b7tTfem8eJg0r8e7xC0ThBc1ncdTQAFIO1x6fUwkG-3NwHb5-xYSaQPdWv4MbGCqALeJ_58pNzkHS3HFeerVjP8Zfz6BPag',
      categoryFilter: 'kitchen',
      mappedProductId: 'eko-kitchen-degreaser'
    },
    {
      id: 'leather-500',
      badge: 'Save 21%',
      categoryTag: 'PREMIUM LEATHER CARE',
      title: 'UltraShield Leather Guard & Conditioner (500ml)',
      rating: 4.9,
      reviews: '920',
      description: 'Nourishes natural leather, repels moisture and dust mites, leaves zero residue or chemical odor.',
      price: '$28.50',
      originalPrice: '$36.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU0scUqlQeohPr9cooHA8IkU_ZBzh5Wajv_Aa9UDNL9jon9H4iHh3bk-hYRW2f42c5uO18mwXJfYW-A6ow3UGfPzKVkgQWL-ndkZfVRcapWBR6t69e3UcwxRcyPibxglvOBlJ8S-wXr4EZgyKgPwBRcSA7NvILr4FRb8Lu8pZ51tQiXyAzoGzA7XQ1Yy3weOnw0WDM6KmuWl55ezxBuo49KycmEunsnzrm8rumG-udsP6MLJlifztYxw',
      categoryFilter: 'leather',
      mappedProductId: 'eco-leather-wax'
    },
    {
      id: 'termite-spray',
      badge: 'Save 28%',
      categoryTag: 'SUBTERRANEAN BARRIER',
      title: 'UltraShield Termite & Wood Protector Spray',
      rating: 4.8,
      reviews: '1,920',
      description: 'Deep penetrating natural silica and cedar oil crystalizes wood fibers against termites.',
      price: '$34.50',
      originalPrice: '$48.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB36HfOqS6SxdxQV5pnuFiNJOgCkJ_0qvBSbF2b2ZgkA8j73gZWjhJtwZzf2yTaqkXelbOp3UwEGLSSAAphWLgy7mmLcYRkopKWq8fFwSsP9eNgKcyvVvLDq3sal1JaRNYd58O-wHuWPBvl2-JZohNxj3W6XYAePOioig8UPLyKAd6SeutuiWQK767uVjQObN0wC7ckF4jMN57YzTlCtq1WsJJJXRuGo_2xijVDcyIgtKF4LvUlJ1g4wg',
      categoryFilter: 'pest',
      mappedProductId: 'eco-pest-guard'
    },
    {
      id: 'outdoor-barrier',
      badge: 'Save 23%',
      categoryTag: 'LAWN & FOUNDATION',
      title: 'UltraShield Outdoor Perimeter Barrier (1 Gal)',
      rating: 4.9,
      reviews: '4,890',
      description: 'Creates a continuous 6-month impenetrable botanical perimeter for ticks, fleas, and spiders.',
      price: '$54.00',
      originalPrice: '$69.99',
      image: 'https://lh3.googleusercontent.com/aida/AEtjO1XVMNtlUMEjdw2KG6wtEnwMbsDNqFOthrOFKVOPCcf7wTDMXrMUDCmaIbG1Eqqdb8JbONNT-84LvyFaNtS8FlSLp20nifqqRaFZ66B-W5FFfVFdfIocwZAsxsSZi_lxp7SsPP6VJCwyEKwf3Iajg4nQlU0u3u43EmjYtcgTUxbYrTqMJFbzqaGwqmNQLADSkbRzXjmxkFppggjbgaqz2iqFoYZeG_3C6geAH_G7hFE4hNnDmNqF7KdFFOc',
      categoryFilter: 'concentrate',
      mappedProductId: 'termite-injector-kit'
    }
  ];

  const filteredSolutions = solutions.filter(sol => {
    if (activeCategoryFilter === 'all') return true;
    return sol.categoryFilter === activeCategoryFilter;
  });

  const handleQuickAddClick = (sol: DisplaySolution, e: React.MouseEvent) => {
    e.stopPropagation();
    const product = PRODUCTS.find(p => p.id === sol.mappedProductId) || PRODUCTS[0];
    onQuickAddToCart(product, product.variants[0]);
    setAddedMap(prev => ({ ...prev, [sol.id]: true }));
    setTimeout(() => {
      setAddedMap(prev => ({ ...prev, [sol.id]: false }));
    }, 2000);
  };

  const handleCardClick = (sol: DisplaySolution) => {
    const product = PRODUCTS.find(p => p.id === sol.mappedProductId) || PRODUCTS[0];
    onSelectProduct(product);
  };

  return (
    <section className="py-12 bg-[#F8F9FE]" id="catalog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. SECTION HEADER & CATEGORY PILLS (Screenshot 2) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#006C49] block mb-1">
              SCIENTIFIC PORTFOLIO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-['Space_Grotesk',sans-serif] tracking-tight">
              Engineered Solutions by Category
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              Targeted industrial-grade formulas for every room and infestation level.
            </p>
          </div>

          {/* CATEGORY FILTER PILLS */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map(tab => {
              const isActive = activeCategoryFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategoryFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#00271B] text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. 4-COLUMN PRODUCT GRID (Screenshot 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSolutions.map(sol => (
            <div
              key={sol.id}
              onClick={() => handleCardClick(sol)}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-lg transition-all p-4 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Image Container with Discount Badge */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-3.5 flex items-center justify-center p-3">
                  <span className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-md bg-[#D2F8E7] text-[#006C49] text-[10px] font-black">
                    {sol.badge}
                  </span>
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Category Tag */}
                <span className="text-[10px] font-black tracking-wider uppercase text-[#006C49] block">
                  {sol.categoryTag}
                </span>

                {/* Product Title */}
                <h3 className="text-sm font-extrabold text-slate-900 mt-1 line-clamp-2 leading-snug group-hover:text-[#006C49] transition-colors">
                  {sol.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mt-2 text-xs">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <span className="font-bold text-slate-800 text-xs">{sol.rating}</span>
                  <span className="text-slate-400 text-[11px]">({sol.reviews})</span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                  {sol.description}
                </p>
              </div>

              {/* Price & Quick Add Button */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-base font-black text-slate-900 font-['Space_Grotesk',sans-serif]">
                    {sol.price}
                  </span>
                  <span className="text-xs text-slate-400 line-through">
                    {sol.originalPrice}
                  </span>
                </div>

                <button
                  onClick={(e) => handleQuickAddClick(sol, e)}
                  className="w-full py-2.5 px-4 bg-[#3C2415] hover:bg-[#2B180C] text-white text-xs font-black rounded-xl transition-all shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{addedMap[sol.id] ? 'Added!' : 'Quick Add'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 3. TESTIMONIALS & TRUSTED REVIEWS SECTION */}
        <div className="mt-20 text-center">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#006C49] block mb-1">
            VERIFIED CUSTOMER TESTIMONIALS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-['Space_Grotesk',sans-serif] tracking-tight">
            Loved by Over 14,000+ Homes & Businesses
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto">
            Real feedback from certified homeowners, bakery owners, and property managers eliminating pests safely.
          </p>

          {/* Social Proof Trust Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-bold text-slate-700">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              <div className="flex text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <span>4.9 / 5 Rating</span>
              <span className="text-slate-400 font-normal">(14,280+ Reviews)</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Verified Buyers</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>30-Day Money-Back Guarantee</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero Toxic Odor</span>
            </div>
          </div>
        </div>

        {/* 4. 3 TESTIMONIAL CARDS */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100 flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" /> Verified Purchase
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                "We run an organic bakery and struggled with fruit flies around floor sinks. UltraShield solved it within 2 applications with zero chemical smell. Health inspectors were thrilled."
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-900 font-black text-xs flex items-center justify-center shrink-0">
                MV
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900">Marcus Vance</h4>
                <p className="text-[11px] text-slate-500">Bakery Owner • Austin, TX</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100 flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" /> Verified Purchase
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                "With two Golden Retrievers and twin toddlers, chemical exterminators scared me to death. UltraShield eradicated our palmetto bug issue in Florida completely. Total peace of mind."
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-900 font-black text-xs flex items-center justify-center shrink-0">
                ER
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900">Elena Rostova</h4>
                <p className="text-[11px] text-slate-500">Homeowner • Orlando, FL</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100 flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" /> Verified Purchase
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                "The degreaser power alone is equivalent to heavy toxic workshop chemicals, but it is 100% botanical. Diluting 1 bottle into 32 sprays makes this the highest ROI product I own."
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-900 font-black text-xs flex items-center justify-center shrink-0">
                DJ
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900">David Jenkins</h4>
                <p className="text-[11px] text-slate-500">Property Manager • Seattle, WA</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. 100% LETHAL EFFICACY GUARANTEE BANNER (Screenshot 2) */}
        <div className="mt-10 bg-[#00271B] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-[#10B981] shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white font-['Space_Grotesk',sans-serif]">
                100% Lethal Efficacy or Your Money Back
              </h3>
              <p className="text-xs text-emerald-100/80 mt-1 max-w-xl">
                Try UltraShield for 30 full days. If pests persist or surfaces are not immaculate, get an unconditional instant refund.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById('featured-buy-box');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#006C49] hover:bg-[#005236] text-white text-xs sm:text-sm font-black transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
          >
            Claim Risk-Free Kit
          </button>
        </div>

      </div>
    </section>
  );
};
