import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPizzaSlice, 
  faStar,
  faArrowRight,
  faLeaf,
  faHandHoldingHeart,
  faUtensils
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ReservationModal } from '@/components/reservation-modal';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
            alt="Pizza délicieuse"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6">
              Un Coin d&apos;Italie à Ngor
            </h1>
            <p className="text-xl mb-8">
              Depuis 20 ans, nous partageons notre passion des pizzas au feu de bois et des bons plats de la mer dans une ambiance chaleureuse et familiale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu" className="w-full sm:w-auto">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-6 border-2 border-orange-600 hover:border-orange-700 flex items-center justify-center w-full sm:min-w-[200px]">
                  Commander
                </Button>
              </Link>
              <ReservationModal>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group bg-white/10 backdrop-blur-sm hover:bg-green-600/80 text-lg px-8 py-6 border-2 border-white hover:border-green-600 text-white/90 hover:text-white transition-colors duration-200 flex items-center justify-center w-full sm:min-w-[200px]"
                >
                  Réserver une table
                </Button>
              </ReservationModal>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* Specialties Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-playfair mb-4">
              Nos Spécialités
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre passion pour la cuisine italienne authentique se reflète dans chaque plat que nous préparons. Découvrez notre savoir-faire artisanal et notre amour pour les produits de qualité.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f"
                alt="Pizza au feu de bois"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">L&apos;Art de la Pizza</h3>
                  <p className="text-sm opacity-90">Notre four à bois traditionnel italien confère à nos pizzas ce goût authentique et cette texture parfaite qui font notre renommée.</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf"
                alt="Préparation artisanale"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Préparation Artisanale</h3>
                  <p className="text-sm opacity-90">Chaque jour, notre équipe pétrit la pâte à la main et prépare les sauces selon nos recettes traditionnelles.</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1579751626657-72bc17010498"
                alt="Ingrédients frais"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Ingrédients Sélectionnés</h3>
                  <p className="text-sm opacity-90">Des produits frais et de saison, choisis avec soin auprès de nos producteurs partenaires.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
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
      </section>

      {/* Fresh & Local Section */}
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-playfair mb-6">
            Venez Partager un Moment avec Nous
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Que ce soit pour une pizza entre amis, un dîner en famille ou un bon plat de poisson, notre équipe sera heureuse de vous accueillir dans notre petit coin de paradis à Ngor.
          </p>
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Nous Contacter
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
