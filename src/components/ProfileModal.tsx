import { X, User, Package, MapPin, Phone, Mail, Clock, CheckCircle2, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const [activeTab, setActiveTab] = useState<"orders" | "address">("orders");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4">
        <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-100 z-10">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors"
          >
            <X size={20} />
          </button>

          {/* User Header */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-stone-100">
            <div className="w-16 h-16 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center font-bold text-2xl border-2 border-brand-green/20">
              HC
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-brand-dark">Harvest Member</h3>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-sm text-stone-500 flex items-center gap-1.5 mt-0.5">
                <Mail size={14} /> customer@harvestcrate.com
              </p>
              <p className="text-xs text-stone-400 flex items-center gap-1.5 mt-0.5">
                <Phone size={13} /> +91 98765 43210
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-stone-100 mb-6">
            <button
              onClick={() => setActiveTab("orders")}
              className={`pb-3 font-bold text-sm flex items-center gap-2 transition-all mr-6 ${
                activeTab === "orders"
                  ? "text-brand-green border-b-2 border-brand-green"
                  : "text-stone-400 hover:text-stone-600"
              }`}
            >
              <Package size={16} /> My Harvest Orders
            </button>
            <button
              onClick={() => setActiveTab("address")}
              className={`pb-3 font-bold text-sm flex items-center gap-2 transition-all ${
                activeTab === "address"
                  ? "text-brand-green border-b-2 border-brand-green"
                  : "text-stone-400 hover:text-stone-600"
              }`}
            >
              <MapPin size={16} /> Delivery Address
            </button>
          </div>

          {/* Tab 1: Orders */}
          {activeTab === "orders" && (
            <div className="space-y-4">
              {/* Order 1 */}
              <div className="p-4 rounded-2xl border border-stone-100 bg-stone-50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-stone-500">Order #HC-8921</span>
                  <span className="bg-amber-100 text-amber-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Clock size={12} /> Dispatched from Shimla
                  </span>
                </div>
                <div className="flex gap-3 items-center mb-2">
                  <img src="/IMAGES/1.jpg" alt="Apple" className="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <h5 className="font-bold text-stone-900 text-sm">Heritage Red Delicious</h5>
                    <p className="text-xs text-stone-500">10 Kg Wooden Crate · ₹2,799</p>
                  </div>
                </div>
                <p className="text-[11px] text-stone-400 flex items-center gap-1 mt-2 pt-2 border-t border-stone-200">
                  Expected Delivery: <span className="font-bold text-stone-700">Tomorrow by 4:00 PM</span>
                </p>
              </div>

              {/* Order 2 */}
              <div className="p-4 rounded-2xl border border-stone-100 bg-stone-50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-stone-500">Order #HC-7832</span>
                  <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 size={12} /> Delivered
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <img src="/IMAGES/2.jpg" alt="Apple" className="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <h5 className="font-bold text-stone-900 text-sm">Golden Orchard Apples</h5>
                    <p className="text-xs text-stone-500">5 Kg Crate · Delivered last week</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Saved Address */}
          {activeTab === "address" && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl border border-brand-green/30 bg-brand-green/[0.02]">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-bold text-brand-green uppercase tracking-wider">Primary Home</span>
                  <span className="text-xs bg-brand-green text-white font-bold px-2 py-0.5 rounded-full">Default</span>
                </div>
                <h5 className="font-bold text-stone-900 text-sm">Rahul Sharma</h5>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Flat 402, Pine Crest Apartments, Sector 14<br />
                  Gurugram, Haryana - 122001<br />
                  Phone: +91 98765 43210
                </p>
              </div>

              <button 
                onClick={() => alert("Address edit dialog will open here.")}
                className="w-full py-3 border-2 border-dashed border-stone-200 rounded-2xl text-xs font-bold text-stone-500 hover:border-brand-green hover:text-brand-green transition-colors"
              >
                + Add New Delivery Location
              </button>
            </div>
          )}

          {/* Action Footer */}
          <div className="mt-8 pt-6 border-t border-stone-100 flex justify-between items-center">
            <button
              onClick={() => {
                alert("You are now signed out.");
                onClose();
              }}
              className="text-xs font-bold text-rose-500 hover:underline"
            >
              Sign Out
            </button>
            <button
              onClick={onClose}
              className="bg-stone-900 text-white font-bold px-6 py-2.5 rounded-full text-xs hover:bg-black transition-colors"
            >
              Done
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
