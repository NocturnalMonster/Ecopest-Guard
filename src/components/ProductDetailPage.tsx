import React, { useState } from 'react';
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  Check, 
  ShoppingBag, 
  ArrowLeft, 
  Heart, 
  Share2, 
  Minus, 
  Plus, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  PhoneCall,
  Leaf,
  Layers,
  ChevronDown
} from 'lucide-react';
import { Product, ProductVariant } from '../types';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, variant: ProductVariant, quantity: number, appliedCoupon: boolean) => void;
  onBuyNow: (product: Product, variant: ProductVariant, quantity: number, appliedCoupon: boolean) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBack,
  onAddToCart,
  onBuyNow
}) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'ingredients' | 'how-to' | 'reviews'>('overview');
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  const currentVariant = product.variants[selectedVariantIndex] || product.variants[0];
  const images = product.galleryImages && product.galleryImages.length > 0 
    ? product.galleryImages 
    : [product.featuredImage];

  const handleAddToCart = () => {
    onAddToCart(product, currentVariant, quantity, false);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2200);
  };

  const handleBuyNow = () => {
    onBuyNow(product, currentVariant, quantity, false);
  };

  return (
    <div className="bg-[#F9F9FF] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP BACK BUTTON & BREADCRUMBS (Screenshot 7) */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
            <span>Home</span>
            <span>/</span>
            <span>{product.categoryLabel}</span>
            <span>/</span>
            <span className="font-bold text-slate-800 truncate max-w-xs">{product.name}</span>
          </div>
        </div>

        {/* MAIN PRODUCT DETAIL GRID */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT COLUMN: PRODUCT IMAGES (5 COLS) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Main Visual Frame */}
              <div className="relative aspect-square rounded-3xl bg-slate-50 border border-slate-100 p-6 flex items-center justify-center overflow-hidden group">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#00271B] text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </span>
                )}
                <img
                  src={images[selectedImageIndex] || product.featuredImage}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Thumbnails Gallery */}
              {images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`w-18 h-18 rounded-2xl p-2 bg-slate-50 border-2 transition-all shrink-0 cursor-pointer overflow-hidden ${
                        selectedImageIndex === idx
                          ? 'border-[#006C49] ring-2 ring-emerald-500/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}

              {/* Trust Callout */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-[#00271B]">
                <div className="flex items-center gap-2 font-black mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#006C49]" />
                  <span>100% Risk-Free Cash on Delivery</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  ডেলিভারি রাইডারের সামনে বোতলের সিকিউরিটি সিল এবং হলোগ্রাম চেক করে টাকা পরিশোধ করুন। কাজ না করলে ৩০ দিনের মানিব্যাক গ্যারান্টি।
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: BUY BOX & SPECS (7 COLS) */}
            <div className="lg:col-span-7 flex flex-col">
              
              <span className="text-[11px] font-black text-[#006C49] uppercase tracking-widest">
                {product.categoryLabel} • COD Ready
              </span>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Space_Grotesk',sans-serif] mt-1 leading-tight">
                {product.name}
              </h1>

              <p className="text-sm font-bold text-[#006C49] mt-1.5">
                {product.bengaliSubtitle}
              </p>

              {/* Rating & Sold count */}
              <div className="flex flex-wrap items-center gap-2.5 mt-3 pb-4 border-b border-slate-100 text-xs">
                <div className="flex items-center gap-1">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-black text-slate-900 ml-1">{product.rating}</span>
                </div>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600 font-semibold">{product.reviewCount.toLocaleString()} Verified Reviews</span>
                <span className="text-slate-300">|</span>
                <span className="text-[#006C49] font-bold">{product.soldCount}</span>
              </div>

              {/* Pricing Box */}
              <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-black text-[#00271B] font-['Space_Grotesk',sans-serif]">
                  ৳{currentVariant.price}
                </span>
                <span className="text-base sm:text-lg text-slate-400 line-through">
                  ৳{currentVariant.originalPrice}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#6CF8BB] text-[#002113] text-xs font-black uppercase">
                  Save {currentVariant.savingsPercent}%
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Bullet Features */}
              <div className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700">
                {product.bulletFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#006C49] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Package Variant Selection */}
              <div className="mt-6">
                <label className="text-xs font-black text-slate-900 block mb-2 uppercase tracking-wide">
                  Select Package Configuration:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {product.variants.map((variant, idx) => {
                    const isSel = selectedVariantIndex === idx;
                    return (
                      <div
                        key={variant.id}
                        onClick={() => setSelectedVariantIndex(idx)}
                        className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer ${
                          isSel
                            ? 'border-[#006C49] bg-white ring-2 ring-emerald-500/20 shadow-xs'
                            : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-extrabold text-slate-900">
                            {variant.name.split(' (')[0]}
                          </span>
                          {variant.popular && (
                            <span className="px-1.5 py-0.2 rounded bg-[#6CF8BB] text-[#002113] text-[9px] font-black uppercase">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500">{variant.volume}</p>
                        <div className="mt-2 flex items-baseline justify-between">
                          <span className="text-sm font-black text-[#00271B]">৳{variant.price}</span>
                          <span className="text-[11px] text-slate-400 line-through">৳{variant.originalPrice}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* In-Stock Dispatch Info */}
              <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                <span className="text-[#006C49] font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#006C49] animate-pulse" />
                  <span>{product.stockStatus}</span>
                </span>
                <span className="text-slate-600 font-semibold">{product.dispatchInfo}</span>
              </div>

              {/* Quantity Stepper & Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row items-stretch gap-3">
                {/* Stepper */}
                <div className="flex items-center justify-between bg-slate-100 rounded-xl px-3 py-1.5 w-full sm:w-32 border border-slate-200">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg bg-white text-slate-700 flex items-center justify-center font-bold cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-black text-slate-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-white text-slate-700 flex items-center justify-center font-bold cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-4 bg-[#321D00] hover:bg-[#4f3000] text-[#FFDDB8] font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{addedSuccess ? 'Added to Cart!' : 'Add to Cart'}</span>
                </button>

                {/* Buy Now (Cash on Delivery) */}
                <button
                  onClick={handleBuyNow}
                  className="flex-1 py-3.5 px-4 bg-[#006C49] hover:bg-[#005236] text-white font-black text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-900/20 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Truck className="w-4 h-4" />
                  <span>Order COD (Cash on Delivery)</span>
                </button>
              </div>

              {/* Bottom Reassurance */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#006C49]" /> 30-Day Money Back Guarantee
                </span>
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-4 h-4 text-[#006C49]" /> Hotline: 1-800-555-PEST
                </span>
              </div>

            </div>

          </div>

          {/* LOWER TABS (Overview / Protocol / Reviews) */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-3 text-xs sm:text-sm font-bold">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-2 transition-colors cursor-pointer ${
                  activeTab === 'overview'
                    ? 'text-[#006C49] border-b-2 border-[#006C49]'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Clinical Overview
              </button>
              <button
                onClick={() => setActiveTab('how-to')}
                className={`pb-2 transition-colors cursor-pointer ${
                  activeTab === 'how-to'
                    ? 'text-[#006C49] border-b-2 border-[#006C49]'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Application Protocol
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-2 transition-colors cursor-pointer ${
                  activeTab === 'reviews'
                    ? 'text-[#006C49] border-b-2 border-[#006C49]'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Verified Reviews ({product.reviewCount})
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <p>
                    UltraShield Bio-Defense formulations bypass the high-toxicity liabilities of synthetic organophosphates. Instead, our proprietary botanical matrix selectively targets the octopamine receptors found solely in the central nervous systems of insects. Because mammals lack octopamine receptors, the formulation possesses zero carcinogenic or neurological toxicity to humans, dogs, or cats.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <h5 className="font-extrabold text-slate-900 mb-1">Target Insects</h5>
                      <p className="text-xs text-slate-500">Cockroaches (German & American), Ants, Bedbugs, Termites, Dust Mites.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <h5 className="font-extrabold text-slate-900 mb-1">Surface Safety</h5>
                      <p className="text-xs text-slate-500">Non-staining on granite countertops, kitchen marble, tiles, sofa fabric and treated wood.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <h5 className="font-extrabold text-slate-900 mb-1">Curing Duration</h5>
                      <p className="text-xs text-slate-500">Dries completely within 15 minutes. Micro-encapsulated barrier remains active for 90 days.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'how-to' && (
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="w-8 h-8 rounded-xl bg-[#00271B] text-white flex items-center justify-center font-black shrink-0">1</span>
                    <div>
                      <h5 className="font-extrabold text-slate-900">Phase 1: Inspect & Clear Void Zones</h5>
                      <p className="text-xs text-slate-500 mt-1">Check sink plumbing connections and refrigerator motor zones. Clear food crumbs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="w-8 h-8 rounded-xl bg-[#00271B] text-white flex items-center justify-center font-black shrink-0">2</span>
                    <div>
                      <h5 className="font-extrabold text-slate-900">Phase 2: High-Velocity Stream Spray</h5>
                      <p className="text-xs text-slate-500 mt-1">Adjust nozzle to STREAM. Spray directly into baseboard joints and cabinet crevices.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="w-8 h-8 rounded-xl bg-[#00271B] text-white flex items-center justify-center font-black shrink-0">3</span>
                    <div>
                      <h5 className="font-extrabold text-slate-900">Phase 3: 48-Hour Curing Period</h5>
                      <p className="text-xs text-slate-500 mt-1">Allow botanical film to bind to grout and wood. Do not wash treated edges for 48 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">Kazi Tanvir • Dhaka (Gulshan)</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-[#00271B] text-[10px] font-bold">Verified Buyer</span>
                      </div>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-600">
                      "আগে লাল রঙের স্প্রে মারলে গন্ধের চোটে বাসায় থাকা যেত না। UltraShield স্প্রে করার পর কোনো বাজে গন্ধ নেই, আর ২ দিনের মধ্যে কিচেনের সব তেলাপোকা শেষ। Cash on Delivery-তে পেয়েছি।"
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">Farhana Sultana • Chittagong</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-[#00271B] text-[10px] font-bold">Verified Buyer</span>
                      </div>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-600">
                      "Family combo প্যাক নিয়েছিলাম। ডেলিভারিম্যান সামনে দাঁড়িয়ে সিল চেক করতে দিয়েছে। কাজের জিনিস!"
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
