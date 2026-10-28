import React from 'react';
import { Calendar, Truck, Sparkles, CreditCard } from 'lucide-react';

export default function Guidelines() {
  const rules = [
    {
      num: "01",
      icon: Calendar,
      title: "The Order Window",
      detail: "Open Monday, Wednesday, Friday & Saturday (9:00 AM – 4:00 PM). We keep zero frozen inventory to guarantee raw culinary quality strictly on a next-day pre-order model."
    },
    {
      num: "02",
      icon: Truck,
      title: "Doorstep Delivery Next Afternoon",
      detail: "Self-pickup available. Deliveries available across Pune at additional actual charges, paid directly to courier services (Porter / Cab)."
    },
    {
      num: "03",
      icon: Sparkles,
      title: "Zero Compound Shortcuts",
      detail: "Curated with real fruits, premium nuts, rich butter, and pure chocolate. We never use cheap compound shortcuts."
    },
    {
      num: "04",
      icon: CreditCard,
      title: "Full Advance Payment",
      detail: "Full advance payment via UPI is required to secure your baking slot before morning oven runs."
    }
  ];

  return (
    <section className="py-20 bg-[#FAF6EE] text-[#1F0309] border-t border-[#CFA24D]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#A87D2E]">
            Bakery Protocols
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1F0309] mt-2">
            Ordering Guidelines
          </h2>
          <p className="text-sm text-[#2D060F]/70 mt-2">
            Operating strictly on a made-to-order craft schedule across Pune.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rules.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FFFDF9] border border-[#CFA24D]/35 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl font-bold text-[#CFA24D]/40">{rule.num}</span>
                  <div className="mt-4 mb-3 w-10 h-10 rounded-xl bg-[#1F0309]/5 border border-[#CFA24D]/25 flex items-center justify-center text-[#A87D2E]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#1F0309]">{rule.title}</h4>
                  <p className="text-xs text-[#2D060F]/80 mt-2 leading-relaxed">{rule.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}