import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroVersion2 from './components/HeroVersion2';
import FlightStudio from './components/FlightStudio';
import FullMenu from './components/FullMenu';
import Guidelines from './components/Guidelines';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const handleQuickAdd = (title, price) => {
    handleAddToCart({
      id: `quick-${Date.now()}`,
      title,
      spec: "Single Serve (Haute Selection)",
      price,
      isCustomized: false,
    });
    setIsCartOpen(true);
  };

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-[#1F0309] text-[#FAF6EE] font-sans selection:bg-[#CFA24D] selection:text-[#1F0309]">
      {/* Navigation */}
      <Navbar
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Exact Version 2 Hero with Burgundy Backdrop + Haute Patisserie Card */}
        <HeroVersion2 onQuickAdd={handleQuickAdd} />
        
        {/* Assorted Box Flight Studio */}
        <FlightStudio onAddCustomBox={handleAddToCart} />
        
        {/* Complete Menu */}
        <FullMenu onAddToCart={handleAddToCart} />
        
        {/* Ordering Guidelines */}
        <Guidelines />
      </main>

      {/* Slide-over Cart */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}