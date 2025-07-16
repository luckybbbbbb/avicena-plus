import React, { useState, useEffect } from 'react';
import { Gift, Percent, Star, Users, CreditCard, CheckCircle } from 'lucide-react';
import { scrollToSection } from '../hooks/useSmoothScroll';

const LoyaltyProgram = () => {
  const [pointsCounter, setPointsCounter] = useState(0);
  const [discountCounter, setDiscountCounter] = useState(0);

  useEffect(() => {
    const pointsInterval = setInterval(() => {
      setPointsCounter(prev => prev < 1000 ? prev + 50 : 1000);
    }, 100);

    const discountInterval = setInterval(() => {
      setDiscountCounter(prev => prev < 15 ? prev + 1 : 15);
    }, 200);

    return () => {
      clearInterval(pointsInterval);
      clearInterval(discountInterval);
    };
  }, []);

  const benefits = [
    {
      icon: <Percent className="h-8 w-8 text-emerald-600" />,
      title: "15% popust",
      description: "Na sve proizvode odmah nakon registracije"
    },
    {
      icon: <Gift className="h-8 w-8 text-blue-600" />,
      title: "Bonus pokloni",
      description: "Ekskluzivni pokloni za loyalty članove"
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: "Prioritetno opsluživanje",
      description: "Brža usluga i personalizovana pažnja"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Besplatne konsultacije",
      description: "Stručni saveti naših farmaceuta"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Registracija",
      description: "Popunite jednostavan formular"
    },
    {
      number: "2",
      title: "Aktivacija",
      description: "Potvrdite registraciju u apoteci"
    },
    {
      number: "3",
      title: "Korišćenje",
      description: "Počnite da uživate u benefitima"
    }
  ];

  return (
    <section id="loyalty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Avicena Plus Loyalty Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pristupite ekskluzivnom programu lojalnosti i uživajte u posebnim pogodnostima 
            koje smo pripremili za naše cenjene kupce.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-8 rounded-2xl text-center">
            <div className="text-5xl font-bold mb-2">{pointsCounter}+</div>
            <div className="text-xl">Loyalty bodova mesečno</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl text-center">
            <div className="text-5xl font-bold mb-2">{discountCounter}%</div>
            <div className="text-xl">Guaranteed popust</div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Vaše prednosti
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-white p-4 rounded-full w-fit mx-auto mb-4 shadow-md">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Kako funkcioniše?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute mt-8 w-full">
                    <div className="w-8 h-0.5 bg-emerald-300 mx-auto"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Registration card */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-8 rounded-2xl text-center">
          <div className="max-w-2xl mx-auto">
            <CreditCard className="h-16 w-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Posetite nas za loyalty karticu!</h3>
            <p className="text-xl mb-8 opacity-90">
              Dođite u bilo koju od naših apoteka sa ličnim dokumentom. 
              Registracija je besplatna i traje samo nekoliko minuta.
            </p>
            <button onClick={() => scrollToSection('locations')} className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block">
              Pogledaj lokacije
            </button>
          </div>
        </div>

        {/* Special offers */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Trenutne ponude za članove
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 p-6 rounded-xl border-2 border-emerald-200">
              <CheckCircle className="h-8 w-8 text-emerald-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Vitamin D popust</h4>
              <p className="text-gray-600 mb-4">20% dodatni popust na sve Vitamin D preparate</p>
              <span className="text-sm text-emerald-600 font-semibold">Važi do kraja meseca</span>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
              <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Kozmetika akcija</h4>
              <p className="text-gray-600 mb-4">Kupi 2, plati 1 na selektovanu kozmetiku</p>
              <span className="text-sm text-blue-600 font-semibold">Limitirana ponuda</span>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
              <CheckCircle className="h-8 w-8 text-purple-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Birthday bonus</h4>
              <p className="text-gray-600 mb-4">Poseban popust u mesecu vašeg rođendana</p>
              <span className="text-sm text-purple-600 font-semibold">Celo leto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyProgram;