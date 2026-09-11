
export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-6">Harvest Crate</h3>
            <p className="font-medium leading-relaxed max-w-md mb-6">
              At Harvest Crate, we specialize in delivering fresh, high-quality apples directly from our farms nestled in the picturesque hills. No wax, no cold storage, just nature's best.
            </p>
            <div className="space-y-2">
              <p className="text-stone-300"><strong>Email:</strong> support@harvestcrate.com</p>
              <p className="text-stone-300"><strong>Phone:</strong> +91 98765 43210</p>
              <p className="text-stone-300"><strong>Address:</strong> Orchard Valley, Shimla Hills</p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Explore</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="/" className="hover:text-brand-green transition-colors">Home</a></li>
              <li><a href="/#products" className="hover:text-brand-green transition-colors">Shop Apples</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Rent A Tree</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Contact & Support</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-brand-green transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <p>Copyright © 2026 Harvest Crate. All rights reserved.</p>
          <p className="flex items-center">Made with <span className="text-rose-500 mx-1">♥</span> for farming families</p>
        </div>
      </div>
    </footer>
  );
}
