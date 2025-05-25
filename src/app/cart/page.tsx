'use client';

import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { items, total, removeItem, addItem, clearCart } = useCartStore();

  const formatWhatsAppMessage = () => {
    const message = items.map(item => 
      `${item.quantity}x ${item.name} (Taille: ${item.size}) - ${item.size === 'Pantagruel' ? item.pricePantagruel : item.priceGargantua} F`
    ).join('\n');
    
    return encodeURIComponent(
      `🍕 Nouvelle commande :\n\n${message}\n\nTotal : ${total} F`
    );
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold font-playfair mb-8">Votre Panier</h1>
        <p className="text-gray-600 mb-8">Votre panier est vide.</p>
        <Link href="/menu">
          <Button className="bg-orange-600 hover:bg-orange-700">
            Voir le menu
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold font-playfair text-center mb-8">
        Votre Panier
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {items.map((item) => {
            const price = item.size === 'Pantagruel' ? item.pricePantagruel : item.priceGargantua;
            return (
              <div 
                key={`${item.id}-${item.size}`}
                className="flex gap-4 items-center bg-white p-4 rounded-lg shadow-sm mb-4"
              >
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">Taille: {item.size}</p>
                  <p className="text-orange-600 font-semibold">{price} F</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeItem(item.id, item.size)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addItem(item, item.size)}
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeItem(item.id, item.size)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Résumé</h2>
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-bold">{total} F</span>
            </div>
            <div className="space-y-4">
              <a
                href={`https://wa.me/1234567890?text=${formatWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                  Commander sur WhatsApp
                </Button>
              </a>
              <Button
                variant="outline"
                className="w-full"
                onClick={clearCart}
              >
                Vider le panier
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 