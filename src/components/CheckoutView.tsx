import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Check, 
  ArrowLeft, 
  Lock, 
  CreditCard, 
  PhoneCall, 
  HelpCircle,
  Clock,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  Trash2,
  Tag
} from 'lucide-react';
import { CartItem, CheckoutFormData } from '../types';

interface CheckoutViewProps {
  cartItems: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  onBackToShop: () => void;
  onOrderSuccess: (orderId: string) => void;
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  appliedPromo: string;
  onApplyPromo: (code: string) => void;
  promoDiscount: number;
  onUpdateDeliveryZone: (zone: 'dhaka' | 'outside') => void;
}

export const CheckoutView: React.FC<CheckoutViewProps> = ({
  cartItems,
  subtotal,
  deliveryFee,
  total,
  onBackToShop,
  onOrderSuccess,
  onUpdateQuantity,
  onRemoveItem,
  appliedPromo,
  onApplyPromo,
  promoDiscount,
  onUpdateDeliveryZone
}) => {
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    phone: '',
    address: '',
    city: 'Dhaka',
    zone: 'dhaka',
    deliveryInstructions: '',
    paymentMethod: 'cod',
    mfsProvider: 'bkash'
  });

  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleZoneChange = (zone: 'dhaka' | 'outside') => {
    setFormData(prev => ({ ...prev, zone }));
    onUpdateDeliveryZone(zone);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'আপনার সম্পূর্ণ নাম লিখুন';
    }
    if (!formData.phone.trim()) {
      errs.phone = '১১ ডিজিটের মোবাইল নম্বর দিন';
    } else if (!/^01[3-9]\d{8}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'সঠিক বাংলাদেশি মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)';
    }
    if (!formData.address.trim()) {
      errs.address = 'ডেলিভারির সম্পূর্ণ ঠিকানা লিখুন (রোড, বাড়ি, থানা/জেলা)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedOrderId = 'US-BD-' + Math.floor(100000 + Math.random() * 900000);
      onOrderSuccess(generatedOrderId);
    }, 1200);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#F9F9FF] py-16 px-4">
        <div className="max-w-md mx-auto text-center bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h2 className="text-xl font-black text-slate-900 font-['Space_Grotesk',sans-serif]">
            আপনার কার্ট বর্তমানে খালি
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            অর্ডার সম্পন্ন করার জন্য অনুগ্রহ করে পছন্দের পণ্য কার্টে যোগ করুন।
          </p>
          <button
            onClick={onBackToShop}
            className="mt-6 w-full py-3 bg-[#006C49] text-white font-bold text-xs rounded-xl hover:bg-[#005439] transition-colors cursor-pointer"
          >
            পণ্য দেখতে ফিরে যান
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F9FF] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP BREADCRUMBS (Screenshot 2 & 3) */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            onClick={onBackToShop}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Shopping</span>
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#006C49] text-xs font-bold border border-emerald-200">
            <Lock className="w-3.5 h-3.5" />
            <span>256-Bit Encrypted Secure Checkout</span>
          </div>
        </div>

        {/* HEADER */}
        <div className="mb-8">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#006C49]">
            EXPRESS BANGLADESH DISPATCH
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Space_Grotesk',sans-serif] tracking-tight mt-0.5">
            100% Risk-Free Cash On Delivery (COD) Checkout
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            কোনো অগ্রিম পেমেন্টের প্রয়োজন নেই। ডেলিভারি রাইডারের সামনে বোতলের সিকিউরিটি সিল চেক করে টাকা প্রদান করুন।
          </p>
        </div>

        {/* 2-COLUMN CHECKOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: CUSTOMER & DELIVERY FORM (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Card 1: Delivery Details */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-5">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#006C49] flex items-center justify-center font-black text-xs">
                    1
                  </div>
                  <h2 className="text-base font-black text-slate-900 font-['Space_Grotesk',sans-serif]">
                    ডেলিভারি ঠিকানা ও তথ্য (Delivery Details)
                  </h2>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    আপনার সম্পূর্ণ নাম (Full Name) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="যেমন: মোঃ সাকিব হাসান"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#006C49] ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-500 font-semibold mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    সচল মোবাইল নম্বর (Phone Number) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                      +88
                    </span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="017XXXXXXXX"
                      className={`w-full pl-12 pr-3.5 py-2.5 rounded-xl border text-xs bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#006C49] ${
                        errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.phone ? (
                    <p className="text-[11px] text-rose-500 font-semibold mt-1">{errors.phone}</p>
                  ) : (
                    <p className="text-[10px] text-slate-400 mt-1">রাইডার ডেলিভারির পূর্বে এই নম্বরে কল করবে।</p>
                  )}
                </div>

                {/* Delivery Zone Radio Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    ডেলিভারি এলাকা নির্বাচন করুন (Delivery Zone) <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      onClick={() => handleZoneChange('dhaka')}
                      className={`p-3.5 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                        formData.zone === 'dhaka'
                          ? 'border-[#006C49] bg-emerald-50/40 ring-1 ring-emerald-500/20'
                          : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          name="delivery-zone"
                          checked={formData.zone === 'dhaka'}
                          onChange={() => handleZoneChange('dhaka')}
                          className="accent-[#006C49]"
                        />
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">ঢাকার ভেতরে (Inside Dhaka)</span>
                          <span className="text-[10px] text-slate-500">১-২ কার্যদিবস • চার্জ ৳৬০</span>
                        </div>
                      </div>
                      <span className="text-xs font-black text-[#00271B]">৳৬০</span>
                    </label>

                    <label
                      onClick={() => handleZoneChange('outside')}
                      className={`p-3.5 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                        formData.zone === 'outside'
                          ? 'border-[#006C49] bg-emerald-50/40 ring-1 ring-emerald-500/20'
                          : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          name="delivery-zone"
                          checked={formData.zone === 'outside'}
                          onChange={() => handleZoneChange('outside')}
                          className="accent-[#006C49]"
                        />
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">ঢাকার বাইরে (All Bangladesh)</span>
                          <span className="text-[10px] text-slate-500">২-৩ কার্যদিবস • চার্জ ৳১০০</span>
                        </div>
                      </div>
                      <span className="text-xs font-black text-[#00271B]">৳১০০</span>
                    </label>
                  </div>
                </div>

                {/* Full Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    সম্পূর্ণ ঠিকানা (Full Delivery Address) <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={2}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="বাসা/হোল্ডিং নম্বর, রোড/রাস্তা, এলাকা, থানা এবং জেলা"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#006C49] ${
                      errors.address ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.address && (
                    <p className="text-[11px] text-rose-500 font-semibold mt-1">{errors.address}</p>
                  )}
                </div>

                {/* Instructions */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    ডেলিভারি নোট / বিশেষ নির্দেশনা (ঐচ্ছিক)
                  </label>
                  <input
                    type="text"
                    value={formData.deliveryInstructions}
                    onChange={(e) => setFormData({ ...formData, deliveryInstructions: e.target.value })}
                    placeholder="যেমন: বিকেলে ডেলিভারি দিলে ভালো হয়"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-slate-50 focus:bg-white"
                  />
                </div>

              </div>

              {/* Card 2: Payment Method */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#006C49] flex items-center justify-center font-black text-xs">
                    2
                  </div>
                  <h2 className="text-base font-black text-slate-900 font-['Space_Grotesk',sans-serif]">
                    পেমেন্ট পদ্ধতি (Payment Method)
                  </h2>
                </div>

                {/* COD Option (Recommended) */}
                <label
                  onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                  className={`p-4 rounded-2xl border-2 flex items-start justify-between cursor-pointer transition-all ${
                    formData.paymentMethod === 'cod'
                      ? 'border-[#006C49] bg-emerald-50/50 ring-1 ring-emerald-500/20'
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="payment-method"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className="accent-[#006C49] mt-0.5"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-slate-900">ক্যাশ অন ডেলিভারি (Cash on Delivery)</span>
                        <span className="px-2 py-0.5 rounded bg-[#6CF8BB] text-[#002113] text-[9px] font-black uppercase">
                          RECOMMENDED
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1">
                        পণ্য হাতে পেয়ে দেখে ও সিকিউরিটি সিল চেক করে মূল্য পরিশোধ করুন। অগ্রিম কোনো টাকা দিতে হবে না।
                      </p>
                    </div>
                  </div>
                  <Truck className="w-5 h-5 text-[#006C49] shrink-0" />
                </label>

                {/* MFS Option (bKash / Nagad) */}
                <label
                  onClick={() => setFormData({ ...formData, paymentMethod: 'mfs' })}
                  className={`p-4 rounded-2xl border-2 flex items-start justify-between cursor-pointer transition-all ${
                    formData.paymentMethod === 'mfs'
                      ? 'border-[#006C49] bg-emerald-50/50 ring-1 ring-emerald-500/20'
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="payment-method"
                      checked={formData.paymentMethod === 'mfs'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'mfs' })}
                      className="accent-[#006C49] mt-0.5"
                    />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">bKash / Nagad / Rocket Payment</span>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        ডেলিভারি রাইডারের পার্সোনাল বিকাশ/নগদ নাম্বারে বা অনলাইন পেমেন্ট করুন।
                      </p>
                    </div>
                  </div>
                  <CreditCard className="w-5 h-5 text-slate-400 shrink-0" />
                </label>

              </div>

              {/* Submit Button on Mobile */}
              <div className="lg:hidden">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#006C49] hover:bg-[#005236] text-white font-black text-sm rounded-2xl shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Truck className="w-5 h-5" />
                  <span>{isSubmitting ? 'অর্ডার প্রসেস হচ্ছে...' : `অর্ডার নিশ্চিত করুন (৳${total})`}</span>
                </button>
              </div>

            </form>

            {/* Guaranteed Protection Box */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#006C49] shrink-0" />
              <div className="text-xs text-[#00271B]">
                <strong className="block font-black mb-0.5">কাজ না করলে ১০০% মানিব্যাক গ্যারান্টি:</strong>
                নিয়ম অনুযায়ী ব্যবহার করার পরও কীটপতঙ্গ নির্মূল না হলে ৩০ দিনের মধ্যে কোনো প্রশ্ন ছাড়াই সরাসরি বিকাশ বা নগদে পুরো টাকা ফেরত দেওয়া হবে।
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: ORDER SUMMARY (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-sm font-black text-slate-900 font-['Space_Grotesk',sans-serif]">
                  অর্ডার সামারি (Order Summary)
                </h3>
                <span className="text-xs font-bold text-[#006C49] bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)} Items
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <img
                      src={item.product.featuredImage}
                      alt={item.product.name}
                      className="w-12 h-12 rounded-lg object-contain bg-white border border-slate-200 p-1 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 truncate">
                        {item.product.name.split(' (')[0]}
                      </h4>
                      <p className="text-[10px] text-slate-500 font-medium">
                        {item.variant.name} • Qty: {item.quantity}
                      </p>
                      <span className="text-xs font-black text-[#00271B]">
                        ৳{item.variant.price * item.quantity}
                      </span>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Promo Code Input */}
              <div className="pt-3 border-t border-slate-100">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="কুপন কোড (যেমন: SHIELD100)"
                      value={promoCodeInput}
                      onChange={(e) => setPromoCodeInput(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      onApplyPromo(promoCodeInput.trim());
                      setPromoCodeInput('');
                    }}
                    className="px-3.5 py-2 bg-slate-800 text-white font-bold text-xs rounded-xl hover:bg-slate-900 cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {appliedPromo && (
                  <p className="text-[11px] text-emerald-800 font-bold mt-1.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Coupon "{appliedPromo}" applied (-৳{promoDiscount})
                  </p>
                )}
              </div>

              {/* Cost Calculations */}
              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>সাবটোটাল (Subtotal)</span>
                  <span className="font-bold text-slate-900">৳{subtotal}</span>
                </div>

                <div className="flex justify-between text-slate-600">
                  <span>ডেলিভারি চার্জ ({formData.zone === 'dhaka' ? 'ঢাকা' : 'ঢাকার বাইরে'})</span>
                  <span className="font-bold text-slate-900">৳{deliveryFee}</span>
                </div>

                {promoDiscount > 0 && (
                  <div className="flex justify-between text-[#006C49] font-bold">
                    <span>কুপন ডিসকাউন্ট</span>
                    <span>-৳{promoDiscount}</span>
                  </div>
                )}

                <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline text-slate-900">
                  <span className="text-sm font-black">সর্বমোট প্রদেয় টাকা (Total Payable)</span>
                  <span className="text-2xl font-black text-[#00271B] font-['Space_Grotesk',sans-serif]">
                    ৳{total}
                  </span>
                </div>
              </div>

              {/* Desktop Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full hidden lg:flex py-4 bg-[#006C49] hover:bg-[#005236] text-white font-black text-sm rounded-2xl shadow-lg shadow-emerald-900/20 transition-all items-center justify-center gap-2 cursor-pointer"
              >
                <Truck className="w-5 h-5" />
                <span>{isSubmitting ? 'অর্ডার সম্পন্ন হচ্ছে...' : `ক্যাশ অন ডেলিভারিতে অর্ডার নিশ্চিত করুন (৳${total})`}</span>
              </button>

              <div className="text-center text-[10px] text-slate-400 font-medium space-y-1">
                <p>🔒 ১০০% নিরাপদ চেকআউট • কোনো গোপন খরচ নেই</p>
                <p>হেল্পলাইন: ১-৮০০-৫৫৫-৭৩৭৮ অথবা হোয়াটসঅ্যাপে যোগাযোগ করুন</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
