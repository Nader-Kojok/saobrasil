import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ReservationModal } from '@/components/reservation-modal';

export const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-playfair mb-6">
          Venez Partager un Moment avec Nous
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Que ce soit pour une pizza entre amis, un dîner en famille ou un bon plat de poisson, notre équipe sera heureuse de vous accueillir dans notre petit coin de paradis à Ngor.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu" className="w-full sm:w-auto">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg w-full sm:w-[200px] h-[60px] border-2 border-orange-600 hover:border-orange-700 flex items-center justify-center">
              Commander
            </Button>
          </Link>
          <ReservationModal>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-orange-50 hover:bg-green-600 text-lg w-full sm:w-[200px] h-[60px] border-2 border-orange-600 hover:border-green-600 text-orange-600 hover:text-white transition-colors duration-200 flex items-center justify-center"
            >
              Réserver une table
            </Button>
          </ReservationModal>
        </div>
      </div>
    </section>
  );
}; 