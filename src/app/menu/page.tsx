'use client';

import { useState } from 'react';
import MenuCard from '@/components/menu/MenuCard';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { MenuItem } from '@/lib/store';

// Menu items data
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Sao Brazil',
    description: 'Thon, Crevettes, Oignons',
    pricePantagruel: 6000,
    priceGargantua: 7000,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
  },
  {
    id: 2,
    name: 'Océane',
    description: 'Fruits de mer, Tomate',
    pricePantagruel: 6200,
    priceGargantua: 7200,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94',
  },
  {
    id: 3,
    name: 'Margherita',
    description: 'Basilic, Olives',
    pricePantagruel: 4500,
    priceGargantua: 5500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca',
  },
  {
    id: 4,
    name: 'Reine',
    description: 'Jambon, Champignons',
    pricePantagruel: 5000,
    priceGargantua: 6000,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
  },
  {
    id: 5,
    name: 'Orientale',
    description: 'Merguez, Cumin, Basilic, Oignon',
    pricePantagruel: 5800,
    priceGargantua: 6800,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e',
  },
  {
    id: 6,
    name: 'Napolitaine',
    description: 'Anchois, Origan, Câpres',
    pricePantagruel: 4800,
    priceGargantua: 5800,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47',
  },
  {
    id: 7,
    name: 'Aux Trois Fromages',
    description: 'Gruyère, Roquefort, Mozzarella',
    pricePantagruel: 5000,
    priceGargantua: 6000,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1548369937-47519962c11a',
  },
  {
    id: 8,
    name: 'Hawaïenne',
    description: 'Crevettes, Ananas',
    pricePantagruel: 5500,
    priceGargantua: 6500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65',
  },
  {
    id: 9,
    name: 'Calzone',
    description: 'Chausson',
    pricePantagruel: 5200,
    priceGargantua: 6200,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1536964549204-cce9eab227bd',
  },
  {
    id: 10,
    name: 'Quatre Saisons',
    description: 'Cœurs d\'Artichaut, Crevettes, Jambon, Champignons',
    pricePantagruel: 5500,
    priceGargantua: 6500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
  },
  {
    id: 11,
    name: 'Royale',
    description: 'Jambon, Cœurs d\'Artichaut',
    pricePantagruel: 5000,
    priceGargantua: 6000,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee',
  },
  {
    id: 12,
    name: 'Mexicana',
    description: 'Chorizo, Mozzarella, Oignons, Basilic',
    pricePantagruel: 6000,
    priceGargantua: 7000,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1605591099585-087b3d54cd45',
  },
  {
    id: 13,
    name: 'Végétarienne',
    description: 'Champignons, Oignons, Cœurs d\'artichauts, Poivrons',
    pricePantagruel: 4800,
    priceGargantua: 5800,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1542282811-943ef1a977c3',
  },
  {
    id: 14,
    name: 'Toscana',
    description: 'Viande Hachée, Oignons, Poivrons, Origan',
    pricePantagruel: 5800,
    priceGargantua: 6800,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a',
  },
  {
    id: 15,
    name: 'Flambée',
    description: 'Crème fraîche, Lardons fumés, Oignons',
    pricePantagruel: 5800,
    priceGargantua: 6800,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1593504049359-74330189a345',
  },
  {
    id: 16,
    name: 'Cannibale',
    description: 'Fromage, Jambon Bayonne',
    pricePantagruel: 6000,
    priceGargantua: 7000,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462',
  },
  {
    id: 17,
    name: 'Ngoroise',
    description: 'Chorizo, copeaux de chèvre froid, basilic',
    pricePantagruel: 6200,
    priceGargantua: 7200,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9',
  },
  {
    id: 18,
    name: 'Chicken pizza',
    description: 'Blanc de poulet',
    pricePantagruel: 6200,
    priceGargantua: 7200,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47',
  },
];

const categories = [
  { 
    id: 'entrees',
    name: 'Entrées',
    icon: '🥗',
    items: [] // À remplir avec les entrées
  },
  { 
    id: 'pizza',
    name: 'Les Pizzas',
    icon: '🍕',
    items: menuItems
  },
  { 
    id: 'desserts',
    name: 'Desserts',
    icon: '🍰',
    items: [] // À remplir avec les desserts
  },
  { 
    id: 'boissons',
    name: 'Boissons',
    icon: '🥤',
    items: [] // À remplir avec les boissons
  }
];

export default function MenuPage() {
  const [openCategories, setOpenCategories] = useState<string[]>(['pizza']);

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold font-playfair text-center mb-12">
        Notre Menu
      </h1>

      <div className="space-y-6 max-w-7xl mx-auto">
        {categories.map((category) => (
          <Collapsible
            key={category.id}
            open={openCategories.includes(category.id)}
            onOpenChange={() => toggleCategory(category.id)}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-white hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-2xl font-semibold">{category.name}</h2>
                <span className="ml-3 text-sm text-gray-500">
                  ({category.items.length} produits)
                </span>
              </div>
              {openCategories.includes(category.id) ? (
                <ChevronUp className="h-6 w-6 text-gray-500" />
              ) : (
                <ChevronDown className="h-6 w-6 text-gray-500" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-50">
                {category.items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
                {category.items.length === 0 && (
                  <p className="text-gray-500 italic col-span-full text-center py-8">
                    Aucun produit dans cette catégorie pour le moment
                  </p>
                )}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
} 