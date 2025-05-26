import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const SpecialtiesSection = () => {
  return (
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
              className="bg-secondary hover:bg-secondary/90"
            >
              Découvrir Notre Carte
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}; 