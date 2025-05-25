import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf,
  faHandHoldingHeart,
  faUtensils,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export const FreshAndLocalSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-playfair mb-4">
              Notre Démarche &ldquo;Frais Maison&rdquo;
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous nous engageons à proposer des pizzas de qualité composées de produits locaux et de saison, à haute valeur gustative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e"
                alt="Ingrédients frais"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-white p-4 rounded-full shadow-md">
                  <FontAwesomeIcon icon={faLeaf} className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Produits Locaux</h3>
                  <p className="text-gray-600">
                    Nous sélectionnons avec soin nos ingrédients auprès des producteurs locaux pour garantir fraîcheur et qualité tout en soutenant l&apos;économie locale.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-white p-4 rounded-full shadow-md">
                  <FontAwesomeIcon icon={faHandHoldingHeart} className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fait Maison</h3>
                  <p className="text-gray-600">
                    Chaque pizza est préparée à la minute, avec notre pâte maison pétrie chaque jour et nos sauces préparées selon nos recettes traditionnelles.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-white p-4 rounded-full shadow-md">
                  <FontAwesomeIcon icon={faUtensils} className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cuisson Traditionnelle</h3>
                  <p className="text-gray-600">
                    Nos pizzas sont cuites dans un authentique four à bois italien qui leur confère une cuisson parfaite et ce goût unique et savoureux que seule la tradition peut offrir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/menu">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700"
              >
                Découvrir Notre Carte
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}; 