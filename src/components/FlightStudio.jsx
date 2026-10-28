import React, { useState } from 'react';
import { Sparkles, Plus, Minus, ShoppingBag } from 'lucide-react';

const FLIGHT_OPTIONS = [
  { id: "Classic Chocolate Chip", name: "Classic Chocolate Chip", unitPrice: 230 },
  { id: "Triple Chocolate", name: "Triple Chocolate", unitPrice: 250 },
  { id: "Oats & Raisin", name: "Oats & Raisin", unitPrice: 220 },
  { id: "Biscoff Volcano (120g)", name: "Biscoff Volcano (120g)", unitPrice: 360 },
  { id: "Nutella Core", name: "Nutella Core", unitPrice: 335 },
  { id: "Ferrero Rocher", name: "Ferrero Rocher", unitPrice: 400 },
  { id: "Gooey Cinnamon Rolls", name: "Gooey Cinnamon Roll", unitPrice: 220 },
];

export default function FlightStudio({ onAddCustomBox }) {
  const [targetSize, setTargetSize] = useState(4);
  const [counts, setCounts] = useState({});
  const [wantsCustomization, setWantsCustomization] = useState(false);

  const totalSelected = Object.values(counts).reduce((sum, n) => sum + (n || 0), 0);
  const remaining = targetSize - totalSelected;

  const handleUpdate = (id, delta) => {
    const current = counts[id] || 0;
    if (delta > 0 && totalSelected >= targetSize) return;
    const next = Math.max(0, current + delta);
    setCounts((prev) => ({ ...prev, [id]: next }));
  };

  const calculatedBasePrice = Object.entries(counts).reduce((total, [id, qty]) => {
    const item = FLIGHT_OPTIONS.find((i) => i.id === id);
    return total + (item ? item.unitPrice * qty : 0);
  }, 0);

  const finalBoxPrice = calculatedBasePrice + (wantsCustomization ? 250 : 0);

  const handleAddToCuratedBox = () => {
    if (totalSelected !== targetSize) return;
    const itemsList = Object.entries(counts)
      .filter(([_, qty]) => qty > 0)
      .map(([name, qty]) => `${name} × ${qty}`)
      .join(', ');

    onAddCustomBox({
      id: `custom-box-${Date.now()}`,
      title: `Curated Tasting Flight (Box of ${targetSize})`,
      spec: itemsList,
      price: finalBoxPrice,
      isCustomized: wantsCustomization,
    });

    setCounts({});
    setWantsCustomization(false);
  };

  return (
    <section id="flight-studio" className="py-20 bg-[#FAF6EE] text-[#1F0309] border-b border-[#CFA24D]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F0309]/5 border border-[#CFA24D]/40 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#A87D2E]" />
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#1F0309]">
              Custom Assortment Studio
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1F0309]">
            Build Your Assorted Box
          </h2>
          <p className="text-sm text-[#2D060F]/80 mt-2">
            Minimum Order Quantity: Box of 4. Select your target box size, then mix and match any flavors until full.
          </p>
        </div>

        <div className="bg-[#FFFDF9] rounded-3xl border border-[#CFA24D]/40 shadow-xl p-6 sm:p-10">
          
          {/* Step 1: Target Size */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#CFA24D]/25">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#1F0309]">Step 1: Choose Target Volume</span>
              <p className="text-xs text-[#2D060F]/70">Standard boutique gift boxes</p>
            </div>
            <div className="grid grid-cols-4 gap-2 w-full sm:w-auto">
              {[4, 6, 8, 12].map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setTargetSize(size);
                    setCounts({});
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                    targetSize === size
                      ? 'bg-[#1F0309] text-[#FAF6EE] border-[#1F0309]'
                      : 'bg-[#FAF6EE] text-[#1F0309] border-[#CFA24D]/30 hover:border-[#A87D2E]'
                  }`}
                >
                  Box of {size}
                </button>
              ))}
            </div>
          </div>

          {/* Slots Status */}
          <div className="my-6 p-4 rounded-xl bg-[#FAF6EE] border border-[#CFA24D]/30 flex items-center justify-between">
            <span className="text-xs font-semibold text-[#1F0309]">Box Status</span>
            <span className={`num-luxury text-xs px-3 py-1 rounded-full ${
              remaining === 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-[#1F0309] text-[#FAF6EE]'
            }`}>
              {remaining === 0 ? '✓ Ready to Add' : `${remaining} slots remaining`}
            </span>
          </div>

          {/* Selector Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {FLIGHT_OPTIONS.map((item) => {
              const qty = counts[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FFFDF9] border border-[#CFA24D]/25 hover:border-[#A87D2E] transition-all"
                >
                  <div className="pr-2">
                    <h4 className="text-xs font-bold text-[#1F0309]">{item.name}</h4>
                    <span className="num-luxury text-[11px] text-[#A87D2E]">₹{item.unitPrice}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleUpdate(item.id, -1)}
                      disabled={qty === 0}
                      className="w-7 h-7 rounded-lg bg-[#FAF6EE] border border-[#CFA24D]/30 flex items-center justify-center text-[#1F0309] disabled:opacity-30 active:scale-95"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="num-luxury text-xs w-4 text-center">{qty}</span>
                    <button
                      onClick={() => handleUpdate(item.id, 1)}
                      disabled={totalSelected >= targetSize}
                      className="w-7 h-7 rounded-lg bg-[#1F0309] text-[#FAF6EE] flex items-center justify-center disabled:opacity-30 active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Customization Toggle & Cart Action */}
          <div className="mt-8 pt-6 border-t border-[#CFA24D]/25 flex flex-col md:flex-row items-center justify-between gap-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={wantsCustomization}
                onChange={(e) => setWantsCustomization(e.target.checked)}
                className="w-4 h-4 rounded text-[#1F0309] focus:ring-[#A87D2E]"
              />
              <span className="text-xs font-medium text-[#1F0309]">
                Add Custom Toppings / Specific Fillings (+<span className="num-luxury">₹250</span>)
              </span>
            </label>

            <div className="flex items-center gap-5 w-full md:w-auto justify-between md:justify-end">
              <div>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-[#2D060F]/70">Total Selection</span>
                <span className="num-luxury text-xl sm:text-2xl text-[#1F0309]">₹{finalBoxPrice}</span>
              </div>

              <button
                disabled={totalSelected !== targetSize}
                onClick={handleAddToCuratedBox}
                className="px-6 py-3 rounded-full bg-[#1F0309] text-[#FAF6EE] hover:bg-[#2D060F] disabled:opacity-40 font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Add Flight to Box
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}