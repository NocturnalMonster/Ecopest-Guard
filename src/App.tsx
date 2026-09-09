import React, { useState, useEffect } from 'react';
import { 
  ViewTab, 
  Product, 
  ProductVariant, 
  CartItem 
} from './types';
import { PRODUCTS } from './data/mockData';
import { Navbar } from './components/Navbar';
import { HeroComparison } from './components/HeroComparison';
import { AmazonBuyBox } from './components/AmazonBuyBox';
import { CatalogGrid } from './components/CatalogGrid';
import { ProductDetailPage } from './components/ProductDetailPage';
import { BlogHub } from './components/BlogHub';
import { FAQCenter } from './components/FAQCenter';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutView } from './components/CheckoutView';
import { LiveChatModal } from './components/LiveChatModal';
import { AccountModal } from './components/AccountModal';
import { Footer } from './components/Footer';
import { ShieldCheck, Truck, CheckCircle2, PhoneCall, ArrowRight, Package } from 'lucide-react';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<ViewTab>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);

  // Cart State (Initialized with 1 item for immediate demo convenience)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: `${PRODUCTS[0].id}-${PRODUCTS[0].variants[1].id}`,
      product: PRODUCTS[0],
      variant: PRODUCTS[0].variants[1],
      quantity: 1,
      appliedCoupon: false
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [appliedPromo, setAppliedPromo] = useState<string>('');
  const [promoDiscount, setPromoDiscount] = useState<number>(0);
  const [deliveryZone, setDeliveryZone] = useState<'dhaka' | 'outside'>('dhaka');

  // Modals
  const [isAccountOpen, setIsAccountOpen] = useState<boolean>(false);
  const [isLiveChatOpen, setIsLiveChatOpen] = useState<boolean>(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Calculations
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.variant.price * item.quantity, 0);
  const deliveryFee = subtotal > 1500 ? 0 : deliveryZone === 'dhaka' ? 60 : 100;
  const total = Math.max(0, subtotal + deliveryFee - promoDiscount);

  // Apply Coupon
  const handleApplyPromo = (code: string) => {
    if (!code) return;
    const clean = code.toUpperCase();
    if (clean === 'SHIELD100' || clean === 'ULTRA100') {
      setAppliedPromo(clean);
      setPromoDiscount(100);
    } else if (clean === 'ECO50') {
      setAppliedPromo(clean);
      setPromoDiscount(50);
    } else {
      alert('অকার্যকর কুপন কোড। অনুগ্রহ করে "SHIELD100" ট্রাই করুন।');
    }
  };

  // Add to cart
  const handleAddToCart = (
    product: Product, 
    variant: ProductVariant, 
    quantity: number, 
    appliedCoupon: boolean
  ) => {
    setCartItems(prev => {
      const itemId = `${product.id}-${variant.id}`;
      const existing = prev.find(item => item.id === itemId);

      if (existing) {
        return prev.map(item => 
          item.id === itemId 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prev, 
          {
            id: itemId,
            product,
            variant,
            quantity,
            appliedCoupon
          }
        ];
      }
    });

    setIsCartOpen(true);
  };

  // Direct Order Now (Bypasses drawer and opens checkout)
  const handleBuyNow = (
    product: Product, 
    variant: ProductVariant, 
    quantity: number, 
    appliedCoupon: boolean
  ) => {
    handleAddToCart(product, variant, quantity, appliedCoupon);
    setIsCartOpen(false);
    setActiveTab('checkout');
  };

  // Quick Add from Catalog
  const handleQuickAddToCart = (product: Product, variant: ProductVariant) => {
    handleAddToCart(product, variant, 1, false);
  };

  // Stepper update
  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item => item.id === itemId ? { ...item, quantity: newQty } : item)
    );
  };

  // Remove item
  const handleRemoveItem = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  // View PDP
  const handleOpenPDP = (product: Product) => {
    setSelectedProduct(product);
    setActiveTab('pdp');
  };

  // Scroll to featured box
  const handleScrollToFeatured = () => {
    const el = document.getElementById('featured-buy-box');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveTab('home');
      setTimeout(() => {
        const target = document.getElementById('featured-buy-box');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Order Confirmed Success
  const handleOrderSuccess = (orderId: string) => {
    setConfirmedOrderId(orderId);
    setCartItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9FF] text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Global Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectProduct={handleOpenPDP}
        onOpenAccount={() => setIsAccountOpen(true)}
        onOpenSupport={() => setIsLiveChatOpen(true)}
      />

      {/* Main Content View Container */}
      <main className="flex-1">

        {/* ORDER SUCCESS MODAL OVERLAY */}
        {confirmedOrderId && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-[#006C49] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-[#00271B] text-xs font-black uppercase">
                অর্ডার সফলভাবে গ্রহণ করা হয়েছে!
              </span>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-['Space_Grotesk',sans-serif]">
                ধন্যবাদ! আপনার ক্যাশ অন ডেলিভারি অর্ডার নিশ্চিত হয়েছে
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                আপনার অর্ডার আইডি: <strong className="text-[#00271B] font-mono">{confirmedOrderId}</strong>। আমাদের কাস্টমার কেয়ার টিম থেকে দ্রুততম সময়ে কল দিয়ে অর্ডারটি ভেরিফাই করা হবে।
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">পেমেন্ট মেথড:</span>
                  <span className="font-bold text-slate-900">ক্যাশ অন ডেলিভারি (COD)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">ডেলিভারি সময়:</span>
                  <span className="font-bold text-[#006C49]">১-২ কার্যদিবস (ঢাকা) / ২-৩ দিন (বাইরে)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">রাইডার ইনস্পেকশন:</span>
                  <span className="font-bold text-emerald-800">ওপেন-বক্স সিকিউরিটি সিল চেক এলাউড</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setConfirmedOrderId(null);
                    setActiveTab('home');
                  }}
                  className="flex-1 py-3 bg-[#00271B] hover:bg-[#00422e] text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  হোমে ফিরে যান
                </button>
                <button
                  onClick={() => {
                    setConfirmedOrderId(null);
                    setActiveTab('shop');
                  }}
                  className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  আরও পণ্য দেখুন
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* VIEW 1: HOME PAGE (Hero Comparison + Featured Buy Box + Catalog Grid) */}
        {activeTab === 'home' && (
          <div>
            <HeroComparison
              onShopClick={handleScrollToFeatured}
              onSelectProduct={handleOpenPDP}
              featuredProduct={PRODUCTS[0]}
            />

            <AmazonBuyBox
              product={PRODUCTS[0]}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
              onOpenPDP={handleOpenPDP}
            />

            <CatalogGrid
              onSelectProduct={handleOpenPDP}
              onQuickAddToCart={handleQuickAddToCart}
              onOrderCODDirect={(p, v) => handleBuyNow(p, v, 1, false)}
              onViewArticles={() => setActiveTab('blog')}
            />
          </div>
        )}

        {/* VIEW 2: PRODUCTS / SHOP */}
        {activeTab === 'shop' && (
          <CatalogGrid
            onSelectProduct={handleOpenPDP}
            onQuickAddToCart={handleQuickAddToCart}
            onOrderCODDirect={(p, v) => handleBuyNow(p, v, 1, false)}
            onViewArticles={() => setActiveTab('blog')}
          />
        )}

        {/* VIEW 3: COMBOS & BUNDLES */}
        {activeTab === 'combos' && (
          <div>
            <div className="bg-[#00271B] text-white py-12 px-4 text-center">
              <span className="bg-[#6CF8BB] text-[#002113] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                MAXIMUM VALUE BUNDLES
              </span>
              <h1 className="text-3xl sm:text-4xl font-black font-['Space_Grotesk',sans-serif] mt-3">
                Value Combos & Multi-Room Packs
              </h1>
              <p className="text-xs sm:text-sm text-emerald-200 mt-2 max-w-xl mx-auto">
                Save up to 30% with complete household sanitization and pest elimination bundles with Free Express Delivery nationwide.
              </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <AmazonBuyBox
                product={PRODUCTS[5]} // Complete Home Sanitation Trio
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
                onOpenPDP={handleOpenPDP}
              />

              <CatalogGrid
                onSelectProduct={handleOpenPDP}
                onQuickAddToCart={handleQuickAddToCart}
                onOrderCODDirect={(p, v) => handleBuyNow(p, v, 1, false)}
                onViewArticles={() => setActiveTab('blog')}
              />
            </div>
          </div>
        )}

        {/* VIEW 4: PRODUCT DETAIL PAGE (PDP) */}
        {activeTab === 'pdp' && (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => setActiveTab('shop')}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
        )}

        {/* VIEW 5: GUIDES & ARTICLES */}
        {activeTab === 'blog' && (
          <BlogHub
            onSelectProduct={handleOpenPDP}
            onBackToHome={() => setActiveTab('home')}
          />
        )}

        {/* VIEW 6: FAQ & SUPPORT */}
        {activeTab === 'faq' && (
          <FAQCenter
            onOpenLiveChat={() => setIsLiveChatOpen(true)}
            onShopClick={() => setActiveTab('shop')}
          />
        )}

        {/* VIEW 7: CHECKOUT VIEW */}
        {activeTab === 'checkout' && (
          <CheckoutView
            cartItems={cartItems}
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            total={total}
            onBackToShop={() => setActiveTab('shop')}
            onOrderSuccess={handleOrderSuccess}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            appliedPromo={appliedPromo}
            onApplyPromo={handleApplyPromo}
            promoDiscount={promoDiscount}
            onUpdateDeliveryZone={setDeliveryZone}
          />
        )}

      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={(tab) => setActiveTab(tab)}
        onOpenChat={() => setIsLiveChatOpen(true)}
      />

      {/* Slide-Over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => setActiveTab('checkout')}
        appliedPromo={appliedPromo}
        onApplyPromo={handleApplyPromo}
        promoDiscount={promoDiscount}
      />

      {/* Account Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        onViewOrder={() => {
          setIsAccountOpen(false);
          setActiveTab('checkout');
        }}
      />

      {/* Live Safety Support Desk */}
      <LiveChatModal
        isOpen={isLiveChatOpen}
        onClose={() => setIsLiveChatOpen(false)}
      />

    </div>
  );
}
