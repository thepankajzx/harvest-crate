import { HeartHandshake, Sprout, Home } from "lucide-react";

export function Values() {
  return (
    <section id="story" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold tracking-widest text-brand-green uppercase mb-4 block">Why We Exist</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-dark mb-6">
            Every box does three things. <br />
            <span className="text-stone-600 font-semibold">Not one. Three.</span>
          </h2>
          <p className="text-lg text-stone-600 font-medium">And all three happen every single time you order.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-6">
              <Home size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Your Family Eats Real</h3>
            <p className="text-stone-600 leading-relaxed font-medium">
              Picked this week. No wax, no chemicals, no cold storage. The apple as nature made it.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-6">
              <HeartHandshake size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">A Farmer Earns Fairly</h3>
            <p className="text-stone-600 leading-relaxed font-medium">
              Price decided together with the farmer — never by a commission agent in a mandi. Every rupee reaches the hills.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-6">
              <Sprout size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">The Hills Stay Alive</h3>
            <p className="text-stone-600 leading-relaxed font-medium">
              When farming pays fairly, children stay in school, families stay together, and no son has to leave home to survive.
            </p>
          </div>
          
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-2xl font-serif font-bold text-brand-dark mb-8">"That's not charity. That's just a fairer way to eat."</p>
          <button className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-dark border-2 border-brand-dark rounded-full hover:bg-brand-dark hover:text-white transition-all">
            Read Our Full Story
          </button>
        </div>
      </div>
    </section>
  );
}
