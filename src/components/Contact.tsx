import React, { useState } from 'react';
import { Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Kontaktirajte nas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Imamo pitanje o lekovima, loyalty programu ili našim uslugama? 
            Naš stručni tim je tu da vam pomogne.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Pošaljite nam poruku</h3>
            
            {isSubmitted && (
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg mb-6 flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
                <span className="text-emerald-700">Hvala vam! Vaša poruka je uspešno poslata.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ime i prezime *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Vaše ime i prezime"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Vaš broj telefona"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email adresa *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="vaš@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Poruka *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                  placeholder="Opišite vaše pitanje ili potrebu..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Pošalji poruku</span>
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontakt informacije</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefon</h4>
                    <p className="text-gray-600">Centar: +381 20 123 456</p>
                    <p className="text-gray-600">Autobuska: +381 20 123 457</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@avicenaplus.rs</p>
                    <p className="text-gray-600">loyalty@avicenaplus.rs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Radno vreme</h4>
                    <p className="text-gray-600">Ponedeljak - Nedelja</p>
                    <p className="text-gray-600">07:00 - 22:00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MessageCircle className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Farmaceutske konsultacije</h4>
                    <p className="text-gray-600">Besplatne konsultacije u apoteci</p>
                    <p className="text-gray-600">Pozovite za zakazivanje termina</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency contact */}
            <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
              <h4 className="font-semibold text-red-900 mb-2">Hitni slučajevi</h4>
              <p className="text-red-700 text-sm mb-3">
                Za hitne medicinske slučajeve pozovite:
              </p>
              <div className="text-red-900 font-bold text-lg">194 - Hitna pomoć</div>
              <div className="text-red-900 font-bold text-lg">192 - Policija</div>
            </div>

            {/* Loyalty program info */}
            <div className="bg-emerald-50 p-6 rounded-xl border-2 border-emerald-200">
              <h4 className="font-semibold text-emerald-900 mb-2">Loyalty program</h4>
              <p className="text-emerald-700 text-sm mb-3">
                Za registraciju loyalty kartice posetite bilo koju od naših apoteka sa ličnim dokumentom.
              </p>
              <p className="text-emerald-700 text-sm">
                Registracija je besplatna i odmah možete koristiti 15% popust!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;