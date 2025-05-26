import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ReservationModal } from '@/components/reservation-modal';

export const HeroSection = () => {
  return (
    <section className="relative h-[100vh] w-full flex items-center">
      <div className="absolute inset-0 z-0 pt-16">
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
            Restaurant Italien aux Almadies
          </h1>
          <p className="text-xl mb-8">
            Situé au cœur des Almadies à Dakar, Sao Brasil est réputé pour ses délicieuses pizzas au feu de bois et ses plats italiens savoureux. Profitez de notre terrasse et de notre espace de jeux pour enfants à deux pas de la plage de Ngor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/menu" className="w-full sm:w-auto">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg w-full sm:w-[200px] h-[60px] border-2 border-secondary hover:border-secondary/90 flex items-center justify-center">
                Commander
              </Button>
            </Link>
            <ReservationModal>
              <Button 
                size="lg" 
                variant="outline" 
                className="group bg-white/10 backdrop-blur-sm hover:bg-primary/80 text-lg w-full sm:w-[200px] h-[60px] border-2 border-white hover:border-primary text-white/90 hover:text-white transition-colors duration-200 flex items-center justify-center"
              >
                Réserver une table
              </Button>
            </ReservationModal>
          </div>
        </div>
      </div>
    </section>
  );
};