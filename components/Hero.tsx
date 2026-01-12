import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className='max-w-[1600px] mx-auto px-4 md:px-6 py-12 md:py-20 overflow-hidden'>
      <div className='flex flex-col'>
        {/* Top Row: Changed items-end to items-start for mobile left align */}
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-8'>
          <h1 className='text-[clamp(4rem,20vw,20rem)] impact leading-[0.8] tracking-tighter text-zinc-900 select-none text-left'>
            FINE
          </h1>

          {/* Image: Added order-last for mobile, md:order-none to reset on desktop */}
          <div className='w-full md:w-[50%] md:h-[35vh] overflow-hidden hidden md:block'>
            <img
              src='https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop'
              alt='Elegant living room'
              className='w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-in-out'
            />
          </div>
        </div>

        {/* Bottom Row: Changed text-center to text-left for mobile */}
        <div className='w-full mt-[2vw] md:mt-[4vw]'>
          <h1 className='text-[clamp(4rem,20vw,20rem)] impact leading-[0.8] tracking-tighter text-zinc-900 select-none text-left'>
            FURNISHINGS
          </h1>
        </div>

        {/* Description and CTA */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-end mt-12 gap-8 px-2'>
          <div className='max-w-xl'>
            <p className='text-lg md:text-xl text-zinc-600 leading-relaxed font-light'>
              Choosing the right furniture for your home online will add
              elegance and functionality to your space. We offer a curated
              collection of fine furnishing tailored for modern living.
            </p>
          </div>

          {/* Button: Stays above the image on mobile because image has order-last */}
          <button className='group flex items-center space-x-3 md:space-x-6 bg-zinc-900 text-white text-base md:text-xl font-bold py-3 px-6 md:py-6 md:px-12 rounded-full border border-zinc-900 hover:bg-transparent hover:text-zinc-900 transition-all duration-500 shadow-xl'>
            <span>Shop Now</span>
            <div className='p-1 md:p-2 text-white group-hover:text-zinc-900 transition-all duration-500 group-hover:rotate-45'>
              {/* Set a smaller size for mobile and larger for desktop */}
              <ArrowRight className='w-5 h-5 md:w-6 md:h-6' />
            </div>
          </button>
        </div>
      </div>
      <div className='pt-6 px-2 w-full md:w-[50%] md:h-[35vh] overflow-hidden block md:hidden'>
        <img
          src='https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop'
          alt='Elegant living room'
          className='w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-in-out'
        />
      </div>
    </section>
  )
}

export default Hero
