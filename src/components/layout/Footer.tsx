import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faInstagram, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faPhone, 
  faLocationDot, 
  faClock 
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-orange-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-4">Sao Brasil</h3>
            <p className="text-gray-600 mb-4">
              Des pizzas artisanales préparées avec passion et des ingrédients de qualité.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 transition-colors"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 transition-colors"
                aria-label="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <FontAwesomeIcon icon={faPhone} className="h-4 w-4 mr-2" />
                <a href="tel:+1234567890">+1 234 567 890</a>
              </p>
              <p className="flex items-center text-gray-600">
                <FontAwesomeIcon icon={faLocationDot} className="h-4 w-4 mr-2" />
                123 Rue de la Pizza, 75000 Paris
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-4">Horaires</h3>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="h-4 w-4 mr-2" />
                Lun - Ven: 11h - 22h
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="h-4 w-4 mr-2" />
                Sam - Dim: 11h - 23h
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-100 pt-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Sao Brasil. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 