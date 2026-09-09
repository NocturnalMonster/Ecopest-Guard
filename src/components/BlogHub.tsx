import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  Bookmark, 
  CheckCircle2, 
  Truck, 
  ArrowRight,
  ShieldCheck,
  Zap,
  BookOpen
} from 'lucide-react';
import { Article, Product } from '../types';
import { ARTICLES, PRODUCTS } from '../data/mockData';

interface BlogHubProps {
  onSelectProduct: (product: Product) => void;
  onBackToHome: () => void;
}

export const BlogHub: React.FC<BlogHubProps> = ({
  onSelectProduct,
  onBackToHome
}) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(ARTICLES[0].id);

  const currentArticle = ARTICLES.find(a => a.id === selectedArticleId) || ARTICLES[0];
  const featuredProduct = PRODUCTS.find(p => p.id === 'eco-pest-guard') || PRODUCTS[0];

  return (
    <div className="min-h-screen bg-[#F9F9FF] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMBS (Screenshot 8) */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
            <span>Home</span>
            <span>/</span>
            <span>Guides & Research</span>
            <span>/</span>
            <span className="font-bold text-slate-800 truncate max-w-xs">{currentArticle.category}</span>
          </div>
        </div>

        {/* ARTICLE HEADER (Screenshot 8) */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#00271B] text-xs font-black uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#006C49]" />
            <span>SCIENCE & FIELD PROTOCOLS</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-['Space_Grotesk',sans-serif] tracking-tight leading-tight">
            {currentArticle.title}
          </h1>

          <p className="text-sm sm:text-base font-bold text-[#006C49] mt-2">
            {currentArticle.bengaliTitle}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
            {currentArticle.excerpt}
          </p>

          {/* Author Strip */}
          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={currentArticle.author.avatar}
                alt={currentArticle.author.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500/20"
              />
              <div>
                <span className="text-xs font-black text-slate-900 block">{currentArticle.author.name}</span>
                <span className="text-[11px] text-slate-500 font-medium">{currentArticle.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {currentArticle.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {currentArticle.date}
              </span>
            </div>
          </div>
        </div>

        {/* HERO IMAGE & ARTICLE CONTENT */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Visual Frame */}
          <div className="relative aspect-16/9 sm:aspect-21/9 rounded-3xl overflow-hidden shadow-md border border-slate-200">
            <img
              src={currentArticle.coverImage}
              alt={currentArticle.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-xl bg-[#00271B]/90 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider">
              #1 CLINICAL GUIDE
            </span>
          </div>

          {/* Key Highlights */}
          {currentArticle.keyHighlights && (
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                Protocol Highlights & Scientific Findings:
              </h3>
              <div className="space-y-2">
                {currentArticle.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#006C49] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3-PHASE PROTOCOL CARDS (Exact Match to Screenshot 8) */}
          {currentArticle.contentPhases && (
            <div className="space-y-4">
              <h3 className="text-xl font-black text-slate-900 font-['Space_Grotesk',sans-serif]">
                The 3-Phase Domestic Eradication Protocol
              </h3>

              <div className="space-y-4">
                {currentArticle.contentPhases.map((phase) => (
                  <div 
                    key={phase.phaseNumber}
                    className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 rounded-xl bg-[#00271B] text-[#6CF8BB] flex items-center justify-center font-black text-sm">
                          {phase.phaseNumber}
                        </span>
                        <h4 className="text-sm sm:text-base font-black text-slate-900">
                          {phase.title}
                        </h4>
                      </div>
                      <span className="text-xs font-bold text-[#006C49] bg-emerald-50 px-2.5 py-1 rounded-lg">
                        {phase.duration}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-12">
                      {phase.description}
                    </p>

                    <div className="pl-12 pt-2 text-xs text-[#00271B] font-bold flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#006C49]" />
                      <span>{phase.keyCheck}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FEATURED FORMULA EMBED CALLOUT (Screenshot 8) */}
          <div className="bg-linear-to-br from-emerald-50 to-white p-6 sm:p-8 rounded-3xl border border-emerald-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={featuredProduct.featuredImage}
                alt={featuredProduct.name}
                className="w-20 h-20 rounded-2xl object-contain bg-white border border-slate-200 p-2 shrink-0"
              />
              <div>
                <span className="text-[10px] font-black uppercase text-[#006C49]">
                  REQUIRED FORMULA FOR THIS PROTOCOL
                </span>
                <h4 className="text-base font-black text-slate-900 mt-0.5">
                  {featuredProduct.name}
                </h4>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-lg font-black text-[#00271B]">৳{featuredProduct.price}</span>
                  <span className="text-xs text-slate-400 line-through">৳{featuredProduct.originalPrice}</span>
                  <span className="text-[10px] font-bold text-[#006C49]">Save {featuredProduct.discountPercent}%</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectProduct(featuredProduct)}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#00271B] hover:bg-[#004732] text-white font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <Truck className="w-4 h-4" />
              <span>Order COD (৳{featuredProduct.price})</span>
            </button>
          </div>

          {/* MORE ARTICLES IN THIS SERIES */}
          <div className="pt-8 border-t border-slate-200 space-y-4">
            <h3 className="text-lg font-black text-slate-900 font-['Space_Grotesk',sans-serif]">
              More Protocols in Surface Care & Elimination
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ARTICLES.filter(a => a.id !== selectedArticleId).map(other => (
                <div
                  key={other.id}
                  onClick={() => setSelectedArticleId(other.id)}
                  className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all flex gap-3 cursor-pointer group"
                >
                  <img
                    src={other.coverImage}
                    alt={other.title}
                    className="w-20 h-20 rounded-xl object-cover bg-slate-100 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-black text-[#006C49] uppercase block">
                      {other.category}
                    </span>
                    <h5 className="text-xs font-bold text-slate-900 group-hover:text-[#006C49] transition-colors line-clamp-2 mt-0.5">
                      {other.title}
                    </h5>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      {other.readTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
