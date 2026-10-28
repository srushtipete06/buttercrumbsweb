export const INDULGENT_CORE = [
  {
    category: "Soft Baked Cookies (95g)",
    type: "boxable",
    description: "Generous 95g rounds with gooey centers and crisp rims.",
    items: [
      { id: "sbc-1", name: "Classic Chocolate Chip", tag: "Signature", prices: { 1: 230, 4: 920, 6: 1330, 8: 1740, 12: 2610 } },
      { id: "sbc-2", name: "Triple Chocolate", tag: "Velvety", prices: { 1: 250, 4: 1000, 6: 1450, 8: 1900, 12: 2850 } },
      { id: "sbc-3", name: "Oats & Raisin", tag: "Classic", prices: { 1: 220, 4: 880, 6: 1270, 8: 1660, 12: 2490 } },
    ]
  },
  {
    category: "Premium Stuffed Cookies",
    type: "boxable",
    description: "Heavy 120g cookie domes hiding molten, decadent cores.",
    items: [
      { id: "psc-1", name: "Biscoff Volcano (120g)", tag: "Molten Core", prices: { 1: 360, 4: 1440, 6: 2110, 8: 2780, 12: 4170 } },
      { id: "psc-2", name: "Nutella Core", tag: "Bestseller", prices: { 1: 335, 4: 1340, 6: 1960, 8: 2580, 12: 3870 } },
      { id: "psc-3", name: "Ferrero Rocher", tag: "Crisp Praline", prices: { 1: 400, 4: 1600, 6: 2350, 8: 3100, 12: 4650 } },
    ]
  },
  {
    category: "Signature Loaves & Rolls",
    type: "loaves",
    description: "Dense, aromatic, slow-baked artisan loaves.",
    items: [
      { id: "loaf-1", name: "Chocolate Walnut Banana Bread", tag: "Comfort", prices: { half: 680, one: 1300 } },
      { id: "loaf-2", name: "Chocolate Chip Butter Cake", tag: "Pure Butter", prices: { half: 850, one: 1650 } },
      { id: "loaf-3", name: "Carrot Cake with Cream Cheese", tag: "Spiced & Rich", prices: { half: 850, one: 1650 } },
    ]
  },
  {
    category: "Cinnamon Rolls",
    type: "boxable",
    description: "Fluffy laminated yeast-swirl rolls basted in caramelized cinnamon butter glaze.",
    items: [
      { id: "cin-1", name: "Gooey Cinnamon Rolls", tag: "Warm & Gooey", prices: { 1: 220, 4: 880, 6: 1270, 8: 1660, 12: 2490 } }
    ]
  }
];

export const SUGAR_FREE_CRAFT = [
  {
    category: "Cookies & Crunch",
    type: "boxable",
    description: "Naturally sweetened without refined white cane sugar.",
    items: [
      { id: "sf-c1", name: "Oats & Raisin (Coconut Sugar)", tag: "Unrefined", prices: { 1: 190, 4: 760, 6: 1090, 8: 1420, 12: 2130 } },
      { id: "sf-c2", name: "Superfood Bfast (Monk Fruit)", tag: "Zero Spike", prices: { 1: 245, 4: 980, 6: 1420, 8: 1860, 12: 2790 } },
    ]
  },
  {
    category: "Energy Balls",
    type: "boxable",
    description: "Nutrient-dense power bites packed with rich nuts and natural date sweetness.",
    items: [
      { id: "sf-eb1", name: "Dates & Cashew High-Protein", tag: "Clean Energy", prices: { 1: 160, 4: 640, 6: 910, 8: 1180, 12: 1770 } }
    ]
  },
  {
    category: "Signature Loaves",
    type: "loaves",
    description: "Moist, slow-baked flour blends paired with pure monk fruit or coconut nectar.",
    items: [
      { id: "sf-lf1", name: "Banana Bread (Oat Flour / Monk Fruit)", tag: "Wholesome", prices: { half: 900, one: 1750 } },
      { id: "sf-lf2", name: "Traditional Carrot Cake with Frosting", tag: "Keto-Friendly", prices: { half: 1100, one: 2150 } },
    ]
  }
];

export const HERO_SHOWCASE_ITEMS = [
  { name: "Biscoff Volcano (120g)", desc: "Molten Belgian Lotus speculoos core", single: 360, box4: 1440 },
  { name: "Ferrero Rocher Stuffed", desc: "Whole hazelnut confectionery inside", single: 400, box4: 1600 },
  { name: "Triple Chocolate (95g)", desc: "70% Noir, milk & ivory couverture", single: 250, box4: 1000 },
  { name: "Gooey Cinnamon Rolls", desc: "Caramelized brown butter cinnamon glaze", single: 220, box4: 880 },
];