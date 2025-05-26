import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUtensils, 
  faHeart, 
  faUsers
} from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: 'À Propos - Sao Brasil',
  description: 'Découvrez l\'histoire de Sao Brasil, un coin d\'Italie à Dakar depuis 20 ans, spécialisé dans les pizzas au feu de bois et les plats de la mer.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1579684947550-22e945225d9a"
            alt="Sao Brasil Restaurant"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6">
              Notre Histoire
            </h1>
            <p className="text-xl">
              Depuis 20 ans, nous partageons notre passion des pizzas au feu de bois et des bons plats de la mer dans une ambiance chaleureuse et familiale.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-playfair mb-4">
                Un Coin d&apos;Italie à Dakar
              </h2>
              <p className="text-xl text-gray-600">
                Depuis plus de 20 ans, Sao Brasil enchante les papilles des dakarois avec ses authentiques pizzas au feu de bois et ses délicieux plats de la mer. Notre restaurant est né d&apos;une passion pour la cuisine italienne et d&apos;un amour pour le Sénégal.
              </p>
              <p className="text-xl text-gray-600">
                Situé dans le charmant quartier de Ngor, notre établissement est devenu un lieu de rendez-vous incontournable pour les amateurs de bonne cuisine et d&apos;ambiance chaleureuse.
              </p>
            </div>
            <div className="relative group overflow-hidden aspect-[4/3] rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
                alt="Intérieur du restaurant"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-playfair mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Notre engagement envers la qualité et l&apos;authenticité se reflète dans chaque aspect de notre restaurant.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faUtensils} className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Qualité</h3>
              <p className="text-gray-600">
                Des ingrédients frais et de saison, sélectionnés avec soin pour garantir une qualité exceptionnelle.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faHeart} className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Passion</h3>
              <p className="text-gray-600">
                Une équipe passionnée qui met tout son cœur dans la préparation de chaque plat.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Convivialité</h3>
              <p className="text-gray-600">
                Une ambiance chaleureuse où chaque client se sent comme chez lui.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-playfair mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Notre équipe de passionnés travaille chaque jour pour vous offrir une expérience culinaire inoubliable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c"
                alt="Notre Chef"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Notre Chef</h3>
                  <p className="text-sm opacity-90">20 ans d&apos;expérience dans la cuisine italienne authentique</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf"
                alt="Notre Équipe"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Notre Équipe</h3>
                  <p className="text-sm opacity-90">Des professionnels passionnés à votre service</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330"
                alt="Notre Équipe"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Notre Équipe</h3>
                  <p className="text-sm opacity-90">Ensemble, nous créons des moments inoubliables</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 