import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Check, HelpCircle } from 'lucide-react';
import { ViewTab } from '../types';

interface FooterProps {
  onNavigate: (tab: ViewTab) => void;
  onOpenChat: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenChat }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="bg-white text-slate-600 pt-12 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FOOTER FAQ HIGHLIGHT SECTION */}
        <div className="mb-12 p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-[#006C49] text-xs font-black uppercase tracking-wider mb-1">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions (FAQ)</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 font-['Space_Grotesk',sans-serif]">
                Questions & Answers
              </h3>
            </div>
            <button
              onClick={() => onNavigate('faq')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-emerald-50 text-[#006C49] font-bold text-xs border border-emerald-300 transition-colors shadow-2xs self-start sm:self-auto cursor-pointer"
            >
              <span>View All Questions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-5 text-xs">
            <div className="space-y-1.5">
              <p className="font-bold text-slate-900">🌿 খাবারের ঘরে বা কিচেনে স্প্রে করা নিরাপদ?</p>
              <p className="text-slate-500 leading-relaxed">
                হ্যাঁ, এটি ১০০% প্রাকৃতিক ভেষজ নির্যাস দিয়ে তৈরি। কোনো রাসায়নিক গ্যাস বা বিষাক্ত ফিউম নেই, শিশুদের জন্য নিরাপদ।
              </p>
            </div>
            <div className="space-y-1.5">
              <p className="font-bold text-slate-900">📦 ক্যাশ অন ডেলিভারিতে চেক করে নেওয়া যাবে?</p>
              <p className="text-slate-500 leading-relaxed">
                অবশ্যই! রাইডারের সামনে প্যাকেট খুলে ভেতরের বোতলগুলো চেক করে তারপর সম্পূর্ণ মূল্য পরিশোধ করতে পারবেন।
              </p>
            </div>
            <div className="space-y-1.5">
              <p className="font-bold text-slate-900">🛡️ কাজ না করলে কি মানিব্যাক গ্যারান্টি আছে?</p>
              <p className="text-slate-500 leading-relaxed">
                হ্যাঁ, ৪ সপ্তাহের মধ্যে কাঙ্ক্ষিত রেজাল্ট না পেলে আমাদের হটলাইনে যোগাযোগ করে ফুল রিফান্ড নিতে পারবেন।
              </p>
            </div>
          </div>
        </div>

        {/* TOP ROW: 4 COLUMNS FROM SCREENSHOT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* BRAND BIO COLUMN (4 COLS) */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-[#006C49] flex items-center justify-center text-white shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-slate-900 tracking-tight font-['Space_Grotesk',sans-serif]">
                UltraShield
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Engineering next-generation botanical bio-defenses for residential and commercial spaces. Lethal to invasive pests, clinically safe for pets and families.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <span>🌱</span> Laboratory Formulated in USA
              </span>
            </div>
          </div>

          {/* COLUMN 1: CATEGORIES (2.5 COLS) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-[#006C49] transition-colors cursor-pointer text-left">
                  Indoor Pest Barrier
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-[#006C49] transition-colors cursor-pointer text-left">
                  Lawn & Perimeter Spray
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('combos')} className="hover:text-[#006C49] transition-colors cursor-pointer text-left">
                  Botanical Concentrates
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-[#006C49] transition-colors cursor-pointer text-left">
                  Precision Applicators
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-[#006C49] transition-colors cursor-pointer text-left">
                  Commercial Defense
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: ASSISTANCE (2.5 COLS) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Assistance
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-[#006C49] transition-colors cursor-pointer text-left">
                  Pest Identification Guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-[#006C49] transition-colors cursor-pointer text-left">
                  Clinical Safety Data Sheets
                </button>
              </li>
              <li>
                <button onClick={onOpenChat} className="hover:text-[#006C49] transition-colors cursor-pointer text-left">
                  Track My Order
                </button>
              </li>
              <li>
                <button onClick={onOpenChat} className="hover:text-[#006C49] transition-colors cursor-pointer text-left">
                  Subscription Management
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-[#006C49] transition-colors cursor-pointer text-left">
                  FAQ & Help Desk
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: STAY PROTECTED (4 COLS) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Stay Protected
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Get seasonal infestation alerts and 15% off your initial clinical concentrate order.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work or home email"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#006C49] focus:border-transparent transition-all shadow-2xs"
              />

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#00271B] hover:bg-[#004732] text-white text-xs font-black rounded-xl transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Subscribed! Check Inbox</span>
                  </>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM LEGAL ROW (SCREENSHOT MATCH) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-normal">
          <p className="text-center sm:text-left">
            © 2025 UltraShield BioSciences Inc. All rights reserved. Registered with EPA Safer Choice standards.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button 
              onClick={() => onNavigate('faq')} 
              className="hover:text-slate-600 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onNavigate('faq')} 
              className="hover:text-slate-600 transition-colors cursor-pointer"
            >
              Terms of Commercial Supply
            </button>
            <button 
              onClick={() => onNavigate('faq')} 
              className="hover:text-slate-600 transition-colors cursor-pointer"
            >
              Lab Testing Disclosures
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
