import React from 'react';
import { MapPin, Clock, Phone, Car, Bus } from 'lucide-react';
import murPharmacy from '../images/avicena_plus_mur.jpeg';
import generalZivkovicPharmacy from '../images/avicena-plus-vuk.jpeg';
import OpenStreetMap from './OpenStreetMap';

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: "Avicena Plus - Generala Živkovića",
      address: "Generala Živkovića 135, Novi Pazar",
      phone: "020 387343",
      hours: "07:30 - 22:00",
      description: "Glavna apoteka u centru grada sa kompletnim asortimentom",
      features: ["Brza usluga", "Parking dostupan", "Pristupačna lokacija"],
      image: generalZivkovicPharmacy
    },
    {
      id: 2,
      name: "Avicena Plus - Mur",
      address: "Mur br. 279, Novi Pazar",
      phone: "020 382500",
      hours: "07:30 - 22:00",
      description: "Apoteka u Mur ulici, idealna za stanovnike tog dela grada",
      features: ["Brza usluga", "Parking dostupan", "Pristupačna lokacija"],
      image: murPharmacy
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

        {/* Google Map */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Interaktivna mapa</h3>
            <p className="text-gray-600">Obe naše lokacije u Novom Pazaru</p>
          </div>
          <OpenStreetMap />
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
       
      </div>
    </section>
  );
};

export default Locations;