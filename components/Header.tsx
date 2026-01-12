import React, { useState } from 'react'
import { Phone, Menu, X, ArrowRight } from 'lucide-react'

const NavLink: React.FC<{
  children: React.ReactNode
  active?: boolean
  mobile?: boolean
}> = ({ children, active, mobile }) => (
  <a
    href='#'
    className={`transition-all duration-300 px-4 py-2 rounded-full border ${
      mobile
        ? 'text-4xl font-bold uppercase tracking-tighter py-4 flex justify-between items-center border-b border-zinc-100 w-full'
        : 'text-sm tracking-wider uppercase'
    } ${
      active
        ? 'font-bold border-zinc-400 text-zinc-900 bg-zinc-50/50'
        : 'text-zinc-500 border-transparent hover:border-zinc-300 hover:text-zinc-900 hover:bg-zinc-50'
    }`}
  >
    {children}
    {mobile && <ArrowRight size={28} className='text-zinc-300' />}
  </a>
)

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200 py-4 md:py-6 px-4 md:px-12'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-baseline space-x-1 group cursor-pointer z-[60]'>
          <span className='text-2xl md:text-3xl impact uppercase tracking-tighter text-zinc-900'>
            FURNITURE
          </span>
          <span className='text-[10px] font-thin align-top text-zinc-500'>
            TM
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className='hidden lg:flex items-center space-x-6'>
          <NavLink active>Home</NavLink>

          <NavLink>About</NavLink>

          <NavLink>Works</NavLink>

          <NavLink>Gallery</NavLink>

          <NavLink>Service</NavLink>

          <button className='ml-auto flex items-center space-x-2 bg-zinc-900 text-white text-sm font-semibold py-3 px-6 rounded-full border border-zinc-900 hover:bg-transparent hover:text-zinc-900 transition-all duration-300 group'>
            <Phone size={16} />

            <span>Contact Us</span>
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='lg:hidden p-2 text-zinc-900 z-[60] transition-transform active:scale-90'
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Creative Mobile Overlay */}
        <div
          className={`fixed inset-0  w-full bg-white z-[50] flex flex-col transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
            isOpen
              ? 'translate-y-0 opacity-100 pointer-events-auto'
              : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <div className='flex flex-col h-full pt-24 pb-12 bg-white w-full'>
            <span className='px-5 text-xs uppercase tracking-widest text-zinc-400 mb-8 bg-white'>
              Navigation
            </span>

            <nav className='px-5 pb-6 flex flex-col space-y-2 bg-white w-full'>
              <NavLink active mobile>
                Home
              </NavLink>
              <NavLink mobile>About</NavLink>
              <NavLink mobile>Works</NavLink>
              <NavLink mobile>Gallery</NavLink>
              <NavLink mobile>Service</NavLink>
            </nav>

            {/* <div className='mt-auto'>
              <div className='flex flex-col gap-4'>
                <p className='text-zinc-500 text-sm'>Have a project in mind?</p>
                <button className='w-full flex items-center justify-between bg-zinc-900 text-white p-6 rounded-2xl'>
                  <span className='text-xl font-bold'>
                    Start a Conversation
                  </span>
                  <Phone size={24} />
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
