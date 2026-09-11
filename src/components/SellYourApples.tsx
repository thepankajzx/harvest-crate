import React, { useState } from "react";
import { TreePine, CheckCircle2, ShieldCheck, Truck, Banknote, Sparkles, Send, Phone, MessageSquare } from "lucide-react";

export function SellYourApples() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "Shimla, HP",
    varieties: "Royal Delicious & Fuji",
    boxes: "200 - 500 Boxes",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      alert("Aapka bagicha register ho gaya hai! Hamari grower onboarding team 24 ghante ke andar aapko phone ya WhatsApp karegi.");
    }, 1500);
  };

  return (
    <section id="sell-apples" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Subtle Orchard Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(16,132,116,0.2),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(234,179,8,0.12),transparent_55%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-brand-green/20 text-emerald-400 border border-emerald-500/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <TreePine size={14} /> Grower Partner Platform
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Kya Aapko Apne Bagiche Se <br />
            <span className="text-emerald-400">Seb Bechna Hai?</span>
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed font-normal">
            Mandi ke aadat aur bicholiye (middlemen) ki commission ko alvida kaho. <strong>Harvest Crate platform</strong> ke zariye apne bagiche ke seb direct pure desh ke fruit lovers ko becho aur apni mehnat ka poora aur sahi daam pao!
          </p>
        </div>

        {/* 4 Pillars of the Marketplace Platform */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-500/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <Banknote size={24} />
            </div>
            <h4 className="font-bold text-white text-lg mb-2">0% Mandi Commission</h4>
            <p className="text-xs text-stone-300 leading-relaxed font-normal">
              Mandi agent ki deduction khatam. Har box ka rate fair market price par direct customer se milta hai.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-500/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <Truck size={24} />
            </div>
            <h4 className="font-bold text-white text-lg mb-2">Doorstep Orchard Pickup</h4>
            <p className="text-xs text-stone-300 leading-relaxed font-normal">
              Logistics aur packaging box hum provide karte hain. Hamari transport gaadi direct aapke bagiche se pickup karegi.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-500/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <ShieldCheck size={24} />
            </div>
            <h4 className="font-bold text-white text-lg mb-2">Instant 48h Bank Payout</h4>
            <p className="text-xs text-stone-300 leading-relaxed font-normal">
              Box dispatch ke 48 ghante ke andar direct bank account mein full payment. Zero payment udhari ya delay.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-500/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <Sparkles size={24} />
            </div>
            <h4 className="font-bold text-white text-lg mb-2">Digital Grading & Support</h4>
            <p className="text-xs text-stone-300 leading-relaxed font-normal">
              Sugar brix optical testing aur scientific grading support hamari field team kisan bhaiyon ko free deti hai.
            </p>
          </div>

        </div>

        {/* Grower Onboarding Form Box */}
        <div className="max-w-4xl mx-auto bg-stone-950/80 border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">
              Fast Track Onboarding
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Apna Bagicha Register Karein
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm mt-2">
              Form bharein aur hamare Himachal / Kashmir field manager se 24 ghante mein direct connect karein.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                  Aapka Naam (Grower Name)
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rameshwar Thakur"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-stone-500 focus:outline-emerald-500 focus:border-emerald-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98160 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-stone-500 focus:outline-emerald-500 focus:border-emerald-500 font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                  Bagiche Ki Location (District)
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-stone-900 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-emerald-500 font-medium"
                >
                  <option>Shimla / Rohru (HP)</option>
                  <option>Kinnaur (HP)</option>
                  <option>Kullu / Manali (HP)</option>
                  <option>Kotgarh / Thanedhar (HP)</option>
                  <option>Shopian / Pulwama (Kashmir)</option>
                  <option>Other Mountain Region</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                  Mukhya Variety (Apples)
                </label>
                <select
                  value={formData.varieties}
                  onChange={(e) => setFormData({ ...formData, varieties: e.target.value })}
                  className="w-full bg-stone-900 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-emerald-500 font-medium"
                >
                  <option>Royal Delicious & Red Chief</option>
                  <option>Mountain Fuji</option>
                  <option>Golden Delicious</option>
                  <option>Granny Smith</option>
                  <option>Multiple / Mixed Varieties</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                  Estimated Annual Boxes
                </label>
                <select
                  value={formData.boxes}
                  onChange={(e) => setFormData({ ...formData, boxes: e.target.value })}
                  className="w-full bg-stone-900 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-emerald-500 font-medium"
                >
                  <option>50 - 200 Boxes</option>
                  <option>200 - 500 Boxes</option>
                  <option>500 - 1500 Boxes</option>
                  <option>1500+ Commercial Boxes</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-stone-400 flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-400" />
                100% Direct Farmer Contract · Zero Hidden Fees
              </p>

              <button
                type="submit"
                disabled={submitted}
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-extrabold px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                {submitted ? (
                  "Submitting Your Details..."
                ) : (
                  <>
                    <Send size={16} />
                    <span>Submit Orchard Details</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Quick WhatsApp Connect */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
            <span>Direct helpline for orchard owners:</span>
            <a
              href="https://wa.me/919876543210?text=Namaste,%20mujhe%20apne%20bagiche%20ke%20seb%20Harvest%20Crate%20ke%20through%20bechna%20hai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:underline font-bold"
            >
              <MessageSquare size={16} /> WhatsApp: +91 98765 43210
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
