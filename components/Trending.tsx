
import React from 'react';

const ProductCard: React.FC<{ src: string; price: string; pos: string }> = ({ src, price, pos }) => (
  <div className="group relative overflow-hidden bg-zinc-100 h-[500px] cursor-pointer">
    <img 
      src={src} 
      alt="Furniture product" 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
    />
    <div className={`absolute ${pos} bg-white/95 px-8 py-4 rounded-full font-bold shadow-lg group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300`}>
      ${price}
    </div>
  </div>
);

const Trending: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <h2 className="text-6xl md:text-[120px] impact leading-[0.85] uppercase">
          FOR TRENDING <br /> NOW
        </h2>
        <button className="px-8 py-4 border border-zinc-900 rounded-full hover:bg-zinc-900 hover:text-white transition-all duration-300 font-bold uppercase tracking-wider text-sm">
          See All Products
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <ProductCard 
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&auto=format&fit=crop" 
            price="550" 
            pos="bottom-6 left-6" 
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductCard 
              src="https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=800&auto=format&fit=crop" 
              price="1,000" 
              pos="bottom-6 left-6" 
            />
            <ProductCard 
              src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop" 
              price="260" 
              pos="bottom-6 left-6" 
            />
          </div>
          <div className="mt-4">
            <h3 className="text-3xl impact uppercase mb-4 tracking-wide">Cutting-edge <br /> Furniture Trends</h3>
            <p className="text-zinc-500 max-w-sm leading-relaxed">
              Our designs merge modern aesthetics with ergonomic comfort, ensuring every piece tells a story of craftsmanship and sophisticated style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
