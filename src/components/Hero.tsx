import { ArrowRight, ShieldCheck, Truck, Sparkles, Star, TreePine } from "lucide-react";
import { asset } from "../lib/assets";

export function Hero() {
  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-stone-950 text-white overflow-hidden py-16 sm:py-24 lg:py-28">
      {/* Background ambient orchard illumination */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(16,132,116,0.25),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(239,68,68,0.15),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Editorial Typography & Story */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-6 shadow-sm">
              <Sparkles size={14} className="text-emerald-300" /> 2026 Autumn Harvest · 100% Tree Ripened
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              Pure Himalayan Apples. <br />
              <span className="text-emerald-400">Direct From The Orchard.</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-200 font-normal leading-relaxed max-w-2xl mb-8">
              Crisp, intensely juicy apples hand-picked in the cool morning air of Upper Shimla. Zero chemical wax coating, zero commercial cold-storage lockers. Plucked from the tree and delivered to your doorstep.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              <button
                onClick={scrollToProducts}
                className="bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-extrabold py-4 px-8 rounded-full transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 text-base cursor-pointer"
              >
                <span>Shop Fresh Apples</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="#sell-apples"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-4 px-8 rounded-full transition-all text-base flex items-center gap-2"
              >
                <TreePine size={18} className="text-emerald-400" />
                <span>Sell Your Apples</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 w-full max-w-lg">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs font-bold text-white">4.9 / 5 Rating</p>
                <p className="text-[11px] text-stone-400">500+ Farm Families</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-emerald-400 mb-1 font-bold text-sm">
                  <ShieldCheck size={16} /> 100% Raw
                </div>
                <p className="text-xs font-bold text-white">Zero Wax Polish</p>
                <p className="text-[11px] text-stone-400">Edible With Skin</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-emerald-400 mb-1 font-bold text-sm">
                  <Truck size={16} /> 24h Dispatch
                </div>
                <p className="text-xs font-bold text-white">Free Delivery</p>
                <p className="text-[11px] text-stone-400">Cold-Cushioned</p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Definition Orchard Image with High-Contrast Floating Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] sm:aspect-square lg:aspect-[4/5] group">
              <img
                src={asset("IMAGES/2.jpg")}
                alt="Fresh apples on Himalayan orchard tree"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Dark Gradient at bottom to make badge stand out */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Badge on Image with High-Contrast Text */}
              <div className="absolute bottom-6 left-6 right-6 bg-stone-950/90 backdrop-blur-md border border-white/25 p-4 sm:p-5 rounded-2xl shadow-2xl">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-emerald-400 font-extrabold block mb-1">
                      Mountain Harvest
                    </span>
                    <h4 className="font-bold text-base sm:text-lg text-white leading-tight">
                      Golden Orchard & Fuji
                    </h4>
                  </div>
                  <span className="bg-emerald-500 text-stone-950 font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-md shrink-0">
                    Now Plucking
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
