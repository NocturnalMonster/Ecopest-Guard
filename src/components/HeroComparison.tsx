import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Play, 
  X, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Volume2, 
  VolumeX,
  RotateCcw
} from 'lucide-react';
import { Product } from '../types';

interface HeroComparisonProps {
  onShopClick?: () => void;
  onSelectProduct?: (product: Product) => void;
  featuredProduct?: Product;
}

export const HeroComparison: React.FC<HeroComparisonProps> = ({
  onShopClick,
  onSelectProduct,
  featuredProduct
}) => {
  const [showReelModal, setShowReelModal] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const handleShop = () => {
    if (onShopClick) {
      onShopClick();
    } else {
      const el = document.getElementById('featured-buy-box');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="w-full bg-slate-900" id="hero-banner">
      {/* 1. TOP BLACK DEMO BAR */}
      <div className="w-full bg-black text-white text-center py-2.5 px-4 border-b border-white/10">
        <h2 className="text-sm sm:text-base md:text-lg font-black tracking-widest uppercase font-['Space_Grotesk',sans-serif]">
          KITCHEN COUNTER TOP MAKEOVER: BEFORE & AFTER CLEAN DEMO
        </h2>
      </div>

      {/* 2. PHOTOGRAPHIC SPLIT KITCHEN HERO BANNER */}
      <div className="relative w-full h-[460px] sm:h-[520px] md:h-[580px] lg:h-[620px] overflow-hidden select-none bg-slate-950">
        {/* Real photographic kitchen countertop background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=85')`
          }}
        >
          {/* Subtle lighting gradient to keep background photo crisp & visible */}
          <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/5 to-transparent" />
        </div>

        {/* LEFT SIDE: BEFORE GREASE / STAIN TINT */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-amber-900/10 pointer-events-none" />

        {/* CENTER SPLIT LINE */}
        <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/40 shadow-sm pointer-events-none">
          {/* TOP CENTER BEFORE / AFTER BADGES */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center shadow-2xl rounded-full overflow-hidden border border-white/30">
            <span className="px-4 py-1.5 bg-[#C92A2A] text-white text-xs sm:text-sm font-black tracking-wider uppercase">
              BEFORE
            </span>
            <span className="px-4 py-1.5 bg-[#006C49] text-white text-xs sm:text-sm font-black tracking-wider uppercase">
              AFTER
            </span>
          </div>
        </div>

        {/* 3. BOTTOM-LEFT ACTION GLASS BAR */}
        <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-8 lg:left-12 z-20">
          <div className="bg-white/[0.03] backdrop-blur-[2px] rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-white/25 shadow-2xl shadow-black/15 ring-1 ring-white/10">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleShop}
                className="px-5 py-2.5 sm:py-3 rounded-xl bg-[#006C49]/90 hover:bg-[#005439] text-white text-xs sm:text-sm font-black shadow-lg shadow-emerald-950/40 transition-all active:scale-95 flex items-center gap-2 cursor-pointer backdrop-blur-xs border border-emerald-400/30"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Shop Concentrate</span>
              </button>

              <button
                onClick={() => setShowReelModal(true)}
                className="px-5 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/25 backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Watch 60s Reel</span>
              </button>
            </div>
          </div>
        </div>

        {/* Subtle bottom-right pill indicator from screenshot */}
        <div className="absolute bottom-8 right-8 hidden sm:block">
          <div className="w-9 h-2.5 rounded-full bg-white/20 backdrop-blur-xs border border-white/20" />
        </div>
      </div>

      {/* 4. INTERACTIVE 60S REEL MODAL */}
      {showReelModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95">
            <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-2 text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-wider">
                  60-Second Clinical Kitchen Demo
                </span>
              </div>
              <button
                onClick={() => setShowReelModal(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Simulator Container */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
                alt="Kitchen reel"
                className="w-full h-full object-cover opacity-80"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/60 flex flex-col justify-between p-6">
                <div className="bg-emerald-950/80 border border-emerald-500/40 rounded-xl p-3 max-w-md text-white backdrop-blur-xs">
                  <p className="text-xs font-bold text-emerald-400">Step 1: Bio-Enzyme Spray Application</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Spray directly onto tile joints, grease splatters, and roach hiding zones.
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg cursor-pointer"
                    >
                      {isPlaying ? <RotateCcw className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="text-xs text-white/90 font-mono font-bold">0:42 / 1:00</span>
                  </div>

                  <button
                    onClick={() => {
                      setShowReelModal(false);
                      handleShop();
                    }}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black shadow-md cursor-pointer"
                  >
                    Order Formulation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
