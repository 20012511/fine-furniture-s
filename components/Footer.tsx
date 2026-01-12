
import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import myImage from '../src/assets/sofa.png';

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-zinc-950 transition-all duration-300 transform hover:-translate-y-1">
    {icon}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 overflow-hidden">
      <div className="relative mb-24">
        <div className="animate-marquee whitespace-nowrap flex py-8 border-y border-white/10">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[120px] md:text-[250px] impact opacity-10 mx-10">FURNISHINGS</span>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-48 md:w-[500px] h-48 md:h-[500px] pointer-events-auto cursor-pointer group">
            <img 
              src={myImage} 
              alt="Floating chair" 
              className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(255,255,255,0.2)] animate-bounce duration-[4000ms] group-hover:scale-110 transition-transform mix-blend-lighten"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-white/10 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-zinc-500 text-sm">
            © <span className="font-bold text-white">Furniture.</span> All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <SocialIcon icon={<Instagram size={20} />} />
            <SocialIcon icon={<Facebook size={20} />} />
            <SocialIcon icon={<Twitter size={20} />} />
            <SocialIcon icon={<Linkedin size={20} />} />
            <SocialIcon icon={<Youtube size={20} />} />
          </div>

          <div className="text-zinc-500 text-sm">
            Design by &nbsp; <span className="font-bold text-white uppercase"> Furniture TM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
