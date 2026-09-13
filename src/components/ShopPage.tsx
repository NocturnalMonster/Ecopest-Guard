import React, { useState, useMemo } from 'react';
import { 
  Star, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Search, 
  SlidersHorizontal, 
  ChevronRight, 
  PhoneCall, 
  ArrowRight,
  Package,
  Layers,
  Sparkles,
  Droplets,
  Armchair
} from 'lucide-react';
import { Product, ProductVariant, CategorySlug } from '../types';
import { PRODUCTS } from '../data/mockData';

interface ShopPageProps {
  onSelectProduct: (product: Product) => void;
  onQuickAddToCart: (product: Product, variant: ProductVariant) => void;
  onOrderCODDirect: (product: Product, variant: ProductVariant) => void;
  onNavigateCategoryPage: (slug: CategorySlug) => void;
  onNavigateHome: () => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onSelectProduct,
  onQuickAddToCart,
  onOrderCODDirect,
  onNavigateCategoryPage,
  onNavigateHome
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'pest' | 'kitchen' | 'leather' | 'concentrates' | 'combo'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [selectedVariants, setSelectedVariants] = useState<Record<string, ProductVariant>>({});
  const [addedAnimationMap, setAddedAnimationMap] = useState<Record<string, boolean>>({});

  const filterTabs = [
    { id: 'all', label: 'All Products', count: PRODUCTS.length, icon: Layers },
    { id: 'pest', label: 'Pest Control', count: PRODUCTS.filter(p => p.category === 'pest' || p.category === 'wood').length, icon: ShieldCheck },
    { id: 'kitchen', label: 'Kitchen Degreaser', count: PRODUCTS.filter(p => p.category === 'kitchen').length, icon: Sparkles },
    { id: 'leather', label: 'Leather & Furniture', count: PRODUCTS.filter(p => p.category === 'leather').length, icon: Armchair },
    { id: 'concentrates', label: 'Concentrates', count: PRODUCTS.filter(p => p.category === 'concentrates').length, icon: Droplets },
    { id: 'combo', label: 'Value Combos', count: PRODUCTS.filter(p => p.category === 'combo').length, icon: Package },
  ];

  const handleVariantSelect = (productId: string, variant: ProductVariant, e: React.MouseEvent) => {
    e.stopPropagation();
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

  // Filter & Sort Products
  const displayedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // 1. Filter by category
    if (selectedFilter !== 'all') {
      if (selectedFilter === 'pest') {
        result = result.filter(p => p.category === 'pest' || p.category === 'wood');
      } else {
        result = result.filter(p => p.category === selectedFilter);
      }
    }

    // 2. Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.bengaliSubtitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q)
      );
    }

    // 3. Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedFilter, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#F8F9FE] pb-24 animate-in fade-in duration-200">
      
      {/* 1. BREADCRUMBS BAR */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <button 
              onClick={onNavigateHome}
              className="hover:text-slate-900 font-semibold cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold text-[#006C49]">Shop All Products</span>
          </div>
        </div>
      </div>

      {/* 2. SHOP HERO BANNER */}
      <div className="bg-linear-to-r from-[#00271B] via-[#043C2A] to-[#09543B] text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#6CF8BB] text-xs font-black tracking-wider uppercase mb-3">
              <ShieldCheck className="w-4 h-4 text-[#6CF8BB]" />
              <span>OFFICIAL ULTRASHIELD CATALOG</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Space_Grotesk',sans-serif] tracking-tight text-white leading-tight">
              All Products & Solutions
            </h1>

            <p className="text-sm sm:text-base text-emerald-100/90 font-medium mt-2">
              আল্ট্রাশিল্ডের সকল বায়ো-ফার্মুলেশন ও ঘর সুরক্ষা পণ্য এক সাথে • ১০০% ক্যাশ অন ডেলিভারি
            </p>

            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Explore our complete range of plant-based pest elimination sprays, bio-enzymatic kitchen degreasers, luxury leather conditioners, 32x high-yield concentrates, and value bundles.
            </p>

            {/* Quick Guarantees */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 pt-6 border-t border-white/10 text-xs text-emerald-200">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#6CF8BB]" />
                <span>100% অর্গানিক ও বিষাক্ত ধোঁয়ামুক্ত</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#6CF8BB]" />
                <span>সারা দেশে ক্যাশ অন ডেলিভারি</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#6CF8BB]" />
                <span>কাজ না করলে টাকা ফেরত গ্যারান্টি</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. FILTER & SEARCH TOOLBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/90 p-4 sm:p-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="পণ্য বা সমস্যার নাম দিয়ে খুঁজুন (e.g. Cockroach, Degreaser, Leather)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#006C49] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Controls */}
            <div className="flex items-center justify-between sm:justify-end gap-3">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-bold text-slate-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="py-2 px-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#006C49] cursor-pointer"
                >
                  <option value="featured">Featured / Best Sellers</option>
                  <option value="rating">Highest Customer Rating</option>
                  <option value="price-asc">Price: Low to High (৳)</option>
                  <option value="price-desc">Price: High to Low (৳)</option>
                </select>
              </div>

              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl whitespace-nowrap">
                {displayedProducts.length} Solutions
              </span>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100 overflow-x-auto pb-1 scrollbar-none">
            {filterTabs.map(tab => {
              const isActive = selectedFilter === tab.id;
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id as any)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-[#00271B] text-white shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/70'
                  }`}
                >
                  <TabIcon className={`w-3.5 h-3.5 ${isActive ? 'text-[#6CF8BB]' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-extrabold ${
                    isActive ? 'bg-emerald-800 text-emerald-200' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* 4. PRODUCTS CATALOG GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {displayedProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-md mx-auto my-12">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-black text-slate-800">কোনো পণ্য পাওয়া যায়নি</h3>
            <p className="text-xs text-slate-500 mt-1">
              "{searchQuery}" দিয়ে কোনো প্রোডাক্ট খুঁজে পাওয়া যায়নি। ফিল্টার রিসেট করে আবার চেষ্টা করুন।
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('all');
              }}
              className="mt-4 px-5 py-2.5 bg-[#00271B] text-white font-bold text-xs rounded-xl hover:bg-[#00422e] transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedProducts.map(product => {
              const activeVariant = getActiveVariant(product);
              const isAdded = addedAnimationMap[product.id];

              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  {/* Top Image Box */}
                  <div>
                    <div className="relative aspect-4/3 bg-slate-50 p-6 flex items-center justify-center overflow-hidden border-b border-slate-100">
                      {product.badge && (
                        <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#00271B] text-white shadow-md">
                          {product.badge}
                        </span>
                      )}

                      <span className="absolute top-4 right-4 z-10 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800">
                        Save {activeVariant.savingsPercent}%
                      </span>

                      <img
                        src={product.featuredImage}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="p-5 sm:p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#006C49]">
                          {product.categoryLabel}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span className="font-black text-slate-800 text-xs">{product.rating}</span>
                          <span className="text-[11px] text-slate-400">({product.reviewCount})</span>
                        </div>
                      </div>

                      <h3 className="text-base font-black text-slate-900 group-hover:text-[#006C49] transition-colors line-clamp-2 leading-snug">
                        {product.name}
                      </h3>

                      <p className="text-xs text-emerald-800 font-semibold line-clamp-1">
                        {product.bengaliSubtitle}
                      </p>

                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Variant Selector */}
                      {product.variants.length > 1 && (
                        <div className="pt-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                            Available Sizes & Packs:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {product.variants.map((v) => {
                              const isSelected = activeVariant.id === v.id;
                              return (
                                <button
                                  key={v.id}
                                  type="button"
                                  onClick={(e) => handleVariantSelect(product.id, v, e)}
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
                  </div>

                  {/* Pricing & Actions */}
                  <div className="p-5 sm:p-6 pt-0 space-y-3 border-t border-slate-100 mt-3">
                    <div className="flex items-baseline justify-between pt-3">
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
                      <span className="text-[10px] font-bold text-[#006C49] bg-emerald-50 px-2 py-0.5 rounded-md">
                        Cash on Delivery
                      </span>
                    </div>

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
              );
            })}
          </div>
        )}

      </div>

      {/* 5. DEDICATED CATEGORY HUBS EXPLORER (Links to dedicated category pages) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-2xl mb-6">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#006C49] block mb-1">
              DEDICATED CATEGORY PAGES
            </span>
            <h3 className="text-2xl font-black text-slate-900 font-['Space_Grotesk',sans-serif]">
              Explore Targeted Formula Portals
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Looking for in-depth technical guides, application advice, and certified lab tests? Visit each category's dedicated page.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { slug: 'pest', label: 'Pest Control Page', desc: 'Cockroach, Termite & Bedbug', color: 'border-emerald-200 hover:border-emerald-500', icon: ShieldCheck },
              { slug: 'kitchen', label: 'Kitchen Degreaser Page', desc: 'Chimeny, Stove & Oven Oil', color: 'border-amber-200 hover:border-amber-500', icon: Sparkles },
              { slug: 'leather', label: 'Leather Shield Page', desc: 'Sofa & Car Seat Restorative', color: 'border-amber-700/30 hover:border-amber-800', icon: Armchair },
              { slug: 'concentrate', label: 'Concentrates Page', desc: '32x High-Dilution Formulas', color: 'border-blue-200 hover:border-blue-500', icon: Droplets },
              { slug: 'combos', label: 'Value Combos Page', desc: 'Multi-Room Value Bundles', color: 'border-rose-200 hover:border-rose-500', icon: Package }
            ].map(cat => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.slug}
                  onClick={() => onNavigateCategoryPage(cat.slug as any)}
                  className={`p-4 rounded-2xl border text-left bg-slate-50 hover:bg-white hover:shadow-md transition-all cursor-pointer group ${cat.color}`}
                >
                  <Icon className="w-5 h-5 text-[#006C49] mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xs font-black text-slate-900 group-hover:text-[#006C49] transition-colors">
                    {cat.label}
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">{cat.desc}</p>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-[#006C49] mt-2">
                    <span>Open Page</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 6. CALL / COD HELPLINE BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-3xl bg-linear-to-br from-[#00271B] to-[#0A4D35] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#6CF8BB]">
              ORDER BY PHONE & COD SUPPORT
            </span>
            <h4 className="text-xl sm:text-2xl font-black font-['Space_Grotesk',sans-serif]">
              ফোনে সরাসরি অর্ডার দিন বা পরামর্শ নিন
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-md">
              আমাদের কাস্টমার কেয়ারে কল করে সরাসরি ক্যাশ অন ডেলিভারিতে অর্ডার কনফার্ম করুন।
            </p>
          </div>

          <a
            href="tel:01800555737"
            className="px-6 py-3.5 rounded-2xl bg-white text-[#00271B] font-black text-xs flex items-center gap-2.5 hover:bg-emerald-50 transition-all shadow-md shrink-0"
          >
            <PhoneCall className="w-4 h-4 text-[#006C49]" />
            <span>কল করুন: 01800-555PEST</span>
          </a>
        </div>
      </div>

    </div>
  );
};
