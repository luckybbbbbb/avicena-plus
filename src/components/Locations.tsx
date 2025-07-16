import React from 'react';
import { MapPin, Clock, Phone, Car, Bus } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: "Avicena Plus - Generala Živkovića",
      address: "Generala Živkovića, Novi Pazar 36300",
      phone: "020 387343",
      hours: "07:30 - 22:00",
      description: "Glavna apoteka u centru grada sa kompletnim asortimentom",
      features: ["Veliki parking", "Pristup za invalide", "Digitalno čekanje"],
      image: "https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      name: "Avicena Plus - Mur",
      address: "Mur br. 279, Novi Pazar 36300",
      phone: "020 382500",
      hours: "07:30 - 22:00",
      description: "Apoteka u Mur ulici, idealna za stanovnike tog dela grada",
      features: ["24h hitna ambulanta", "Brza usluga", "Parking dostupan"],
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Naše lokacije
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dve strategijski pozicionirane apoteke u Novom Pazaru za vašu lakšu dostupnost. 
            Obe lokacije rade produženim radnim vremenom.
          </p>
        </div>

        {/* Map placeholder */}
        <div className="bg-gray-200 h-96 rounded-2xl mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Interaktivna mapa</h3>
              <p>Obe naše lokacije u Novom Pazaru</p>
            </div>
          </div>
          
          {/* Location pins */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-emerald-600 text-white p-3 rounded-full shadow-lg animate-pulse">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="text-xs text-center mt-1 bg-white px-2 py-1 rounded shadow">Generala Živkovića</div>
          </div>
          
          <div className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2">
            <div className="bg-blue-600 text-white p-3 rounded-full shadow-lg animate-pulse">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="text-xs text-center mt-1 bg-white px-2 py-1 rounded shadow">Mur</div>
          </div>
        </div>

        {/* Locations grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {locations.map((location) => (
            <div key={location.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${location.image})`}}>
                <div className="h-full bg-black bg-opacity-40 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold">{location.name}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">{location.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">{location.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">{location.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">Radnim danima: {location.hours}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Pogodnosti:</h4>
                  <div className="space-y-2">
                    {location.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                    Pozovi
                  </button>
                  <button className="flex-1 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white py-2 px-4 rounded-lg font-semibold transition-all">
                    Navigacija
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transportation info */}
        <div className="bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Kako do nas?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Car className="h-8 w-8 text-emerald-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Automobilom</h4>
                <p className="text-gray-600">
                  Obe lokacije imaju dostupan parking. Centar grada je udaljen 5 minuta 
                  od glavnih saobraćajnica.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Bus className="h-8 w-8 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Javnim prevozom</h4>
                <p className="text-gray-600">
                  Lokacija kod autobuske stanice je direktno dostupna svim linijama, 
                  a centar grada je udaljen 10 minuta pešice od glavne stanice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;