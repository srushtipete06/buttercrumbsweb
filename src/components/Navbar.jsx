import React from 'react';
import { ShoppingBag, MessageCircle } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className="sticky top-0 z-40 bg-[#1F0309]/95 backdrop-blur-md border-b border-[#CFA24D]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex flex-col">
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#FAF6EE]">
            ButterCrumbs & Co.
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#DDB66F] font-semibold">
            100% Eggless Handcrafted Desserts
          </span>
        </a>

        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href="https://wa.me/917038243223"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#FAF6EE]/80 hover:text-[#DDB66F] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#DDB66F]" />
            Bakery Assistant
          </a>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FAF6EE] text-[#1F0309] hover:bg-[#F8EACF] transition-all shadow-md active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 text-[#5A0E1F]" />
            <span className="text-xs font-bold tracking-wider uppercase">Your Box</span>
            {cartCount > 0 && (
              <span className="num-luxury text-[11px] bg-[#5A0E1F] text-[#FAF6EE] px-2 py-0.5 rounded-full font-bold ml-0.5">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}