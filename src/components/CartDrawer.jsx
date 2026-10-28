import React, { useState } from 'react';
import { X, Trash2, MessageCircle, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, onRemoveItem, onClearCart }) {
  const [customerName, setCustomerName] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('');
  const [preferredMethod, setPreferredMethod] = useState('Doorstep Delivery (Cab/Porter)');
  const [specialNotes, setSpecialNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSendToWhatsApp = () => {
    if (cart.length === 0) return;

    const itemsText = cart
      .map((item, idx) => `${idx + 1}. *${item.title}* (${item.spec}) - ₹${item.price}${item.isCustomized ? ' [Custom Fillings Added]' : ''}`)
      .join('\n');

    const message = 
`*NEW PRE-ORDER RESERVATION | ButterCrumbs & Co.*
-----------------------------------
*Customer Details:*
• Name: ${customerName || 'Valued Guest'}
• Fulfillment: ${preferredMethod}
• Location / Area: ${deliveryArea || 'Pune'}
• Notes: ${specialNotes || 'None'}

*Curated Box Items:*
${itemsText}

-----------------------------------
*Order Total: ₹${subtotal}*
*Payment:* Full advance payment via UPI required to secure baking slot.
*Dispatch:* Next-Day Afternoon Doorstep Delivery.
-----------------------------------
Please confirm baking slot and UPI details. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/917038243223?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over */}
      <div className="relative w-full max-w-md bg-[#FAF6EE] h-full shadow-2xl flex flex-col z-10 border-l border-[#CFA24D]/35">
        
        <div className="p-6 border-b border-[#CFA24D]/25 flex items-center justify-between bg-[#FFFDF9]">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#1F0309]">Your Curated Box</h3>
            <span className="text-[11px] text-[#A87D2E] uppercase tracking-wider font-semibold">
              ButterCrumbs & Co. Pune
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAF6EE] flex items-center justify-center text-[#1F0309] hover:bg-[#1F0309] hover:text-[#FAF6EE] transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 text-[#2D060F]/60">
              <p className="font-serif text-xl">Your box is currently empty</p>
              <p className="text-xs mt-1">Select from the menu or design an assorted flight.</p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center pb-2">
                <span className="text-xs uppercase tracking-wider font-bold text-[#1F0309]">
                  Selected Pastries ({cart.length})
                </span>
                <button
                  onClick={onClearCart}
                  className="text-xs text-[#A87D2E] hover:underline"
                >
                  Clear Box
                </button>
              </div>

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-[#FFFDF9] border border-[#CFA24D]/25 shadow-sm flex items-start justify-between gap-3"
                >
                  <div className="flex-1">
                    <h5 className="font-serif text-base font-bold text-[#1F0309]">{item.title}</h5>
                    <p className="text-[11px] text-[#2D060F]/70">{item.spec}</p>
                    {item.isCustomized && (
                      <span className="inline-block text-[9px] uppercase tracking-wider font-bold text-[#A87D2E] bg-[#F8EACF] px-2 py-0.5 rounded mt-1">
                        + Custom Fillings
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="num-luxury text-sm text-[#1F0309]">₹{item.price}</span>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-xs text-rose-800 hover:text-rose-950 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Guest Form */}
              <div className="mt-6 pt-6 border-t border-[#CFA24D]/25 space-y-3">
                <span className="block text-xs uppercase tracking-wider font-bold text-[#1F0309]">
                  Guest Dispatch Details
                </span>
                
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#CFA24D]/35 text-xs text-[#1F0309] focus:ring-1 focus:ring-[#A87D2E] outline-none"
                />

                <input
                  type="text"
                  placeholder="Delivery Address / Area in Pune"
                  value={deliveryArea}
                  onChange={(e) => setDeliveryArea(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#CFA24D]/35 text-xs text-[#1F0309] focus:ring-1 focus:ring-[#A87D2E] outline-none"
                />

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPreferredMethod('Doorstep Delivery (Cab/Porter)')}
                    className={`py-2 rounded-xl text-xs font-semibold border ${
                      preferredMethod.includes('Delivery')
                        ? 'bg-[#1F0309] text-[#FAF6EE] border-[#1F0309]'
                        : 'bg-white text-[#1F0309] border-[#CFA24D]/35'
                    }`}
                  >
                    Pune Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferredMethod('Self Pickup')}
                    className={`py-2 rounded-xl text-xs font-semibold border ${
                      preferredMethod === 'Self Pickup'
                        ? 'bg-[#1F0309] text-[#FAF6EE] border-[#1F0309]'
                        : 'bg-white text-[#1F0309] border-[#CFA24D]/35'
                    }`}
                  >
                    Self Pickup
                  </button>
                </div>

                <textarea
                  rows={2}
                  placeholder="Custom messages, allergies, or notes..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#CFA24D]/35 text-xs text-[#1F0309] focus:ring-1 focus:ring-[#A87D2E] outline-none"
                />
              </div>
            </>
          )}
        </div>

        {/* Drawer footer */}
        {cart.length > 0 && (
          <div className="p-6 bg-[#FFFDF9] border-t border-[#CFA24D]/25">
            <div className="flex items-baseline justify-between mb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-[#2D060F]/70">Subtotal</span>
              <span className="num-luxury text-2xl text-[#1F0309]">₹{subtotal}</span>
            </div>

            <button
              onClick={handleSendToWhatsApp}
              className="w-full py-3.5 rounded-full bg-[#1F0309] text-[#FAF6EE] hover:bg-[#2D060F] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              Confirm Order via WhatsApp
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#2D060F]/60 mt-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A87D2E]" />
              Advance payment via UPI required to secure slot.
            </div>
          </div>
        )}

      </div>
    </div>
  );
}