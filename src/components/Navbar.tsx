import { ShoppingBag, Menu, User, X, ChevronRight, TreePine, Sparkles, ShoppingCart } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "./CartDrawer";
import { useState } from "react";

export function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isProfileActive = location.pathname === "/profile";

  const navLinks = [
    { name: "Home", target: "top" },
    { name: "Shop Apples", target: "products" },
    { name: "Our Story", target: "story" },
    { name: "Sell Your Apples", target: "sell-apples" },
    { name: "Journey", target: "journey" },
  ];

  const handleNavClick = (target: string) => {
    setMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (target === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.getElementById(target);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 150);
    } else {
      if (target === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Mobile Menu Trigger Button */}
            <div className="flex md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-stone-600 hover:text-brand-dark transition-colors rounded-xl hover:bg-stone-100"
                title="Navigation Menu"
                aria-label="Navigation Menu"
              >
                <Menu size={24} />
              </button>
            </div>
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none">
              <button
                onClick={() => handleNavClick("top")}
                className="font-bold tracking-tight text-brand-dark text-2xl flex items-center gap-1.5 cursor-pointer"
              >
                <span>Harvest Crate</span>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex flex-1 justify-center space-x-8">
              {navLinks.map((item) => (
                <button 
                  key={item.name} 
                  onClick={() => handleNavClick(item.target)}
                  className="text-stone-600 hover:text-brand-green font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer py-1 relative group"
                >
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                </button>
              ))}
            </div>

            {/* Right Side Icons: Profile & Cart */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Profile Page Link Button */}
              <Link 
                to="/profile"
                className={`p-2 rounded-full transition-all group flex items-center justify-center cursor-pointer ${
                  isProfileActive 
                    ? "bg-brand-green/10 text-brand-green" 
                    : "text-stone-600 hover:text-brand-green hover:bg-stone-100"
                }`}
                title="My Account & Orders"
                aria-label="My Account & Orders"
              >
                <User size={24} className="group-hover:scale-110 transition-transform" />
              </Link>

              {/* Shopping Bag / Cart Icon Button */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-stone-600 hover:text-brand-green hover:bg-stone-100 rounded-full transition-all group flex items-center justify-center cursor-pointer"
                title="Open Cart"
                aria-label="Open Cart"
              >
                <ShoppingBag size={24} className="group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-green rounded-full shadow-sm">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
            
          </div>
        </div>
      </nav>

      {/* Slide-in Cart Drawer */}
      <CartDrawer />

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl z-10 flex flex-col p-6">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-stone-100">
              <span className="font-bold text-xl text-brand-dark">Harvest Crate</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-stone-100 text-stone-400"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col space-y-2 flex-1">
              {navLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.target)}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl text-left font-bold text-stone-700 hover:bg-stone-50 hover:text-brand-green transition-all"
                >
                  <span>{item.name}</span>
                  <ChevronRight size={18} className="text-stone-400" />
                </button>
              ))}

              <div className="pt-4 border-t border-stone-100 mt-4 space-y-2">
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl text-left font-bold text-stone-700 hover:bg-stone-50 hover:text-brand-green transition-all"
                >
                  <span className="flex items-center gap-2">
                    <User size={18} className="text-brand-green" /> My Profile & Orders
                  </span>
                  <ChevronRight size={18} className="text-stone-400" />
                </Link>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl text-left font-bold text-stone-700 hover:bg-stone-50 hover:text-brand-green transition-all"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingCart size={18} className="text-brand-green" /> View Cart ({cartCount})
                  </span>
                  <ChevronRight size={18} className="text-stone-400" />
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-100 text-xs text-stone-400">
              Direct Himalayan Orchard Delivery · 100% Tree Ripened
            </div>
          </div>
        </div>
      )}
    </>
  );
}
