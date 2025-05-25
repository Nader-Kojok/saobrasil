import { create } from 'zustand';

export type Size = 'Pantagruel' | 'Gargantua';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  pricePantagruel: number;
  priceGargantua: number;
  category: string;
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
  size: Size;
}

interface CartStore {
  items: CartItem[];
  total: number;
  addItem: (item: MenuItem, size: Size) => void;
  removeItem: (itemId: number, size: Size) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  total: 0,
  addItem: (item: MenuItem, size: Size) => {
    set((state) => {
      const existingItem = state.items.find(
        (i) => i.id === item.id && i.size === size
      );

      const price = size === 'Pantagruel' ? item.pricePantagruel : item.priceGargantua;

      if (existingItem) {
        const updatedItems = state.items.map((i) =>
          i.id === item.id && i.size === size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
        return {
          items: updatedItems,
          total: state.total + price,
        };
      }

      return {
        items: [...state.items, { ...item, quantity: 1, size }],
        total: state.total + price,
      };
    });
  },
  removeItem: (itemId: number, size: Size) => {
    set((state) => {
      const item = state.items.find((i) => i.id === itemId && i.size === size);
      if (!item) return state;

      const price = size === 'Pantagruel' ? item.pricePantagruel : item.priceGargantua;

      if (item.quantity > 1) {
        const updatedItems = state.items.map((i) =>
          i.id === itemId && i.size === size
            ? { ...i, quantity: i.quantity - 1 }
            : i
        );
        return {
          items: updatedItems,
          total: state.total - price,
        };
      }

      return {
        items: state.items.filter((i) => !(i.id === itemId && i.size === size)),
        total: state.total - price,
      };
    });
  },
  clearCart: () => set({ items: [], total: 0 }),
})); 