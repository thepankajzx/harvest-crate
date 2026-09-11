export function Gallery() {
  const images = [
    { src: "/IMAGES/1.jpg", title: "Straight From the Hills" },
    { src: "/IMAGES/2.jpg", title: "Picked at Dawn" },
    { src: "/IMAGES/3.jpg", title: "Heritage Orchards" },
    { src: "/IMAGES/4.jpg", title: "Fresh From the Orchard" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-dark mb-4">Orchard Gallery</h2>
          <p className="text-lg text-stone-600 font-medium">Straight from our farms to your table</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl bg-stone-100">
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white font-bold tracking-widest uppercase text-sm">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
