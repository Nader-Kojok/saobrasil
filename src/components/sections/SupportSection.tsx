import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faGoogle
} from '@fortawesome/free-brands-svg-icons';
import { Button } from '@/components/ui/button';

export const SupportSection = () => {
  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-playfair mb-6">
            Soutenez Sao Brasil
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Votre soutien compte énormément pour nous ! Partagez votre expérience et suivez-nous sur les réseaux sociaux pour rester informé de nos actualités.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Avis Google */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <FontAwesomeIcon 
                icon={faGoogle} 
                className="h-12 w-12 text-primary mb-4" 
              />
              <h3 className="text-2xl font-bold mb-4">Laissez un avis</h3>
              <p className="text-gray-600 mb-6">
                Votre avis aide d&apos;autres clients à découvrir notre restaurant. Partagez votre expérience sur Google !
              </p>
              <a
                href="https://g.page/r/votre-id-google/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Donner votre avis
                </Button>
              </a>
            </div>

            {/* Réseaux Sociaux */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center gap-6 mb-6">
                <a
                  href="https://facebook.com/saobrasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#1877F2] transition-colors"
                  aria-label="Suivez-nous sur Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} className="h-8 w-8" />
                </a>
                <a
                  href="https://instagram.com/saobrasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#E4405F] transition-colors"
                  aria-label="Suivez-nous sur Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
                </a>
                <a
                  href="https://wa.me/221338204016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#25D366] transition-colors"
                  aria-label="Contactez-nous sur WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="h-8 w-8" />
                </a>
              </div>
              <h3 className="text-2xl font-bold mb-4">Suivez-nous</h3>
              <p className="text-gray-600">
                Restez informé de nos nouveautés, événements spéciaux et offres exclusives en nous suivant sur les réseaux sociaux !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 