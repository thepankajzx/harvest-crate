import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { useCallback } from "react";
import { cn } from "../lib/utils";

const reviews = [
  {
    id: 1,
    name: "Dr. Shivani Singh",
    product: "Heritage Red Delicious",
    date: "Aug 2025",
    text: "Worth buying direct from orchards. Apples are fresh and crunchy, box design is amazing. Customer service was polite and responsive throughout. Will order again.",
  },
  {
    id: 2,
    name: "Shailja Rana",
    product: "Golden Orchard Apples",
    date: "Sep 2025",
    text: "I used to ask relatives from the hills to bring apples. Now I can order anytime. Honestly, it felt like a blessing. The apples were so fresh.",
  },
  {
    id: 3,
    name: "Aadhya Reddy",
    product: "Mountain Fuji Apples",
    date: "Sep 2025",
    text: "These tasted so different from store bought ones. A couple had small marks on the skin — that just showed they were without colour spray, straight from the farm. Loved them.",
  },
  {
    id: 4,
    name: "Ruchir Lawate",
    product: "Tart Granny Smith",
    date: "Oct 2025",
    text: "I've ordered from Harvest Crate every harvest season since they started. The moment the new batch opens, I pre-order immediately. It's become part of how our family eats.",
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-900/40 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          <div className="lg:w-1/3 flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
              Real Families. <br/>
              <span className="text-emerald-400 font-bold">Real Taste.</span>
            </h2>
            <div className="flex items-end gap-4 mb-4">
              <span className="text-6xl font-serif font-bold leading-none text-white">4.8</span>
              <div className="pb-1">
                <div className="flex text-amber-400 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-sm text-stone-400">Based on 540 verified purchases</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-6">
              <h3 className="text-lg font-bold text-white mb-4">Rating Breakdown</h3>
              <div className="space-y-2 text-sm text-stone-300 font-medium">
                <div className="flex items-center gap-3"><span>5★</span><div className="flex-grow bg-white/10 h-2 rounded-full overflow-hidden"><div className="bg-brand-green h-full w-[80%]" /></div><span>433</span></div>
                <div className="flex items-center gap-3"><span>4★</span><div className="flex-grow bg-white/10 h-2 rounded-full overflow-hidden"><div className="bg-brand-green h-full w-[18%]" /></div><span>102</span></div>
                <div className="flex items-center gap-3"><span>3★</span><div className="flex-grow bg-white/10 h-2 rounded-full overflow-hidden"><div className="bg-brand-green h-full w-[5%]" /></div><span>27</span></div>
                <div className="flex items-center gap-3"><span>2★</span><div className="flex-grow bg-white/10 h-2 rounded-full overflow-hidden"><div className="bg-brand-green h-full w-[1%]" /></div><span>1</span></div>
                <div className="flex items-center gap-3"><span>1★</span><div className="flex-grow bg-white/10 h-2 rounded-full overflow-hidden"><div className="bg-brand-green h-full w-[1%]" /></div><span>1</span></div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white hidden sm:block">What buyers say most</h3>
              <div className="flex gap-2">
                <button onClick={scrollPrev} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={scrollNext} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
            
            <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
              <div className="flex gap-6">
                {reviews.map(review => (
                  <div key={review.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_45%] min-w-0">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full flex flex-col hover:bg-white/10 transition-colors">
                      <div className="flex text-amber-400 mb-4">
                        {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                      </div>
                      <p className="text-lg text-stone-200 leading-relaxed mb-8 flex-grow font-serif">"{review.text}"</p>
                      <div className="border-t border-white/10 pt-6">
                        <p className="font-bold text-white text-base mb-1">{review.name}</p>
                        <div className="flex items-center gap-2 text-xs text-stone-400 font-medium">
                          <CheckCircle2 size={14} className="text-brand-green" />
                          <span>Verified Buyer</span>
                          <span>•</span>
                          <span>{review.product}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Marquee */}
      <div className="border-y border-white/10 bg-white/5 py-4 overflow-hidden mt-12 flex whitespace-nowrap">
        <div className="animate-marquee inline-block whitespace-nowrap flex-none">
          {[...Array(2)].map((_, j) => (
            <span key={j}>
              {["Delhi NCR", "Mumbai & MMR", "Chennai", "Bangalore", "Hyderabad", "Pune", "Kolkata", "Ahmedabad", "Jaipur", "All India Delivery"].map((city, i) => (
                <span key={`${j}-${i}`} className="text-lg font-bold uppercase tracking-widest text-stone-400 mx-8">
                  {city} <span className="text-brand-green mx-8">•</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
