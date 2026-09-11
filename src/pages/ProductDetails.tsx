import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { 
  ArrowLeft, 
  Check, 
  ShieldCheck, 
  Truck, 
  Leaf, 
  Heart, 
  Mountain, 
  Sun, 
  Sparkles, 
  Utensils, 
  BadgeCheck,
  PackageCheck
} from "lucide-react";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [selectedWeight, setSelectedWeight] = useState<"5 Kg" | "10 Kg">("5 Kg");
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button onClick={() => navigate("/")} className="text-brand-green font-bold">
          &larr; Back to Home
        </button>
      </div>
    );
  }

  const price = product.price[selectedWeight];
  const originalPrice = product.originalPrice[selectedWeight];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      weight: selectedWeight,
      price: price,
      quantity: 1,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleOrderNow = () => {
    handleAddToCart();
    alert(`Order for ${product.title} (${selectedWeight}) placed in demo mode!`);
  };

  const renderMeter = (value: number) => {
    return (
      <div className="flex gap-1 items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`h-2.5 w-6 rounded-full transition-all ${
              i <= value ? "bg-brand-green" : "bg-stone-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-stone-50/50 min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <button 
          onClick={() => navigate("/")}
          className="inline-flex items-center text-stone-500 hover:text-brand-green font-semibold mb-8 transition-colors group"
        >
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Orchard Store
        </button>

        {/* Top Product Hero Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-100 mb-14">
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            
            {/* Product Image */}
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-md border border-stone-100 relative group">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-brand-dark/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </span>
                )}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-stone-800 flex items-center gap-1.5 shadow-sm">
                  <BadgeCheck size={16} className="text-brand-green" /> 100% Tree Ripened · Zero Wax
                </div>
              </div>
            </div>

            {/* Product Purchase Column */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
                  Farm Fresh Batch
                </span>
                <span className="text-xs text-stone-400 font-medium">· Rated 5.0 ★ ({product.reviews} customer reviews)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold text-brand-dark mb-2 tracking-tight">
                {product.title}
              </h1>
              <p className="text-lg text-stone-500 font-medium mb-6">{product.subtitle}</p>
              
              {/* Pricing */}
              <div className="flex items-baseline gap-3 mb-6 bg-stone-50 p-4 rounded-2xl border border-stone-100">
                <span className="text-4xl font-extrabold text-brand-green">₹{price}</span>
                <span className="text-lg text-stone-400 line-through font-medium">₹{originalPrice}</span>
                <span className="ml-auto text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md">
                  Save ₹{originalPrice - price}
                </span>
              </div>

              <p className="text-stone-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Weight Selector */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">Select Crate Size</h3>
                  <span className="text-xs text-brand-green font-semibold">Includes secure protective packaging</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {(["5 Kg", "10 Kg"] as const).map((weight) => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`py-3.5 px-4 rounded-2xl border-2 font-bold text-base transition-all flex flex-col items-center gap-1 ${
                        selectedWeight === weight
                          ? "border-brand-green bg-brand-green/5 text-brand-green shadow-sm"
                          : "border-stone-200 text-stone-600 hover:border-brand-green/30"
                      }`}
                    >
                      <span>{weight} Crate</span>
                      <span className="text-xs font-normal text-stone-500">₹{product.price[weight]} (Free delivery)</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={handleAddToCart}
                  disabled={added}
                  className={`flex-1 py-4 px-6 rounded-full font-bold text-base transition-all flex items-center justify-center border-2 shadow-sm ${
                    added 
                      ? "bg-green-600 border-green-600 text-white" 
                      : "border-brand-green text-brand-green hover:bg-brand-green/5"
                  }`}
                >
                  {added ? <><Check size={20} className="mr-2"/> Added to Cart</> : "Add to Cart"}
                </button>
                <button 
                  onClick={handleOrderNow}
                  className="flex-1 py-4 px-6 bg-brand-green text-white rounded-full font-bold text-base hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
                >
                  Order Now (Instant Checkout)
                </button>
              </div>

              {/* Assurance Trust Badges */}
              <div className="grid grid-cols-3 gap-3 border-t border-stone-100 pt-6">
                <div className="flex flex-col items-center text-center">
                  <ShieldCheck className="text-brand-green mb-1" size={22} />
                  <span className="text-[11px] font-bold text-stone-700">Safe Checkout</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Truck className="text-brand-green mb-1" size={22} />
                  <span className="text-[11px] font-bold text-stone-700">Doorstep Delivery</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Leaf className="text-brand-green mb-1" size={22} />
                  <span className="text-[11px] font-bold text-stone-700">100% Natural</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* SECTION 1: What is this fruit? (Taste Profile & About) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 sm:p-10 border border-stone-100 shadow-sm">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-green uppercase tracking-widest mb-3">
              <Sparkles size={16} /> Variety Heritage
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
              About the {product.title}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6 font-normal">
              {product.aboutFruit}
            </p>
            <div className="bg-stone-50 border border-stone-200/60 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-2">
                Why It Tastes Better Than Supermarket Apples:
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                Most commercial store apples spend up to 10 months inside industrial cold-storage lockers and are polished with petroleum wax to fake shine. Our apples are plucked when naturally sweet, never waxed, and reach you direct from the tree within days.
              </p>
            </div>
          </div>

          {/* Taste Meter Card */}
          <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-green uppercase tracking-widest mb-3">
                <Utensils size={16} /> Flavor Matrix
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-6">Taste & Texture Profile</h3>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm font-semibold text-stone-700 mb-1.5">
                    <span>Sweetness</span>
                    <span>{product.tasteProfile.sweetness} / 5</span>
                  </div>
                  {renderMeter(product.tasteProfile.sweetness)}
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-stone-700 mb-1.5">
                    <span>Crisp Crunch</span>
                    <span>{product.tasteProfile.crispness} / 5</span>
                  </div>
                  {renderMeter(product.tasteProfile.crispness)}
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-stone-700 mb-1.5">
                    <span>Juiciness</span>
                    <span>{product.tasteProfile.juiciness} / 5</span>
                  </div>
                  {renderMeter(product.tasteProfile.juiciness)}
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-stone-700 mb-1.5">
                    <span>Tanginess / Tart</span>
                    <span>{product.tasteProfile.tanginess} / 5</span>
                  </div>
                  {renderMeter(product.tasteProfile.tanginess)}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 text-xs text-stone-500 font-medium flex items-center gap-2">
              <Sun size={18} className="text-amber-500 shrink-0" />
              Sugar levels measured in real-time with optical refractometers.
            </div>
          </div>
        </div>

        {/* SECTION 2: Health & Nutritional Benefits */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-100 shadow-sm mb-14">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green/10 px-3.5 py-1.5 rounded-full mb-3">
              <Heart size={14} /> Health & Wellness
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-3">
              Key Health Benefits
            </h2>
            <p className="text-stone-500 text-base">
              One of nature's most complete superfoods, loaded with essential flavonoids, micronutrients, and prebiotic fiber.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-brand-green/40 hover:bg-brand-green/[0.02] transition-all flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={20} className="stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-dark mb-1">{benefit.title}</h4>
                  <p className="text-sm text-stone-600 leading-relaxed font-normal">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: How is it Harvested? (Kese harvest krte hain) */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-14 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-green bg-white/10 px-3.5 py-1.5 rounded-full mb-4">
              <Mountain size={14} /> Ethical Mountain Farming
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How We Harvest Your Apples
            </h2>
            <p className="text-stone-300 text-base mb-10 leading-relaxed">
              Every apple is grown by generational hill-farming families using ancient orchard practices paired with precision natural harvesting.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-l-2 border-brand-green pl-4">
                <span className="text-xs uppercase tracking-widest text-stone-400 font-bold block mb-1">
                  1. Orchard Altitude
                </span>
                <p className="text-white font-semibold">{product.harvestProcess.altitude}</p>
                <p className="text-xs text-stone-400 mt-1">High altitude means cold nights that lock in natural sweetness.</p>
              </div>

              <div className="border-l-2 border-brand-green pl-4">
                <span className="text-xs uppercase tracking-widest text-stone-400 font-bold block mb-1">
                  2. Hand Plucked
                </span>
                <p className="text-white font-semibold">{product.harvestProcess.harvestMethod}</p>
                <p className="text-xs text-stone-400 mt-1">Zero machine shaking; every stem is inspected by farmers.</p>
              </div>

              <div className="border-l-2 border-brand-green pl-4">
                <span className="text-xs uppercase tracking-widest text-stone-400 font-bold block mb-1">
                  3. Pure & Unwaxed
                </span>
                <p className="text-white font-semibold">{product.harvestProcess.chemicalFree}</p>
                <p className="text-xs text-stone-400 mt-1">Edible right out of the crate after a light water rinse.</p>
              </div>

              <div className="border-l-2 border-brand-green pl-4">
                <span className="text-xs uppercase tracking-widest text-stone-400 font-bold block mb-1">
                  4. Tree-to-Crate Speed
                </span>
                <p className="text-white font-semibold">{product.harvestProcess.dispatchTime}</p>
                <p className="text-xs text-stone-400 mt-1">Zero transit warehousing delays for peak crispness.</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-16 -bottom-16 opacity-10 pointer-events-none text-white">
            <Mountain size={380} />
          </div>
        </div>

        {/* SECTION 4: Best Ways to Enjoy */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-100 shadow-sm">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-green uppercase tracking-widest mb-3">
            <Utensils size={16} /> Culinary Tips
          </div>
          <h3 className="text-2xl font-bold text-brand-dark mb-6">
            Recommended Ways to Enjoy
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.bestWaysToEat.map((tip, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-100">
                <span className="w-7 h-7 rounded-full bg-brand-green text-white font-bold text-xs flex items-center justify-center mb-3">
                  0{idx + 1}
                </span>
                <p className="text-stone-700 text-sm font-medium leading-relaxed">
                  {tip}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-10 pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-brand-dark text-lg">Ready to taste true orchard freshness?</p>
              <p className="text-sm text-stone-500">Fast delivery straight to your doorstep across India.</p>
            </div>
            <button
              onClick={handleOrderNow}
              className="bg-brand-green hover:bg-emerald-800 text-white font-bold px-8 py-3.5 rounded-full shadow-md transition-all text-sm"
            >
              Order {product.title} Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
