import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  ArrowRight, 
  Trash2, 
  Plus, 
  Minus, 
  ShieldCheck, 
  Truck, 
  Tag, 
  CheckCircle2 
} from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
  appliedPromo: string;
  onApplyPromo: (code: string) => void;
  promoDiscount: number;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  appliedPromo,
  onApplyPromo,
  promoDiscount
}) => {
  const [promoInput, setPromoInput] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.variant.price * item.quantity, 0);
  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const deliveryEstimate = subtotal > 1500 ? 0 : 60; // Free delivery above 1500
  const finalTotal = Math.max(0, subtotal + deliveryEstimate - promoDiscount);

  const freeDeliveryThreshold = 1500;
  const progressPercent = Math.min(100, Math.round((subtotal / freeDeliveryThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* DRAWER HEADER (Screenshot 3) */}
          <div className="p-5 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#006C49]" />
              <h2 className="text-base font-black text-slate-900 font-['Space_Grotesk',sans-serif]">
                Your Cart ({totalItemsCount})
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* FREE DELIVERY PROGRESS BAR */}
          <div className="px-5 py-3 bg-emerald-50/80 border-b border-emerald-100 text-xs text-[#00271B]">
            <div className="flex justify-between items-center font-bold mb-1.5 text-[11px]">
              {subtotal >= freeDeliveryThreshold ? (
                <span className="text-[#006C49] flex items-center gap-1 font-black">
                  <CheckCircle2 className="w-3.5 h-3.5" /> FREE METRO DELIVERY UNLOCKED!
                </span>
              ) : (
                <span>Add ৳{freeDeliveryThreshold - subtotal} more for FREE Dhaka Delivery</span>
              )}
              <span className="font-extrabold">{progressPercent}%</span>
            </div>
            <div className="w-full bg-emerald-200/60 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-[#006C49] h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* CART ITEMS LIST */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-sm font-bold text-slate-800">Your cart is currently empty</p>
                <p className="text-xs text-slate-400 mt-1">Explore our bio-pest formulas to start shopping.</p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 bg-[#006C49] text-white text-xs font-bold rounded-xl"
                >
                  Browse Formulas
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.id}
                  className="flex gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80"
                >
                  <img
                    src={item.product.featuredImage}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-contain bg-white border border-slate-200 p-1 shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xs font-black text-slate-900 line-clamp-1">
                        {item.product.name.split(' (')[0]}
                      </h3>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-slate-400 hover:text-rose-500 p-1 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-500 mt-0.5">{item.variant.name}</p>

                    <div className="mt-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-2 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="text-slate-500 hover:text-slate-800 p-0.5"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-slate-900 px-1">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="text-slate-500 hover:text-slate-800 p-0.5"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-black text-[#00271B]">
                        ৳{item.variant.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* DRAWER FOOTER: COUPON, TOTAL & CHECKOUT BUTTON */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-slate-200 bg-white space-y-4">
              
              {/* Promo input */}
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Coupon code (e.g. SHIELD100)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-300 rounded-xl text-xs"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onApplyPromo(promoInput.trim());
                    setPromoInput('');
                  }}
                  className="px-3 py-1.5 bg-slate-800 text-white font-bold text-xs rounded-xl hover:bg-slate-900 cursor-pointer"
                >
                  Apply
                </button>
              </div>

              {appliedPromo && (
                <p className="text-[11px] text-emerald-800 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Coupon "{appliedPromo}" applied (-৳{promoDiscount})
                </p>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-bold text-slate-900">৳{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery (Estimated Dhaka):</span>
                  <span className="font-bold text-slate-900">{deliveryEstimate === 0 ? 'FREE' : `৳${deliveryEstimate}`}</span>
                </div>
                {promoDiscount > 0 && (
                  <div className="flex justify-between text-[#006C49] font-bold">
                    <span>Discount:</span>
                    <span>-৳{promoDiscount}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline">
                  <span className="text-sm font-black text-slate-900">Total:</span>
                  <span className="text-xl font-black text-[#00271B] font-['Space_Grotesk',sans-serif]">
                    ৳{finalTotal}
                  </span>
                </div>
              </div>

              {/* Action Button: Proceed to COD */}
              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="w-full py-3.5 bg-[#006C49] hover:bg-[#005236] text-white font-black text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Truck className="w-4 h-4" />
                <span>Proceed to Cash on Delivery (৳{finalTotal})</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-[10px] text-slate-500 font-semibold">
                <span>🛡️ 30-Day Money Back</span>
                <span>•</span>
                <span>📦 Open-Box Delivery</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
