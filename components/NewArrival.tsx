
import React from 'react';

const NewArrival: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-24 bg-zinc-50">
      <h2 className="text-6xl md:text-[120px] impact leading-none mb-16">NEW ARRIVAL</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 group cursor-pointer">
          <div className="aspect-[4/5] bg-zinc-200 overflow-hidden relative ">
             <img 
               src="https://images.unsplash.com/photo-1620954799930-76530e07ea5b?w=1000&auto=format&fit=crop" 
               alt="Primary arrival" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
             />
          </div>
          <div className="mt-8 flex justify-between items-start">
            <div>
              <p className="text-zinc-400 uppercase tracking-[0.2em] text-xs font-bold mb-2">The Finest Collection</p>
              <h3 className="text-2xl font-bold">Options Starting</h3>
            </div>
            <div className="text-right">
              <p className="text-2xl font-extrabold">$1,200</p>
              <p className="text-sm text-zinc-400">12+ Variants</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-16">
          <div className="group cursor-pointer">
            <div className="aspect-[16/9] bg-zinc-200 overflow-hidden relative ">
              <img 
                 src="https://images.unsplash.com/photo-1632489752865-28346e16cd85?w=800&auto=format&fit=crop" 
                 alt="Arrival side" 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
               />
            </div>
            <div className="mt-6 flex justify-between">
              <h4 className="text-xl font-bold uppercase">Coffee Table</h4>
              <p className="font-bold">$350</p>
            </div>
            <p className="text-sm text-zinc-400 mt-1">Starting from</p>
          </div>

          <div className="group cursor-pointer lg:pt-20">
            <div className="aspect-[16/9] bg-zinc-200 overflow-hidden relative ">
              <img 
                 src="https://images.unsplash.com/photo-1617364852223-75f57e78dc96?w=800&auto=format&fit=crop" 
                 alt="Arrival side 2" 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
               />
            </div>
            <div className="mt-6 flex justify-between">
              <h4 className="text-xl font-bold uppercase">Velvet Chair</h4>
              <p className="font-bold">$420</p>
            </div>
            <p className="text-sm text-zinc-400 mt-1">Starting from</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-24">
        <button className="px-12 py-5 border-2 border-zinc-900 rounded-full hover:bg-zinc-900 hover:text-white transition-all duration-300 font-extrabold uppercase text-lg">
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default NewArrival;
