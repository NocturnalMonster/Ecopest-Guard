import React, { useState } from 'react';
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  Check, 
  ShoppingBag, 
  Sparkles, 
  Zap, 
  Flame, 
  Heart, 
  ArrowRight,
  Clock,
  HelpCircle,
  Percent,
  CheckCircle2,
  Lock,
  Leaf,
  Plus,
  Minus
} from 'lucide-react';
import { Product, ProductVariant } from '../types';

interface AmazonBuyBoxProps {
  product: Product;
  onAddToCart: (product: Product, variant: ProductVariant, quantity: number, appliedCoupon: boolean) => void;
  onBuyNow: (product: Product, variant: ProductVariant, quantity: number, appliedCoupon: boolean) => void;
  onOpenPDP: (product: Product) => void;
}

export const AmazonBuyBox: React.FC<AmazonBuyBoxProps> = ({
  product,
  onAddToCart,
  onBuyNow,
  onOpenPDP
}) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(1); // Default to Family Combo (index 1)
  const [quantity, setQuantity] = useState<number>(1);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const [addedToast, setAddedToast] = useState<boolean>(false);

  const currentVariant = product.variants[selectedVariantIndex] || product.variants[0];

  const handleAddToCartClick = () => {
    onAddToCart(product, currentVariant, quantity, false);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2200);
  };

  const handleBuyNowClick = () => {
    onBuyNow(product, currentVariant, quantity, false);
  };

  return (
    <section className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-[#F9F9FF]" id="featured-buy-box">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION PRE-HEADER (Exact match to screenshot 4) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-md bg-[#FFDDB8] text-[#2A1700] text-[11px] font-black uppercase tracking-wider flex items-center gap-1">
              <span>HOT DEAL 🔥</span> 28% DISCOUNT - LIMITED STOCK
            </span>
            <span className="text-slate-500 text-xs font-bold hidden sm:inline">
              BESTSELLER #1 IN ECO PEST CONTROL
            </span>
          </div>

          <div className="text-slate-500 text-xs font-semibold flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-[#006C49]" />
            <span>Home Delivery All Over Bangladesh • Cash on Delivery</span>
          </div>
        </div>

        {/* MAIN AMAZON BUY-RAIL CONTAINER */}
        <div className="bg-white rounded-3xl shadow-md border border-slate-200/90 p-5 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: PRODUCT VISUAL & GALLERY SELECTOR (5 COLS) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative bg-slate-50 rounded-2xl p-6 flex items-center justify-center aspect-square overflow-hidden border border-slate-100 group">
                
                {/* Best Seller Ribbon */}
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#00271B] text-white text-[11px] uppercase tracking-wider font-extrabold shadow-sm">
                  #1 Best Seller
                </span>

                {/* Wishlist Button */}
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  aria-label="Add to Wishlist"
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-slate-600 flex items-center justify-center hover:text-rose-600 transition-colors shadow-xs cursor-pointer"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                </button>

                {/* Main Hero Bottle Shot */}
                <img
                  src={product.featuredImage}
                  alt={product.name}
                  onClick={() => onOpenPDP(product)}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
              </div>

              {/* Product Variant Selector Pills - Desktop & Tablet */}
              <div className="hidden sm:flex items-center gap-2 justify-between">
                {product.variants.map((v, idx) => {
                  const isSelected = selectedVariantIndex === idx;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariantIndex(idx)}
                      type="button"
                      className={`flex-1 py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0F3E2E] text-white shadow-md shadow-[#0F3E2E]/20'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {v.name.split(' (')[0]}
                    </button>
                  );
                })}
              </div>

              {/* Yield Formula Proof Callout */}
              <div className="hidden sm:flex rounded-2xl p-4 bg-emerald-50 border border-emerald-200 items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#006C49] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <p className="text-xs text-[#00271B] leading-relaxed">
                  <strong>১০০% ভেষজ ফর্মুলেশন:</strong> কোনো বিষাক্ত গন্ধ নেই, ঘরোয়া ব্যবহার ও শিশু-পোষা প্রাণীর জন্য সম্পূর্ণ নিরাপদ। কাজ না করলে মানিব্যাক গ্যারান্টি।
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: BUY-RAIL SPEC, PRICING, COD ADD-TO-CART (7 COLS) */}
            <div className="lg:col-span-7 flex flex-col">
              
              {/* ========================================================================= */}
              {/* 1. MOBILE-ONLY STREAMLINED LAYOUT: NAME -> COMBOS -> LIVE PRICE -> BUY CTA */}
              {/* ========================================================================= */}
              <div className="block sm:hidden space-y-3.5">
                {/* Product Name only */}
                <div>
                  <span className="text-[10px] font-black text-[#006C49] uppercase tracking-widest">
                    Botanical Fast-Action Bio Formula
                  </span>
                  <h2 
                    onClick={() => onOpenPDP(product)}
                    className="text-lg font-black text-slate-900 leading-tight font-['Space_Grotesk',sans-serif] hover:text-[#006C49] cursor-pointer"
                  >
                    {product.name}
                  </h2>
                  <p className="text-[11px] font-bold text-[#006C49] mt-0.5">
                    {product.bengaliSubtitle}
                  </p>
                </div>

                {/* Combos immediately visible: Single Pack, Family Combo, Triple Shield */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                      Choose Your Pack:
                    </span>
                    <span className="text-[11px] text-[#006C49] font-bold">
                      {currentVariant.name.split(' (')[0]}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {product.variants.map((variant, idx) => {
                      const isSelected = selectedVariantIndex === idx;
                      return (
                        <button
                          key={variant.id}
                          type="button"
                          onClick={() => setSelectedVariantIndex(idx)}
                          className={`p-2 rounded-xl flex flex-col justify-between text-left transition-all cursor-pointer border-2 relative ${
                            isSelected
                              ? 'bg-white border-[#006C49] shadow-md ring-2 ring-[#006C49]/20'
                              : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {variant.popular && (
                            <span className="absolute -top-2 left-1.5 px-1.5 py-0.2 rounded bg-[#006C49] text-white text-[8px] font-black uppercase shadow-xs">
                              Popular
                            </span>
                          )}
                          <div>
                            <span className={`text-[11px] font-bold block leading-tight ${isSelected ? 'text-[#00271B]' : 'text-slate-800'}`}>
                              {variant.name.split(' (')[0]}
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
                              {variant.volume.split(' (')[0]}
                            </span>
                          </div>

                          <div className="mt-2 pt-1 border-t border-slate-100 flex flex-col">
                            <span className="text-xs font-extrabold text-[#00271B]">
                              ৳{variant.price}
                            </span>
                            <span className="text-[9px] font-black text-[#006C49]">
                              Save {variant.savingsPercent}%
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Live Dynamic Price Banner right beneath the combo selector */}
                <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-[#00271B] font-['Space_Grotesk',sans-serif]">
                      ৳{currentVariant.price}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      ৳{currentVariant.originalPrice}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-[#006C49] text-white text-[11px] font-black uppercase tracking-wider">
                    Save {currentVariant.savingsPercent}% OFF
                  </span>
                </div>

                {/* Action Buttons: Qty Stepper, Add to Cart & Cash on Delivery */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {/* Qty Stepper */}
                    <div className="flex items-center justify-between bg-slate-100 rounded-xl px-2 py-1.5 w-28 border border-slate-200 shrink-0">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-7 h-7 rounded-lg bg-white text-slate-700 flex items-center justify-center font-black cursor-pointer shadow-2xs"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-black text-slate-900">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-7 h-7 rounded-lg bg-white text-slate-700 flex items-center justify-center font-black cursor-pointer shadow-2xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={handleAddToCartClick}
                      className="flex-1 py-3 px-3 bg-[#321D00] hover:bg-[#4f3000] text-[#FFDDB8] font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{addedToast ? 'Added to Cart!' : 'Add to Cart'}</span>
                    </button>
                  </div>

                  {/* Cash on Delivery Order Button */}
                  <button
                    onClick={handleBuyNowClick}
                    className="w-full py-3.5 px-4 bg-[#006C49] hover:bg-[#005236] text-white font-black text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-900/20 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Truck className="w-4 h-4" />
                    <span>Order Now (Cash on Delivery)</span>
                  </button>
                </div>

                {/* Dispatch & Delivery Note */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5 text-[#006C49] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#006C49] animate-pulse" />
                    <span>In Stock • Ready for Dispatch</span>
                  </div>
                  <span className="text-slate-600 font-medium">Dhaka ৳৬০ | Outside ৳১২০</span>
                </div>

                {/* Collapsible Product Description (Placed BELOW buttons on mobile so it doesn't push down the combos) */}
                <div className="pt-2 border-t border-slate-100">
                  <details className="group">
                    <summary className="flex items-center justify-between text-xs font-bold text-slate-700 cursor-pointer py-1.5 list-none">
                      <span>View Full Bio-Formula Features</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs">▼</span>
                    </summary>
                    <div className="mt-2 space-y-2 text-xs text-slate-600 pl-1">
                      <div className="flex items-start gap-2">
                        <Zap className="w-3.5 h-3.5 text-[#006C49] shrink-0 mt-0.5" />
                        <p><strong>100% Lethal Action:</strong> Neutralizes cockroaches, ants, bedbugs & termites within 48 hours on contact.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Leaf className="w-3.5 h-3.5 text-[#006C49] shrink-0 mt-0.5" />
                        <p><strong>Odorless & Plant-Based:</strong> Completely safe for kids, pets & food prep areas once applied.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#006C49] shrink-0 mt-0.5" />
                        <p><strong>Long-Lasting 90-Day Defense:</strong> Stops re-infestation and egg colony hatching.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Truck className="w-3.5 h-3.5 text-[#006C49] shrink-0 mt-0.5" />
                        <p><strong>Money-Back Guarantee:</strong> কাজ না করলে ১০০% টাকা ফেরত।</p>
                      </div>
                    </div>
                  </details>
                </div>
              </div>

              {/* ========================================================================= */}
              {/* 2. PC & TABLET VIEW: FULL ORIGINAL LAYOUT (UNTOUCHED & UNMODIFIED) */}
              {/* ========================================================================= */}
              <div className="hidden sm:flex sm:flex-col">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-black text-[#006C49] uppercase tracking-widest">
                    Botanical Fast-Action Bio Formula
                  </span>
                  <h2 
                    onClick={() => onOpenPDP(product)}
                    className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 leading-tight font-['Space_Grotesk',sans-serif] hover:text-[#006C49] cursor-pointer transition-colors"
                  >
                    {product.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-bold text-[#006C49]">
                    {product.bengaliSubtitle}
                  </p>
                </div>

                {/* Ratings & Nationwide Sold Count */}
                <div className="mt-3 flex flex-wrap items-center gap-2 pb-3 border-b border-slate-100 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="font-black text-slate-900 text-sm ml-1">4.9</span>
                  </div>
                  <span className="text-slate-300">|</span>
                  <span className="text-[#006C49] font-bold">98% Customer Satisfaction</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-slate-600 font-bold">{product.soldCount}</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-[#00271B] font-extrabold text-[11px]">
                    Top Rated Pest Solution
                  </span>
                </div>

                {/* Deal Pricing Row */}
                <div className="mt-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex flex-wrap items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-black text-[#00271B] font-['Space_Grotesk',sans-serif]">
                    ৳{currentVariant.price}
                  </span>
                  <span className="text-sm sm:text-base text-slate-400 line-through">
                    ৳{currentVariant.originalPrice}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#6CF8BB] text-[#002113] text-xs font-black uppercase">
                    Save {currentVariant.savingsPercent}%
                  </span>
                  {currentVariant.popular && (
                    <span className="text-xs text-[#006C49] font-bold ml-auto">
                      ★ Most Popular Family Combo
                    </span>
                  )}
                </div>

                {/* 5 Distinct Feature Bullet Points with Icons */}
                <div className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Zap className="w-4 h-4 text-[#006C49] shrink-0 mt-0.5" />
                    <p><strong>100% Lethal Action:</strong> Neutralizes cockroaches, ants, bedbugs & termites within 48 hours on contact.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Leaf className="w-4 h-4 text-[#006C49] shrink-0 mt-0.5" />
                    <p><strong>Odorless & Plant-Based:</strong> No pungent chemical fumes; completely safe for kids, pets & food prep areas once applied.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#006C49] shrink-0 mt-0.5" />
                    <p><strong>Ready-to-Spray & Easy to Use:</strong> Ergonomic trigger spray bottle, no messy mixing or dilution needed.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#006C49] shrink-0 mt-0.5" />
                    <p><strong>Long-Lasting Barrier Protection:</strong> Prevents insect re-infestation and egg colony hatching for up to 90 days.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Truck className="w-4 h-4 text-[#006C49] shrink-0 mt-0.5" />
                    <p><strong>Cash on Delivery & Guarantee:</strong> Nationwide COD across Bangladesh with 100% Money-Back Guarantee ("কাজ না করলে টাকা ফেরত").</p>
                  </div>
                </div>

                {/* In Stock & Metro Delivery Rates */}
                <div className="mt-4 p-2.5 px-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#006C49] font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#006C49] animate-pulse" />
                    <span>In Stock • Ready for Same-Day Dispatch</span>
                  </div>
                  <span className="text-slate-600 font-medium">
                    Home Delivery: Dhaka ৳৬০ | Outside Dhaka ৳১২০
                  </span>
                </div>

                {/* Package Choice Radio Selection Cards (Exact design from Screenshot 4) */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {product.variants.map((variant, idx) => {
                    const isSelected = selectedVariantIndex === idx;
                    return (
                      <label
                        key={variant.id}
                        onClick={() => setSelectedVariantIndex(idx)}
                        className={`cursor-pointer p-3.5 rounded-2xl flex flex-col justify-between transition-all border-2 ${
                          isSelected
                            ? 'bg-white border-[#006C49] shadow-md ring-2 ring-[#006C49]/20'
                            : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className={`text-xs font-bold ${isSelected ? 'text-[#00271B]' : 'text-slate-800'}`}>
                              {variant.name.split(' (')[0]}
                            </span>
                            {variant.popular && (
                              <span className="px-1.5 py-0.2 rounded bg-[#6CF8BB] text-[#002113] text-[9px] font-black uppercase">
                                Popular
                              </span>
                            )}
                          </div>
                          <input
                            type="radio"
                            name="buybox-package-choice"
                            checked={isSelected}
                            onChange={() => setSelectedVariantIndex(idx)}
                            className="accent-[#006C49]"
                          />
                        </div>

                        <p className="text-[11px] text-slate-500 mt-1 font-medium">{variant.volume}</p>

                        <div className="mt-2 flex items-baseline justify-between">
                          <span className="text-sm font-extrabold text-[#00271B]">
                            ৳{variant.price}
                          </span>
                          <span className="text-[11px] text-slate-400 line-through">
                            ৳{variant.originalPrice}
                          </span>
                        </div>

                        <span className="text-[10px] font-black text-[#006C49] mt-1">
                          {variant.popular ? '28% OFF • Best Value' : `Save ${variant.savingsPercent}%`}
                        </span>
                      </label>
                    );
                  })}
                </div>

                {/* Action Buttons: Qty Stepper, Add to Cart & Order Now (Cash on Delivery) */}
                <div className="mt-5 flex flex-col sm:flex-row items-stretch gap-3">
                  
                  {/* Qty Stepper */}
                  <div className="flex items-center justify-between bg-slate-100 rounded-xl px-2 py-1 w-full sm:w-32 border border-slate-200">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg bg-white text-slate-700 hover:bg-slate-50 flex items-center justify-center font-black cursor-pointer shadow-2xs"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-black text-slate-900">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-white text-slate-700 hover:bg-slate-50 flex items-center justify-center font-black cursor-pointer shadow-2xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={handleAddToCartClick}
                    className="flex-1 py-3 px-4 bg-[#321D00] hover:bg-[#4f3000] text-[#FFDDB8] font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{addedToast ? 'Added to Cart!' : 'Add to Cart'}</span>
                  </button>

                  {/* Order Now (Cash on Delivery) */}
                  <button
                    onClick={handleBuyNowClick}
                    className="flex-1 py-3 px-4 bg-[#006C49] hover:bg-[#005236] text-white font-black text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-900/20 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Truck className="w-4 h-4" />
                    <span>Order Now (Cash on Delivery)</span>
                  </button>

                </div>

                {/* Bottom Reassurance Row (Screenshot 4) */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#006C49]" />
                    <span>Home Delivery: Dhaka ৳৬০, Outside ৳১২০ (Pay after delivery)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#006C49]" />
                    <span>কাজ না করলে টাকা ফেরত (Money-Back)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5 text-[#006C49]" />
                    <span>১০০% নিরাপদ ও ভেষজ উপাদান</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
