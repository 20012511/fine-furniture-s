
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trending from './components/Trending';
import NewArrival from './components/NewArrival';
import ShopByRoom from './components/ShopByRoom';
import GetInspired from './components/GetInspired';
import Footer from './components/Footer';
import DesignAssistant from './components/DesignAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="pt-24">
        <Hero />
        <div className="border-t border-zinc-200"></div>
        <Trending />
        <div className="border-t border-zinc-200"></div>
        <NewArrival />
        <div className="border-t border-zinc-200"></div>
        <ShopByRoom />
        <div className="border-t border-zinc-200"></div>
        <GetInspired />
        <Footer />
      </main>
      
      {/* Floating AI Assistant Toggle */}
      <DesignAssistant />
    </div>
  );
};

export default App;
