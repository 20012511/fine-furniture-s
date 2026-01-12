
import React from 'react';

const InspirationCard: React.FC<{ src: string; title: string }> = ({ src, title }) => (
  <div className="group relative overflow-hidden cursor-pointer">
    <div className="aspect-[3/4] overflow-hidden">
      <img 
        src={src} 
        alt={title} 
        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
      />
    </div>
    <div className="mt-6 text-center">
      <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
    </div>
  </div>
);

const GetInspired: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
      <h2 className="text-6xl md:text-[120px] impact leading-none mb-16 text-center">GET INSPIRED</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <InspirationCard 
          src="https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?q=80&w=800&auto=format&fit=crop" 
          title="Modern Collection 2025" 
        />
        <InspirationCard 
          src="https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?q=80&w=800&auto=format&fit=crop" 
          title="Luxury Furniture 2026" 
        />
      </div>
    </section>
  );
};

export default GetInspired;
