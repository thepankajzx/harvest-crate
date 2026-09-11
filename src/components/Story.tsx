export function Story() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
              <img 
                src="/IMAGES/5.jpg" 
                alt="Our Founders in the Orchard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-8 border-white/10 rounded-3xl z-10 pointer-events-none" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-block border-b-2 border-brand-green pb-1">
              <span className="text-sm font-bold tracking-widest text-brand-green uppercase">Where Harvest Crate Began</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-dark leading-[1.1]">
              They are 75. <br />
              <span className="text-stone-600 font-bold">They still walk to the orchard every morning.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-medium">
              <p>
                Our founders' grandparents have cared for their orchard for over five decades, growing real apples the honest way. Watching farmers like them go undervalued for a lifetime of work is the reason Harvest Crate exists.
              </p>
              <p>
                So we built a collective of farming families who send fruit straight to you — exactly as it leaves the tree. No wax, no cold storage, and a fairer deal for the people who grow it.
              </p>
              <p>
                A good apple doesn't need any dressing up — and the family that grew it deserves to be the ones who benefit. That's the whole reason we exist.
              </p>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a href="#products" className="inline-flex justify-center px-8 py-4 text-base font-bold text-white bg-brand-green rounded-full hover:bg-emerald-800 transition-all shadow-md hover:shadow-lg">
                Order Fresh This Season
              </a>
              <a href="#" className="text-brand-dark font-bold hover:text-brand-green transition-colors border-b border-transparent hover:border-brand-green pb-1">
                Read the full story &rarr;
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
