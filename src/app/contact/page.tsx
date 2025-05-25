'use client';

import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';

export default function ContactPage() {
  const handleCall = () => {
    window.location.href = 'tel:+221338200941';
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/221338200941';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-playfair mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accueillir dans les meilleures conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold font-playfair mb-8">Nos Informations</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MdLocationOn className="text-2xl text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Adresse</h3>
                    <p className="text-gray-600">Route de Ngor, Rte de l&apos;Aeroport, Dakar</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <FaPhone className="text-2xl text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Téléphone</h3>
                    <p className="text-gray-600">+221 33 820 09 41</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MdEmail className="text-2xl text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@saobrasil.fr</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  onClick={handleCall}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                  aria-label="Appeler"
                >
                  <FaPhone className="mr-2" />
                  Appeler
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="mr-2" />
                  WhatsApp
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold font-playfair mb-6">Horaires d&apos;ouverture</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-900">Lundi</span>
                  <span className="text-orange-600 font-medium">Fermé</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-900">Mardi</span>
                  <span className="text-orange-600 font-medium">12h00 - 00h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-900">Mercredi</span>
                  <span className="text-orange-600 font-medium">12h00 - 00h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-900">Jeudi</span>
                  <span className="text-orange-600 font-medium">12h00 - 00h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-900">Vendredi</span>
                  <span className="text-orange-600 font-medium">11h30 - 00h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-900">Samedi</span>
                  <span className="text-orange-600 font-medium">12h00 - 00h00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-900">Dimanche</span>
                  <span className="text-orange-600 font-medium">09h00 - 00h00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.05876641711175!2d-17.50771900000003!3d14.748554599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec112ea14407dcd%3A0x925c3fa2c9010a4c!2sSao%20Brasil!5e0!3m2!1sfr!2sfr!4v1710347161811!5m2!1sfr!2sfr"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer"
              title="Google Maps - Localisation Sao Brasil"
              aria-label="Carte Google Maps montrant l'emplacement de Sao Brasil"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 