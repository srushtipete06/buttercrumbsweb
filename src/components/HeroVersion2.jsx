import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { HERO_SHOWCASE_ITEMS } from '../data/menuData';

export default function HeroVersion2({ onQuickAdd }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1F0309] via-[#2D060F] to-[#140105] text-[#FAF6EE] pt-12 pb-20 border-b border-[#CFA24D]/30">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#CFA24D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#5A0E1F]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#CFA24D]/40 bg-[#1F0309]/80 backdrop-blur-sm text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#F8EACF]">
              <Sparkles className="w-3.5 h-3.5 text-[#DDB66F]" />
              Zero Frozen Inventory • Pure Belgian Couverture
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#FAF6EE]">
              Confectionery Crafted <br />
              <span className="italic font-normal text-[#DDB66F]">Without Compromise.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#FAF6EE]/80 max-w-xl leading-relaxed">
              Welcome to <strong className="text-[#FAF6EE]">ButterCrumbs & Co.</strong>, Pune's boutique for gourmet soft-baked cookies, molten centers, and unrefined sugar-free craft. Baked strictly fresh upon reservation using European cultured butter, pure cocoa beans, and zero compound fats.
            </p>

            {/* Schedule Module */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFDF9] text-[#1F0309] border border-[#CFA24D]/50 shadow-2xl max-w-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#CFA24D]/25">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-[#1F0309]">
                    Next-Day Pre-Order Window
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#2D060F] text-[#FAF6EE] font-serif italic text-xs">
                  Next-Day Afternoon Delivery
                </span>
              </div>
              <p className="text-xs text-[#2D060F]/85 mt-2.5 leading-relaxed font-medium">
                Accepts pre-orders Mon, Wed, Fri & Sat (9:00 AM – 4:00 PM IST) • Operating strictly on a made-to-order craft schedule across Pune.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#menu"
                className="px-8 py-3.5 rounded-full bg-[#FAF6EE] text-[#1F0309] hover:bg-[#F8EACF] font-bold text-xs uppercase tracking-widest transition-all shadow-lg inline-flex items-center gap-2"
              >
                Browse Master Menu
                <ArrowRight className="w-4 h-4 text-[#5A0E1F]" />
              </a>
              <a
                href="#flight-studio"
                className="px-8 py-3.5 rounded-full bg-transparent text-[#FAF6EE] hover:bg-white/5 border border-[#CFA24D]/50 font-bold text-xs uppercase tracking-widest transition-all"
              >
                Build Assorted Box
              </a>
            </div>

          </div>

          {/* Right Column: Master Haute Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-[#FFFDF9] text-[#1F0309] border-2 border-[#CFA24D] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
              
              <div className="text-center pb-5 border-b border-[#CFA24D]/30">
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#A87D2E]">
                  Haute Patisserie Selection
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F0309] mt-1 tracking-wide">
                  THE INDULGENT CORE
                </h3>
                <div className="flex items-center justify-center gap-2 text-xs italic text-[#5A0E1F] mt-1 font-serif">
                  <span>100% Eggless Premium Craft</span>
                  <span>•</span>
                  <span>Box of 4 to 12</span>
                </div>
              </div>

              {/* Showcase items list */}
              <div className="divide-y divide-[#CFA24D]/20 mt-4">
                {HERO_SHOWCASE_ITEMS.map((item, idx) => (
                  <div key={idx} className="py-3.5 flex items-center justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#1F0309] leading-snug">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#2D060F]/70">{item.desc}</p>
                    </div>
                    <div className="text-right flex flex-col items-end">
                      <span className="num-luxury text-base text-[#1F0309]">
                        ₹{item.single}
                      </span>
                      <span className="text-[10px] text-[#2D060F]/65 whitespace-nowrap">
                        Box of 4: <span className="num-luxury text-[11px] text-[#1F0309]">₹{item.box4}</span>
                      </span>
                      <button
                        onClick={() => onQuickAdd(item.name, item.single)}
                        className="mt-1 text-[10px] font-bold text-[#A87D2E] hover:text-[#1F0309] uppercase tracking-wider underline underline-offset-2"
                      >
                        + Quick Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-[#CFA24D]/30 flex items-center justify-between text-xs text-[#2D060F]/80">
                <span className="italic font-serif">Assorted flavors welcome</span>
                <a href="#flight-studio" className="font-bold text-[#A87D2E] hover:underline">
                  Customize Box →
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}