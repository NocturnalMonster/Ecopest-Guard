import React, { useState } from 'react';
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
  ArrowRight
} from 'lucide-react';
import { ViewTab, Product } from '../types';
import { PRODUCTS } from '../data/mockData';

interface NavbarProps {
  activeTab: ViewTab;
  setActiveTab: (tab: ViewTab) => void;
  cartCount: number;
  onOpenCart: () => void;
  onSelectProduct: (product: Product) => void;
  onOpenAccount: () => void;
  onOpenSupport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  onSelectProduct,
  onOpenAccount,
  onOpenSupport
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            {[
              { id: 'home', label: 'Home' },
              { id: 'shop', label: 'Category' },
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

          {[
            { id: 'home', label: 'Home' },
            { id: 'shop', label: 'Products / Shop' },
            { id: 'combos', label: 'Combos & Bundles' },
            { id: 'blog', label: 'Guides & Articles' },
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
