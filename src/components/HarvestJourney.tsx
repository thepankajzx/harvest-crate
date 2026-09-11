import { Mountain, Sun, Hand, PackageCheck, Truck, Sparkles } from "lucide-react";

export function HarvestJourney() {
  const steps = [
    {
      step: "01",
      title: "Glacier Soil & Mountain Air",
      subtitle: "7,500+ ft Elevation",
      desc: "Our trees grow in mineral-rich Himalayan soil nourished by pure seasonal snowmelt and crisp alpine air.",
      icon: Mountain,
    },
    {
      step: "02",
      title: "Slow Sun & Frost Ripening",
      subtitle: "Zero Chemical Hormones",
      desc: "We don't force ripening with synthetic ethylene gas. Cold mountain nights lock natural sugar crystals deep in the fruit flesh.",
      icon: Sun,
    },
    {
      step: "03",
      title: "Dawn Hand-Plucking",
      subtitle: "Selected One by One",
      desc: "Farmers inspect every apple by hand at daybreak when the fruit is naturally cool and stems are full of hydration.",
      icon: Hand,
    },
    {
      step: "04",
      title: "Eco-Cushioned Packaging",
      subtitle: "Zero Wax · Zero Delay",
      desc: "Apples are tucked into honeycomb shock-absorbent trays within 24 hours of plucking to ensure zero transit bruising.",
      icon: PackageCheck,
    },
    {
      step: "05",
      title: "Direct Doorstep Drop",
      subtitle: "Delivered Across India",
      desc: "Straight from Himachal directly into your fruit bowl. You taste the true crunch as if you plucked it yourself.",
      icon: Truck,
    },
  ];

  return (
    <section id="journey" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green/10 px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles size={14} /> From High Branches to Your Table
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-6 tracking-tight">
            The Orchard Harvest Journey
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed font-normal">
            Supermarket apples take an average of 9 to 12 months through commercial cold storage warehouses before reaching you. Here is how Harvest Crate does it in days:
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-stone-50 border border-stone-100 hover:border-brand-green/40 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <span className="font-mono text-2xl font-bold text-stone-300 group-hover:text-brand-green transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-bold text-brand-dark text-lg mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-brand-green mb-3 uppercase tracking-wider">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="w-full h-1 bg-stone-200 rounded-full mt-6 overflow-hidden">
                  <div className="w-full h-full bg-brand-green origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
