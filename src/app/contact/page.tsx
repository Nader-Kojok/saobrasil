'use client';

import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';

export default function ContactPage() {
  const handleCall = () => {
    window.location.href = 'tel:+33123456789'; // Update with actual phone number
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/33123456789'; // Update with actual WhatsApp number
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
                    <p className="text-gray-600">123 Rue de Paris, 75000 Paris</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <FaPhone className="text-2xl text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Téléphone</h3>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
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
                  <span className="text-gray-900">Lundi - Vendredi</span>
                  <span className="text-orange-600 font-medium">10h00 - 22h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-900">Samedi</span>
                  <span className="text-orange-600 font-medium">11h00 - 23h00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-900">Dimanche</span>
                  <span className="text-orange-600 font-medium">11h00 - 21h00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615674139!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647851226132!5w200"
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