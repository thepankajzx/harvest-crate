import { Star } from "lucide-react";
import { products } from "../data/products";

import { Link } from "react-router-dom";

function ProductCard({ product }: { product: typeof products[0]; key?: string }) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 relative">
      <Link to={`/product/${product.id}`} className="absolute inset-0 z-10" aria-label={`View ${product.title}`}></Link>
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          {product.badge && (
            <span className="bg-brand-dark text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm pointer-events-none">
              {product.badge}
            </span>
          )}
          <span className="bg-rose-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm pointer-events-none">
            Save ₹{product.originalPrice["10 Kg"] - product.price["10 Kg"]}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-sm font-bold text-brand-green uppercase tracking-wider mb-1 pointer-events-none">{product.subtitle}</p>
            <h3 className="text-2xl font-serif text-brand-dark font-bold leading-tight pointer-events-none">{product.title}</h3>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 mb-4 pointer-events-none">
          <div className="flex text-amber-400">
            {[...Array(product.rating)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <span className="text-sm text-stone-500 font-medium ml-2">{product.reviews} reviews</span>
        </div>
        
        <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow pointer-events-none">
          {product.description}
        </p>
        
        <div className="space-y-4 mt-auto">
          <div className="grid grid-cols-2 gap-2 relative z-20">
            <button className="border-2 border-brand-green text-brand-dark rounded-xl py-2 text-sm font-bold bg-brand-green/5 hover:bg-brand-green hover:text-white transition-colors">
              5 Kg<br/>
              <span className="text-xs opacity-80 font-normal line-through mr-1">₹{product.originalPrice["5 Kg"]}</span>
              ₹{product.price["5 Kg"]}
            </button>
            <button className="border-2 border-stone-200 text-stone-500 rounded-xl py-2 text-sm font-bold hover:border-brand-green hover:text-brand-dark transition-colors">
              10 Kg<br/>
              <span className="text-xs opacity-80 font-normal line-through mr-1">₹{product.originalPrice["10 Kg"]}</span>
              ₹{product.price["10 Kg"]}
            </button>
          </div>
          
          <Link to={`/product/${product.id}`} className="block w-full bg-brand-dark text-white text-center font-bold py-3.5 rounded-xl hover:bg-black transition-colors shadow-md relative z-20">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ProductList() {
  return (
    <section id="products" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
            Shop This Season's Harvest
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            We sell only during harvest season. When this stock ends, we wait for nature — no cold storage, no off-season selling.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-dark border-2 border-brand-dark rounded-full hover:bg-brand-dark hover:text-white transition-all">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
