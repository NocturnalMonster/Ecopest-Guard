import React, { useState, useRef, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  User, 
  Phone, 
  ShieldCheck, 
  Menu, 
  X,
  Sparkles,
  Zap,
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Layers,
  Droplets,
  Package,
  Armchair
} from 'lucide-react';
import { ViewTab, Product } from '../types';
import { PRODUCTS } from '../data/mockData';

export interface CategoryMenuItem {
  id: string;
  label: string;
  shortDesc: string;
  badge?: string;
  badgeColor?: string;
  icon: React.ComponentType<{ className?: string }>;
  itemCount: string;
}

export const PRODUCT_CATEGORIES: CategoryMenuItem[] = [
  {
    id: 'all',
    label: 'All Products',
    shortDesc: 'Complete botanical defense & cleaning lineup',
    badge: 'All',
    badgeColor: 'bg-slate-100 text-slate-700',
    icon: Layers,
    itemCount: '6 Solutions'
  },
  {
    id: 'pest',
    label: 'Pest Control & Prevention',
    shortDesc: 'Cockroach, Termite, Bedbug & Ant Eradication',
    badge: 'Bestseller',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    icon: ShieldCheck,
    itemCount: '2 Formulas'
  },
  {
    id: 'kitchen',
    label: 'Kitchen & Heavy Degreasing',
    shortDesc: 'Stovetop, tile & sink enzymatic grease break',
    badge: 'Fast-Acting',
    badgeColor: 'bg-amber-100 text-amber-800',
    icon: Sparkles,
    itemCount: '1 Formula'
  },
  {
    id: 'leather',
    label: 'Leather & Interior Shield',
    shortDesc: 'Deep conditioning & dust mite repellent wax',
    badge: 'Premium',
    badgeColor: 'bg-purple-100 text-purple-800',
    icon: Armchair,
    itemCount: '1 Formula'
  },
  {
    id: 'concentrate',
    label: 'Eco-Shield Concentrates',
    shortDesc: '32x High-dilution & perimeter lawn barriers',
    badge: 'High Yield',
    badgeColor: 'bg-blue-100 text-blue-800',
    icon: Droplets,
    itemCount: '1 Formula'
  },
  {
    id: 'combos',
    label: 'Combos & Value Bundles',
    shortDesc: 'Multi-room packs with up to 30% savings',
    badge: 'Save 30%',
    badgeColor: 'bg-rose-100 text-rose-800',
    icon: Package,
    itemCount: '2 Bundles'
  }
];

interface NavbarProps {
  activeTab: ViewTab;
  setActiveTab: (tab: ViewTab) => void;
  cartCount: number;
  onOpenCart: () => void;
  onSelectProduct: (product: Product) => void;
  onOpenAccount: () => void;
  onOpenSupport: () => void;
  selectedCategory?: string;
  onSelectCategory?: (categoryId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  onSelectProduct,
  onOpenAccount,
  onOpenSupport,
  selectedCategory = 'all',
  onSelectCategory
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const categoryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const categoryContainerRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryContainerRef.current &&
        !categoryContainerRef.current.contains(event.target as Node)
      ) {
        setCategoryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (categoryTimeoutRef.current) clearTimeout(categoryTimeoutRef.current);
    };
  }, []);

  const handleCategoryHoverEnter = () => {
    if (categoryTimeoutRef.current) {
      clearTimeout(categoryTimeoutRef.current);
    }
    setCategoryDropdownOpen(true);
  };

  const handleCategoryHoverLeave = () => {
    categoryTimeoutRef.current = setTimeout(() => {
      setCategoryDropdownOpen(false);
    }, 200);
  };

  const handleCategorySelect = (categoryId: string) => {
    if (categoryId === 'all') {
      setActiveTab('shop');
    } else {
      onSelectCategory?.(categoryId);
      setActiveTab('category');
    }
    setCategoryDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.bengaliSubtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleNavClick = (tab: ViewTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setCategoryDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-2xs">
      {/* MAIN NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* LEFT: BRAND LOGO */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#0F3E2E] to-[#164e3c] flex items-center justify-center text-white shadow-md border border-emerald-500/20">
              <ShieldCheck className="w-6 h-6 text-[#10B981]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-[#00271B] tracking-tight font-['Space_Grotesk',sans-serif] leading-none">
                Ultra<span className="text-[#006C49]">Shield</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#006C49] mt-0.5">
                Bio-Pest Defense
              </span>
            </div>
          </div>

          {/* CENTER LINKS: EXACT USER NAVIGATION TABS FROM SCREENSHOT */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Home Tab */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-1.5 rounded-lg text-xs tracking-tight transition-all cursor-pointer ${
                activeTab === 'home'
                  ? 'bg-sky-50 text-sky-800 font-extrabold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 font-semibold hover:bg-slate-100/70'
              }`}
            >
              Home
            </button>

            {/* Shop Tab (Single page for all products) */}
            <button
              onClick={() => handleNavClick('shop')}
              className={`px-3.5 py-1.5 rounded-lg text-xs tracking-tight transition-all cursor-pointer ${
                activeTab === 'shop'
                  ? 'bg-[#00271B] text-white font-extrabold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 font-semibold hover:bg-slate-100/70'
              }`}
            >
              Shop
            </button>

            {/* CATEGORY DROPDOWN MENU (HOVER & CLICK TRIGGERED) */}
            <div
              ref={categoryContainerRef}
              className="relative"
              onMouseEnter={handleCategoryHoverEnter}
              onMouseLeave={handleCategoryHoverLeave}
            >
              <button
                type="button"
                onClick={() => setCategoryDropdownOpen(prev => !prev)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs tracking-tight transition-all cursor-pointer ${
                  activeTab === 'category' || categoryDropdownOpen
                    ? 'bg-emerald-50 text-[#006C49] font-extrabold shadow-2xs ring-1 ring-emerald-200'
                    : 'text-slate-600 hover:text-slate-900 font-semibold hover:bg-slate-100/70'
                }`}
                aria-expanded={categoryDropdownOpen}
                aria-haspopup="true"
              >
                <span>Category</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    categoryDropdownOpen ? 'rotate-180 text-[#006C49]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* DROPDOWN FLYOUT DISPLAYING ALL PRODUCT CATEGORIES */}
              {categoryDropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseEnter={handleCategoryHoverEnter}
                  onMouseLeave={handleCategoryHoverLeave}
                >
                  <div className="w-[520px] sm:w-[580px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#006C49] animate-pulse" />
                        <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                          Product Category Pages
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        Dedicated Category Hubs
                      </span>
                    </div>

                    {/* Category List: 2 Columns */}
                    <div className="grid grid-cols-2 gap-2">
                      {PRODUCT_CATEGORIES.map((cat) => {
                        const isSelected = 
                          (cat.id === 'all' && activeTab === 'shop') || 
                          (selectedCategory === cat.id && activeTab === 'category');
                        const Icon = cat.icon;
                        return (
                          <div
                            key={cat.id}
                            onClick={() => handleCategorySelect(cat.id)}
                            className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all cursor-pointer border ${
                              isSelected
                                ? 'bg-emerald-50/70 border-emerald-300 shadow-2xs'
                                : 'bg-white hover:bg-slate-50 border-slate-100 hover:border-slate-200 hover:shadow-2xs'
                            }`}
                          >
                            <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-[#00271B] group-hover:text-white text-[#006C49] flex items-center justify-center shrink-0 transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="text-xs font-bold text-slate-900 group-hover:text-[#006C49] transition-colors leading-tight">
                                  {cat.label}
                                </span>
                                {cat.badge && (
                                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${cat.badgeColor}`}>
                                    {cat.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {cat.shortDesc}
                              </p>
                              <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 group-hover:text-[#006C49] mt-0.5 transition-colors">
                                <span>{cat.itemCount}</span>
                                <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Footer */}
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#006C49]" />
                        <span>All formulas lab-certified & food-prep safe</span>
                      </div>
                      <button
                        onClick={() => handleCategorySelect('all')}
                        className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-[#006C49] hover:text-[#00422e] font-black text-xs flex items-center gap-1.5 transition-colors cursor-pointer border border-emerald-200/60"
                      >
                        <Layers className="w-3.5 h-3.5 text-[#006C49]" />
                        <span>View All Products (Shop Page)</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Remaining Nav Tabs */}
            {[
              { id: 'combos', label: 'Combo Offers' },
              { id: 'blog', label: 'Blog' },
              { id: 'faq', label: 'FAQ' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleNavClick(tab.id as ViewTab)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs tracking-tight transition-all cursor-pointer ${
                    isActive
                      ? 'bg-sky-50 text-sky-800 font-extrabold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 font-semibold hover:bg-slate-100/70'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* RIGHT: SEARCH BAR, ACCOUNT & CART */}
          <div className="flex items-center gap-3 shrink-0">
            {/* SEARCH BAR (INTERACTIVE) */}
            <div className="relative w-48 sm:w-64 md:w-72 hidden md:block">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search pest solutions, concentrates..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchDropdown(true);
                  }}
                  onFocus={() => setShowSearchDropdown(true)}
                  className="w-full pl-8.5 pr-4 py-1.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 transition-all shadow-2xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Autocomplete Dropdown */}
              {showSearchDropdown && searchResults.length > 0 && (
                <div className="absolute top-full right-0 w-80 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                    Suggested Formulas ({searchResults.length})
                  </div>
                  <div className="space-y-1 max-h-72 overflow-y-auto">
                    {searchResults.map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => {
                          onSelectProduct(prod);
                          setShowSearchDropdown(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors"
                      >
                        <img
                          src={prod.featuredImage}
                          alt={prod.name}
                          className="w-9 h-9 object-cover rounded-lg bg-slate-100 border border-slate-200 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-slate-900 truncate">{prod.name}</p>
                          <p className="text-[10px] text-emerald-800 font-semibold truncate">{prod.bengaliSubtitle}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs font-black text-slate-900">৳{prod.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Account Icon */}
            <button
              onClick={onOpenAccount}
              aria-label="User Account"
              className="w-8 h-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <User className="w-4 h-4 text-white" />
            </button>

            {/* Cart Button with Cart text and pill count */}
            <button
              onClick={onOpenCart}
              id="global-cart-button"
              className="relative flex items-center gap-2 py-1.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg transition-all cursor-pointer font-bold text-xs shadow-2xs"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-slate-800" />
              <span>Cart</span>
              <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded-full bg-slate-900 text-white text-[10px] font-black min-w-[18px]">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2">
          {/* Mobile Search */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="Search pest formulas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs"
            />
          </div>

          {/* Home */}
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold ${
              activeTab === 'home'
                ? 'bg-emerald-50 text-[#006C49]'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Home
          </button>

          {/* Shop (All Products) */}
          <button
            onClick={() => handleNavClick('shop')}
            className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold ${
              activeTab === 'shop'
                ? 'bg-[#00271B] text-white'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Shop (All Products)
          </button>

          {/* Expandable Category Section */}
          <div className="rounded-xl border border-slate-200/80 overflow-hidden bg-slate-50/50">
            <button
              onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-left text-xs font-bold text-slate-800 hover:bg-slate-100/70"
            >
              <div className="flex items-center gap-2">
                <span>Category</span>
                <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  {PRODUCT_CATEGORIES.length} Categories
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                  mobileCategoryOpen ? 'rotate-180 text-[#006C49]' : ''
                }`}
              />
            </button>

            {mobileCategoryOpen && (
              <div className="bg-white px-2 py-2 space-y-1.5 border-t border-slate-200/80 animate-in slide-in-from-top-1">
                {PRODUCT_CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = 
                    (cat.id === 'all' && activeTab === 'shop') || 
                    (selectedCategory === cat.id && activeTab === 'category');
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all ${
                        isSelected
                          ? 'bg-emerald-50 text-[#006C49] font-black'
                          : 'hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-slate-100 text-[#006C49] flex items-center justify-center shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold truncate">
                            {cat.id === 'all' ? 'View All Products (Shop Page)' : cat.label}
                          </p>
                          <p className="text-[10px] text-slate-500 truncate">{cat.shortDesc}</p>
                        </div>
                      </div>
                      {cat.badge && (
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ml-2 ${cat.badgeColor}`}>
                          {cat.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Remaining Mobile Tabs */}
          {[
            { id: 'combos', label: 'Combo Offers' },
            { id: 'blog', label: 'Blog & Articles' },
            { id: 'faq', label: 'FAQ & Support' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleNavClick(tab.id as ViewTab)}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold ${
                activeTab === tab.id
                  ? 'bg-emerald-50 text-[#006C49]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <span className="font-bold">Helpline: 1-800-555-PEST</span>
            <button onClick={onOpenSupport} className="text-[#006C49] font-bold">
              Chat Safety Team
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
