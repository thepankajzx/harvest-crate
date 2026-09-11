import { useCart } from "../context/CartContext";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";

export function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, clearCart, isCartOpen, setIsCartOpen, subtotal, cartCount } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
      setIsOrdered(false);
      setIsCartOpen(false);
      alert("Order placed successfully! In demo mode, your fresh crate is on its way.");
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="text-brand-green" size={22} />
              <h2 className="text-xl font-bold text-brand-dark">Your Apple Crate</h2>
              <span className="bg-brand-green/10 text-brand-green text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount} {cartCount === 1 ? 'box' : 'boxes'}
              </span>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-stone-100 text-stone-500 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-4">
                  <ShoppingBag size={36} />
                </div>
                <h3 className="text-lg font-bold text-stone-800 mb-1">Your crate is empty</h3>
                <p className="text-sm text-stone-500 mb-6">
                  Taste the real orchard crunch. Pick your favorite varieties fresh from the trees!
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-brand-green text-white font-bold px-6 py-3 rounded-full hover:bg-emerald-800 transition-all text-sm"
                >
                  Browse Harvest Catalog
                </button>
              </div>
            ) : (
              <>
                {/* Free Shipping Highlight */}
                <div className="bg-emerald-50 border border-emerald-100 p-3.5 rounded-xl flex items-center gap-2 text-xs text-emerald-800 font-semibold">
                  <ShieldCheck size={18} className="text-brand-green shrink-0" />
                  <span>Free doorstep cold-cushioned delivery included on all orders!</span>
                </div>

                {cart.map((item) => (
                  <div 
                    key={`${item.id}-${item.weight}`}
                    className="p-4 rounded-2xl border border-stone-100 bg-stone-50/50 flex gap-4 items-center"
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 rounded-xl object-cover border border-stone-200 shrink-0"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-stone-900 text-sm truncate">{item.name}</h4>
                      <p className="text-xs text-stone-500 font-medium mb-2">{item.weight} Crate</p>
                      <p className="text-sm font-bold text-brand-green">₹{item.price * item.quantity}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <button 
                        onClick={() => removeFromCart(item.id, item.weight)}
                        className="text-stone-400 hover:text-rose-500 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-2 bg-white border border-stone-200 rounded-lg px-2 py-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.weight, -1)}
                          className="text-stone-600 hover:text-brand-dark p-0.5"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.weight, 1)}
                          className="text-stone-600 hover:text-brand-dark p-0.5"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Footer / Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-stone-100 bg-stone-50/80 space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-stone-500">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-800">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>Freshness Packaging</span>
                  <span className="font-semibold text-emerald-600">FREE</span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>Estimated Delivery</span>
                  <span className="font-semibold text-stone-800">3 - 5 Days</span>
                </div>
                <div className="flex justify-between text-base font-bold text-stone-900 pt-2 border-t border-stone-200">
                  <span>Total Amount</span>
                  <span className="text-xl text-brand-green">₹{subtotal}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isOrdered}
                className="w-full bg-brand-green hover:bg-emerald-800 text-white font-bold py-4 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-base"
              >
                {isOrdered ? (
                  "Confirming Your Harvest Box..."
                ) : (
                  <>
                    Proceed to Checkout <ArrowRight size={18} />
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-stone-400">
                Guaranteed harvest fresh · 100% money-back replacement policy
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
