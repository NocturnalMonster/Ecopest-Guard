import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  PhoneCall, 
  MessageSquare, 
  ShieldCheck, 
  Search,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';
import { FAQItem } from '../types';
import { FAQS } from '../data/mockData';

interface FAQCenterProps {
  onOpenLiveChat: () => void;
  onShopClick: () => void;
}

export const FAQCenter: React.FC<FAQCenterProps> = ({
  onOpenLiveChat,
  onShopClick
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedFaqId, setExpandedFaqId] = useState<string>('faq-1');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'pet-safety', label: 'Pet Safety & Chemistry' },
    { id: 'shipping', label: 'Shipping & Delivery (COD)' },
    { id: 'usage', label: 'Application & Usage' },
    { id: 'guarantee', label: 'Money-Back Guarantee' }
  ];

  const filteredFaqs = FAQS.filter(faq => {
    if (activeCategory !== 'all' && faq.category !== activeCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const toggleFaq = (id: string) => {
    setExpandedFaqId(prev => (prev === id ? '' : id));
  };

  return (
    <div className="min-h-screen bg-[#F9F9FF] py-12" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER (Screenshot 9) */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#00271B] text-xs font-black uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#006C49]" />
            <span>24/7 TECHNICAL SUPPORT & ENTOMOLOGY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Space_Grotesk',sans-serif] tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2 leading-relaxed">
            Everything you need to know about safety around pets, nationwide Cash on Delivery, and our 100% money-back guarantee.
          </p>

          {/* Search Input */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search FAQ topics, delivery times, chemical ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-2xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#006C49] shadow-2xs"
            />
          </div>
        </div>

        {/* CATEGORY PILL FILTER (Screenshot 9) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#00271B] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ACCORDION LIST (Screenshot 9) */}
        <div className="space-y-4 mb-12">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 bg-emerald-100 text-[#006C49]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 space-y-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>

                    {faq.highlightPoints && faq.highlightPoints.length > 0 && (
                      <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                        {faq.highlightPoints.map((pt, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-[#00271B] font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#006C49] shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* BOTTOM ASSISTANCE CARD (Screenshot 9) */}
        <div className="bg-linear-to-br from-[#00271B] to-[#0b4735] text-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="text-xs font-black uppercase tracking-wider text-[#6CF8BB]">
              HAVE A SPECIFIC INFESTATION QUESTION?
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-['Space_Grotesk',sans-serif] mt-1">
              Speak with an Entomologist
            </h3>
            <p className="text-xs text-emerald-100/80 mt-1 max-w-md leading-relaxed">
              Our clinical safety specialists are on standby to calculate exact dosages for residential, restaurant, or factory applications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:18005557378"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white text-[#00271B] text-xs font-black flex items-center justify-center gap-2 hover:bg-emerald-50 transition-colors shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#006C49]" />
              <span>Call 1-800-555-PEST</span>
            </a>

            <button
              onClick={onOpenLiveChat}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#006C49] hover:bg-[#005439] text-white text-xs font-black flex items-center justify-center gap-2 transition-colors border border-emerald-400/30 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Live Support Chat</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
