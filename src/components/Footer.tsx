import React from "react";
import {  Phone, Clock, Mail, Instagram } from "lucide-react";
import { scrollToSection } from "../hooks/useSmoothScroll";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-600 text-white p-2 rounded-lg">
                <div className="text-xl font-bold">A+</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Avicena Plus</h3>
                <p className="text-emerald-400 text-sm">25 godina tradicije</p>
              </div>
            </div>
            <p className="text-gray-400">
              Vaš partner za zdravlje u Novom Pazaru. Četvrt veka pružamo
              najkvalitetnije farmaceutske usluge uz personalizovanu pažnju.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/avicenaplus/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Brzi linkovi</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Početna
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  O nama
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Proizvodi
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("loyalty")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Loyalty program
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("locations")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Lokacije
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Naše lokacije</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-emerald-400">
                  Generala Živkovića
                </h5>
                <p className="text-gray-400 text-sm">
                  Generala Živkovića, Novi Pazar 36300
                </p>
                <p className="text-gray-400 text-sm">020 387343</p>
              </div>
              <div>
                <h5 className="font-medium text-emerald-400">Mur</h5>
                <p className="text-gray-400 text-sm">
                  Mur br. 279, Novi Pazar 36300
                </p>
                <p className="text-gray-400 text-sm">020 382500</p>
              </div>
            </div>
          </div>

          {/* Contact and hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt informacije</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-emerald-400" />
                <div>
                  <p className="text-sm text-gray-400">Radnim danima</p>
                  <p className="text-white">07:00 - 22:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <div>
                  <p className="text-sm text-gray-400">Centrala</p>
                  <p className="text-white">+381 20 123 456</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">info@avicenaplus.rs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Avicena Plus. Sva prava zadržana.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Privatnost
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Uslovi korišćenja
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Cookie policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
