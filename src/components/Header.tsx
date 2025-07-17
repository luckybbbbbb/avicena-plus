import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Clock } from 'lucide-react';
import { scrollToSection } from '../hooks/useSmoothScroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false); // Close mobile menu when clicking a link
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-emerald-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Novi Pazar • 2 lokacije</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Pon-Ned: 07:00-22:00</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+381 20 123 456</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-emerald-600 text-white p-3 rounded-lg mr-3">
              <div className="text-2xl font-bold">A+</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Avicena Plus</h1>
              <p className="text-sm text-emerald-600">29 godina tradicije</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <button onClick={() => handleNavClick('home')} className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Početna</button>
            <button onClick={() => handleNavClick('about')} className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">O nama</button>
            <button onClick={() => handleNavClick('products')} className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Proizvodi</button>
            <button onClick={() => handleNavClick('loyalty')} className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Loyalty program</button>
            <button onClick={() => handleNavClick('locations')} className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Lokacije</button>
            <button onClick={() => handleNavClick('contact')} className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Kontakt</button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button onClick={() => handleNavClick('contact')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Kontaktiraj nas
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <button onClick={() => handleNavClick('home')} className="w-full text-left py-2 text-gray-700 hover:text-emerald-600">Početna</button>
            <button onClick={() => handleNavClick('about')} className="w-full text-left py-2 text-gray-700 hover:text-emerald-600">O nama</button>
            <button onClick={() => handleNavClick('products')} className="w-full text-left py-2 text-gray-700 hover:text-emerald-600">Proizvodi</button>
            <button onClick={() => handleNavClick('loyalty')} className="w-full text-left py-2 text-gray-700 hover:text-emerald-600">Loyalty program</button>
            <button onClick={() => handleNavClick('locations')} className="w-full text-left py-2 text-gray-700 hover:text-emerald-600">Lokacije</button>
            <button onClick={() => handleNavClick('contact')} className="w-full text-left py-2 text-gray-700 hover:text-emerald-600">Kontakt</button>
            <button onClick={() => handleNavClick('contact')} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold mt-4 text-center">
              Kontaktiraj nas
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;