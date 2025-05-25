'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import CartSidebar from './CartSidebar';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCartStore();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-2xl font-bold text-orange-600"
            >
              <FontAwesomeIcon icon={faPizzaSlice} className="h-6 w-6" />
              <span className="font-playfair">Sao Brasil</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                Accueil
              </Link>
              <Link 
                href="/menu" 
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                Menu
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                Contact
              </Link>
            </nav>

            <Button 
              variant="ghost" 
              className="relative p-2"
              aria-label="Ouvrir le panier"
              onClick={() => setIsCartOpen(true)}
            >
              <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
};

export default Header; 