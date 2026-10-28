import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { INDULGENT_CORE, SUGAR_FREE_CRAFT } from '../data/menuData';

export default function FullMenu({ onAddToCart }) {
  const [activeTab, setActiveTab] = useState('indulgent');
  const [selectedVariants, setSelectedVariants] = useState({});
  const [customizationFlags, setCustomizationFlags] = useState({});
  const [addedItemNotice, setAddedItemNotice] = useState(null);

  const activeCategories = activeTab === 'indulgent' ? INDULGENT_CORE : SUGAR_FREE_CRAFT;

  const handleSelectVariant = (itemId, variantKey) => {
    setSelectedVariants((prev) => ({ ...prev, [itemId]: variantKey }));
  };

  const handleToggleCustom = (itemId) => {
    setCustomizationFlags((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const handleAddItem = (item, isLoaf) => {
    const selectedKey = selectedVariants[item.id] || (isLoaf ? 'half' : 4);
    const basePrice = item.prices[selectedKey];
    const isCustom = !!customizationFlags[item.id];
    const finalPrice = basePrice + (isCustom ? 250 : 0);

    const label = isLoaf
      ? (selectedKey === 'half' ? 'Half Kg' : 'One Kg')
      : (selectedKey === 1 ? '1 Serve' : `Box of ${selectedKey}`);

    onAddToCart({
      id: `${item.id}-${selectedKey}-${isCustom ? 'custom' : 'std'}-${Date.now()}`,
      title: item.name,
      spec: label,
      price: finalPrice,
      isCustomized: isCustom,
    });

    setAddedItemNotice(item.id);
    setTimeout(() => setAddedItemNotice(null), 1400);
  };

  return (
    <section id="menu" className="py-20 bg-[#FAF6EE] text-[#1F0309]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#A87D2E]">
            Haute Pâtisserie Menu
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1F0309] mt-2">
            Complete Baked Offerings
          </h2>
        </div>

        {/* Collection Selector Tabs */}
        <div className="flex justify-center mb-16">
          <div className="p-1.5 rounded-full bg-white border border-[#CFA24D]/40 shadow-sm flex items-center gap-1">
            <button
              onClick={() => setActiveTab('indulgent')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                activeTab === 'indulgent'
                  ? 'bg-[#1F0309] text-[#FAF6EE] shadow-md'
                  : 'text-[#1F0309] hover:text-[#A87D2E]'
              }`}
            >
              The Indulgent Core
            </button>
            <button
              onClick={() => setActiveTab('sugarfree')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                activeTab === 'sugarfree'
                  ? 'bg-[#1F0309] text-[#FAF6EE] shadow-md'
                  : 'text-[#1F0309] hover:text-[#A87D2E]'
              }`}
            >
              The Sugar-Free Craft
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {activeCategories.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              <div className="border-b border-[#CFA24D]/30 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F0309]">
                  {cat.category}
                </h3>
                <p className="text-xs text-[#2D060F]/70">{cat.description}</p>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item) => {
                  const isLoaf = cat.type === 'loaves';
                  const activeVariant = selectedVariants[item.id] || (isLoaf ? 'half' : 4);
                  const basePrice = item.prices[activeVariant];
                  const isCustom = !!customizationFlags[item.id];
                  const displayPrice = basePrice + (isCustom ? 250 : 0);
                  const isAdded = addedItemNotice === item.id;

                  return (
                    <div
                      key={item.id}
                      className="bg-[#FFFDF9] rounded-3xl p-6 border border-[#CFA24D]/35 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#1F0309]/5 text-[#1F0309] border border-[#CFA24D]/25">
                            {item.tag}
                          </span>
                          <span className="num-luxury text-lg text-[#1F0309]">
                            ₹{displayPrice}
                          </span>
                        </div>

                        <h4 className="font-serif text-xl font-bold text-[#1F0309] mt-3">
                          {item.name}
                        </h4>

                        {/* Portion Toggle */}
                        <div className="mt-5">
                          <span className="block text-[10px] uppercase font-semibold text-[#2D060F]/70 mb-2">
                            Select Packaging Size:
                          </span>
                          <div className="grid grid-cols-5 gap-1.5 text-center">
                            {isLoaf ? (
                              <>
                                <button
                                  onClick={() => handleSelectVariant(item.id, 'half')}
                                  className={`col-span-2 py-1.5 rounded-lg text-[11px] font-bold border transition-all ${
                                    activeVariant === 'half'
                                      ? 'bg-[#1F0309] text-[#FAF6EE] border-[#1F0309]'
                                      : 'bg-[#FAF6EE] text-[#1F0309] border-[#CFA24D]/30'
                                  }`}
                                >
                                  Half Kg
                                </button>
                                <button
                                  onClick={() => handleSelectVariant(item.id, 'one')}
                                  className={`col-span-3 py-1.5 rounded-lg text-[11px] font-bold border transition-all ${
                                    activeVariant === 'one'
                                      ? 'bg-[#1F0309] text-[#FAF6EE] border-[#1F0309]'
                                      : 'bg-[#FAF6EE] text-[#1F0309] border-[#CFA24D]/30'
                                  }`}
                                >
                                  1 Kg
                                </button>
                              </>
                            ) : (
                              [1, 4, 6, 8, 12].map((sz) => (
                                <button
                                  key={sz}
                                  onClick={() => handleSelectVariant(item.id, sz)}
                                  className={`py-1.5 rounded-lg text-[11px] font-bold border transition-all ${
                                    activeVariant === sz
                                      ? 'bg-[#1F0309] text-[#FAF6EE] border-[#1F0309]'
                                      : 'bg-[#FAF6EE] text-[#1F0309] border-[#CFA24D]/30'
                                  }`}
                                >
                                  {sz === 1 ? '1pc' : `×${sz}`}
                                </button>
                              ))
                            )}
                          </div>
                        </div>

                        {/* Customization Toggle */}
                        <div className="mt-4 pt-3 border-t border-[#CFA24D]/25">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={isCustom}
                              onChange={() => handleToggleCustom(item.id)}
                              className="w-3.5 h-3.5 rounded text-[#1F0309] focus:ring-[#A87D2E]"
                            />
                            <span className="text-[11px] text-[#1F0309]">
                              Extra toppings / specific fillings (+<span className="num-luxury">₹250</span>)
                            </span>
                          </label>
                        </div>
                      </div>

                      {/* Add Button */}
                      <button
                        onClick={() => handleAddItem(item, isLoaf)}
                        className={`mt-6 w-full py-2.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm ${
                          isAdded
                            ? 'bg-emerald-700 text-white'
                            : 'bg-[#1F0309] text-[#FAF6EE] hover:bg-[#2D060F]'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Added to Box
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" /> Add to Order
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}