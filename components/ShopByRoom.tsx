
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const rooms = [
  { name: 'Living Room', image: 'https://images.unsplash.com/photo-1656122381069-9ec666d95cf1?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1668089677938-b52086753f77?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Office', image: 'https://images.unsplash.com/photo-1674694773977-0fd9a6e983d3?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Dining Room', image: 'https://images.unsplash.com/photo-1710005897739-1f174b24de63?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Kitchen Room', image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1200&auto=format&fit=crop' },
];

const ShopByRoom: React.FC = () => {
  const [activeRoom, setActiveRoom] = useState(rooms[0]);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
      <h2 className="text-6xl md:text-[120px] impact leading-none mb-20 uppercase">
        BEST SHOP BY <br /> ROOM
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="w-full lg:w-1/3">
          {rooms.map((room) => (
            <button
              key={room.name}
              onMouseEnter={() => setActiveRoom(room)}
              className={`w-full flex justify-between items-center py-6 border-b transition-all duration-300 group ${
                activeRoom.name === room.name ? 'border-zinc-900 scale-[1.02]' : 'border-zinc-200 opacity-60 hover:opacity-100'
              }`}
            >
              <span className={`text-2xl md:text-3xl font-light uppercase tracking-tight group-hover:font-bold transition-all`}>
                {room.name}
              </span>
              <ArrowUpRight 
                size={32} 
                className={`transition-transform duration-500 group-hover:rotate-45 ${
                  activeRoom.name === room.name ? 'text-zinc-900 opacity-100' : 'opacity-0'
                }`} 
              />
            </button>
          ))}
        </div>

        <div className="w-full lg:w-2/3 relative">
          <div className="aspect-[4/3]  overflow-hidden bg-zinc-100 transition-all duration-700 ease-in-out">
            <img 
              src={activeRoom.image} 
              alt={activeRoom.name} 
              className="w-full h-full object-cover animate-in fade-in zoom-in duration-700"
              key={activeRoom.name}
            />
          </div>
          
          {/* Animated Spinner Decorative element */}
          {/* <div className="absolute -bottom-10 -right-10 w-40 h-40 hidden xl:flex items-center justify-center ">
            <div className="w-full h-full border-4 border-zinc-200 border-t-zinc-900 rounded-full animate-spin bg-white"></div>
            <span className="absolute impact text-xs">FURNITURE</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ShopByRoom;
