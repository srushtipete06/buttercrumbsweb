import React from 'react';
import { Instagram, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#140105] text-[#FAF6EE] py-16 border-t border-[#CFA24D]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-[#CFA24D]/20">
          
          <div>
            <h4 className="font-serif text-2xl font-bold tracking-wider text-[#F8EACF]">
              ButterCrumbs & Co.
            </h4>
            <p className="text-xs text-[#FAF6EE]/70 mt-3 leading-relaxed">
              100% Eggless handcrafted culinary desserts[cite: 1, 3, 4]. Raw real ingredients, European cultured butter, Belgian couverture chocolate, and zero compound shortcuts[cite: 3, 6].
            </p>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-[#DDB66F] mb-3">
              Direct Orders & Help
            </h5>
            <ul className="space-y-2 text-xs text-[#FAF6EE]/80">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#DDB66F]" />
                WhatsApp: +91 7038243223[cite: 3]
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#DDB66F]" />
                Instagram: @ButterCrumbsAndCo[cite: 3]
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#DDB66F]" />
                Pune, Maharashtra (Deliveries via Porter/Cab)[cite: 3, 6]
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-[#DDB66F] mb-3">
              Baking Model
            </h5>
            <p className="text-xs text-[#FAF6EE]/80 leading-relaxed">
              Order Window: Mon, Wed, Fri & Sat (9:00 AM – 4:00 PM)[cite: 3, 6]. Zero frozen inventory, dispatched next afternoon freshly baked[cite: 3, 6].
            </p>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF6EE]/50">
          <p>© {new Date().getFullYear()} ButterCrumbs & Co. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">100% Eggless Premium Craft • Pune, India[cite: 1, 3]</p>
        </div>
      </div>
    </footer>
  );
}