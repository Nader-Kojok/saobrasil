import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store';
import type { MenuItem, Size } from '@/lib/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  const [selectedSize, setSelectedSize] = useState<Size>('Pantagruel');
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(item, selectedSize);
  };

  const price = selectedSize === 'Pantagruel' ? item.pricePantagruel : item.priceGargantua;

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-5">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
          <p className="text-gray-600 text-sm italic">
            {item.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  {selectedSize}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedSize('Pantagruel')}>
                  Pantagruel - {item.pricePantagruel} F
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedSize('Gargantua')}>
                  Gargantua - {item.priceGargantua} F
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="text-lg font-bold text-orange-600">{price} F</span>
          </div>
          <Button 
            onClick={handleAddToCart}
            className="bg-orange-600 hover:bg-orange-700 transition-colors duration-200"
            aria-label={`Ajouter ${item.name} taille ${selectedSize} au panier`}
          >
            <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
            Ajouter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard; 