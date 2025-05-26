'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTree, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import CartSidebar from './CartSidebar';
import { StatusBadge } from '@/components/restaurant-status/StatusBadge';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
              <span className="font-permanent-marker">SAO BRASIL</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                Accueil
              </Link>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                À Propos
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
              <StatusBadge />
            </nav>

            <div className="flex items-center space-x-4">
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

              <Button
                variant="ghost"
                className="md:hidden p-2"
                aria-label="Menu principal"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <FontAwesomeIcon 
                  icon={isMobileMenuOpen ? faXmark : faBars} 
                  className="h-6 w-6"
                />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <nav className="py-4 space-y-4">
              <div className="mb-4">
                <StatusBadge />
              </div>
              <Link 
                href="/" 
                className="block text-gray-600 hover:text-orange-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-600 hover:text-orange-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À Propos
              </Link>
              <Link 
                href="/menu" 
                className="block text-gray-600 hover:text-orange-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-600 hover:text-orange-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
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