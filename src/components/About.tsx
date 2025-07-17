import React from 'react';
import { Award, Users, Shield, Heart, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      year: "1996",
      title: "Osnivanje prve apoteke",
      description: "Otvaranje prve Avicena Plus apoteke u Novom Pazaru"
    },
    {
      year: "2015",
      title: "Modernizacija",
      description: "Kompletna digitalizacija sistema"
    },
    {
      year: "2020",
      title: "Loyalty program",
      description: "Pokretanje programa lojalnosti"
    },
    {
      year: "2022",
      title: "Otvaranje druge apoteke",
      description: "Proširenje sa drugom lokacijom u Mur ulici"
    },
    {
      year: "2025",
      title: "29 godina tradicije",
      description: "Skoro tri decenije poverenja i tradicije"
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Briga za pacijente",
      description: "Vaše zdravlje je naš glavni prioritet"
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "Pouzdanost",
      description: "29 godina neprekidnog rada i poverenja"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Stručnost",
      description: "Tim iskusnih i licenciranih farmaceuta"
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Dostupnost",
      description: "Radimo 7 dana u nedelji za vas"
    }
  ];

  const certifications = [
    "Licenca Ministarstva zdravlja",
    "ISO 9001:2015 sertifikat",
    "Good Pharmacy Practice",
    "Sertifikat za online prodaju"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="h-8 w-8 text-emerald-600" />
            <span className="text-emerald-600 font-semibold text-lg">29 godina tradicije</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O Avicena Plus apoteci
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Skoro tri decenije predano služimo zdravlju naše zajednice u Novom Pazaru. 
            Naša misija je pružanje najkvalitetnijih farmaceutskih usluga uz personalizovanu pažnju.
          </p>
        </div>

        {/* 28 years badge */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-8 rounded-2xl">
            <div className="text-6xl font-bold mb-2">29</div>
            <div className="text-xl">godina poverenja</div>
            <div className="text-sm opacity-90 mt-2">1996 - 2025</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Naša istorija
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-emerald-300"></div>
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-emerald-600 font-bold text-lg mb-2">{achievement.year}</div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-emerald-600 rounded-full p-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Naše vrednosti
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gray-50 p-4 rounded-full w-fit mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team and certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Team */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Naš tim</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                Naš tim čine iskusni farmaceuti sa dugogodišnjim iskustvom u pružanju 
                farmaceutskih usluga. Svi članovi tima su licencirani i redovno se usavršavaju.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">8</div>
                  <div className="text-sm text-gray-600">farmaceuta</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">godina iskustva</div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Sertifikati i licence</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
              <p className="text-sm text-emerald-700">
                Sve naše licence su aktuelne i redovno se obnavljaju u skladu sa zakonskim propisima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;