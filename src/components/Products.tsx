import React from "react";
import { Pill, Heart, Baby, Flower, Shield, Stethoscope } from "lucide-react";

const Products = () => {
  const categories = [
    {
      icon: <Pill className="h-8 w-8 text-emerald-600" />,
      title: "Lekovi na recept",
      description: "Kompletan asortiman lekova sa medicinskim receptom",
      items: [
        "Antibiotici",
        "Srčani lekovi",
        "Dijabetes terapija",
        "Neurologija",
      ],
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "OTC proizvodi",
      description: "Lekovi dostupni bez recepta za svakodnevne potrebe",
      items: ["Analgetici", "Vitamini", "Probiotici", "Sirupi za kašalj"],
    },
    {
      icon: <Baby className="h-8 w-8 text-blue-600" />,
      title: "Za bebe i decu",
      description: "Specijalizovani proizvodi za najmlađe",
      items: ["Bebi kozmetika", "Dečiji vitamini", "Mlečne formule", "Pelene"],
    },
    {
      icon: <Flower className="h-8 w-8 text-purple-600" />,
      title: "Kozmetika",
      description: "Visokokvalitetna kozmetika i nega",
      items: ["Kremi za lice", "Parfemi", "Šamponi", "Nega kose"],
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Medicinski pribor",
      description: "Medicinska oprema i pomagala",
      items: ["Termometri", "Aparati za pritisak", "Štakovi", "Bandaže"],
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-teal-600" />,
      title: "Dijetetski suplementi",
      description: "Prirodni dodatci ishrani",
      items: ["Omega 3", "Multivitamini", "Proteini", "Minerali"],
    },
  ];

  const services = [
    {
      title: "Farmaceutske konsultacije",
      description:
        "Besplatni saveti naših farmaceuta o pravilnoj upotrebi lekova",
      highlight: "Besplatno za loyalty članove",
    },
    {
      title: "Merenje pritiska",
      description: "Brzo i precizno merenje krvnog pritiska",
      highlight: "Dostupno u obe apoteke",
    },
    {
      title: "Online konsultacije",
      description: "Saveti farmaceuta putem video poziva",
      highlight: "Nova usluga",
    },
    {
      title: "Dostava lekova",
      description: "Besplatna dostava za loyalty članove u gradu",
      highlight: "15% popust + dostava",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50" itemScope itemType="https://schema.org/Service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" itemProp="name">
            Proizvodi i usluge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Širok asortiman farmaceutskih proizvoda i stručne usluge prilagođene
            vašim potrebama. Sve uz loyalty popuste i profesionalnu podršku.
          </p>
        </div>

        {/* Product categories */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Kategorije proizvoda
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gray-50 p-4 rounded-full w-fit mb-4">
                  {category.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h4>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Special offers */}
      </div>
    </section>
  );
};

export default Products;
