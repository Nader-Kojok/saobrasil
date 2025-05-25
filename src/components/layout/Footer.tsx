import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faLocationDot, 
  faClock,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-orange-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* À propos */}
          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-4">Sao Brasil</h3>
            <p className="text-gray-600 mb-4">
              Depuis 20 ans, nous partageons notre passion des pizzas au feu de bois et des plats de la mer dans une ambiance chaleureuse et familiale à Ngor.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-600 transition-colors"
                aria-label="Suivez-nous sur Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-600 transition-colors"
                aria-label="Suivez-nous sur Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-600 transition-colors"
                aria-label="Contactez-nous sur WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-4">Navigation</h3>
            <nav className="space-y-3">
              <Link 
                href="/"
                className="block text-gray-600 hover:text-orange-600 transition-colors"
              >
                Accueil
              </Link>
              <Link 
                href="/menu"
                className="block text-gray-600 hover:text-orange-600 transition-colors"
              >
                Menu
              </Link>
              <Link 
                href="/contact"
                className="block text-gray-600 hover:text-orange-600 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href="tel:+221338204016"
                className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
              >
                <FontAwesomeIcon icon={faPhone} className="h-4 w-4 mr-3" />
                +221 33 820 40 16
              </a>
              <a 
                href="https://wa.me/221338204016"
                className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4 mr-3" />
                WhatsApp
              </a>
              <a 
                href="mailto:contact@saobrasil.sn"
                className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-3" />
                contact@saobrasil.sn
              </a>
              <p className="flex items-start text-gray-600">
                <FontAwesomeIcon icon={faLocationDot} className="h-4 w-4 mr-3 mt-1" />
                <span>Route de Ngor, Almadies<br />Dakar, Sénégal</span>
              </p>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-4">Horaires</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="h-4 w-4 mr-3" />
                <div>
                  <p className="font-medium">Lundi</p>
                  <p>Fermé</p>
                </div>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="h-4 w-4 mr-3" />
                <div>
                  <p className="font-medium">Mardi - Samedi</p>
                  <p>12h00 - 00h00</p>
                </div>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="h-4 w-4 mr-3" />
                <div>
                  <p className="font-medium">Dimanche</p>
                  <p>09h00 - 00h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-orange-100">
          <div className="text-center text-gray-500 space-y-2">
            <p>
              © {currentYear} Sao Brasil. Tous droits réservés.
            </p>
            <p className="text-sm">
              Développé avec ❤️ par <a href="https://agencearcane.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700">Agence Arcane</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 