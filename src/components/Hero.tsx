import React from 'react';
import { Shield, Heart, Award } from 'lucide-react';
import { scrollToSection } from '../hooks/useSmoothScroll';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-emerald-600">
                <Award className="h-6 w-6" />
                <span className="font-semibold">29 godina poverenja</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Vaša zdravlja je naš
                <span className="text-emerald-600 block">prioritet</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Četvrt veka brižljive nege za vašu porodicu. Pristupite našem loyalty programu 
                i uživajte u ekskluzivnim pogodnostima i popustima.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('locations')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                Posetite nas
              </button>
              <button onClick={() => scrollToSection('about')} className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center">
                Saznaj više
              </button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">29</div>
                <div className="text-sm text-gray-600">godina tradicije</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">2</div>
                <div className="text-sm text-gray-600">lokacije</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">15%</div>
                <div className="text-sm text-gray-600">loyalty popust</div>
              </div>
            </div>
          </div>

          {/* Right content - Medical illustration */}
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-8 w-8 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Loyalty kartica</div>
                      <div className="text-sm text-gray-600">Premium član</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-emerald-600">15%</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Heart className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-700">Besplatne konsultacije</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                    <Award className="h-6 w-6 text-emerald-600" />
                    <span className="text-gray-700">Ekskluzivni popusti</span>
                  </div>
                </div>

                <button onClick={() => scrollToSection('locations')} className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-4 rounded-lg text-center hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  <div className="text-lg font-semibold">Posetite nas!</div>
                  <div className="text-sm opacity-90">Za loyalty karticu</div>
                </button>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-emerald-100 p-3 rounded-full animate-bounce">
              <Shield className="h-8 w-8 text-emerald-600" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-100 p-3 rounded-full animate-pulse">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;