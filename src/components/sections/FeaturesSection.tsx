import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPizzaSlice, 
  faStar,
} from '@fortawesome/free-solid-svg-icons';

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faPizzaSlice} className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Notre Savoir-Faire</h3>
            <p className="text-gray-600">
              Des pizzas cuites au feu de bois comme en Italie, préparées avec amour par notre équipe passionnée.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faStar} className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Notre Histoire</h3>
            <p className="text-gray-600">
              Une belle aventure qui dure depuis 20 ans, avec une équipe fidèle qui prend plaisir à vous accueillir chaque jour.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faStar} className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Notre Ambiance</h3>
            <p className="text-gray-600">
              Un espace en plein air où petits et grands se sentent comme à la maison, avec une aire de jeux pour les enfants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 