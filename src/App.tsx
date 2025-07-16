import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import LoyaltyProgram from './components/LoyaltyProgram';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <LoyaltyProgram />
      <Locations />
      {/* <Contact /> */}
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;