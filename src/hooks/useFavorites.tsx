import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/product';

interface FavoritesStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  isInFavorites: (productId: string) => boolean;
  toggleFavorite: (product: Product) => void;
}

export const useFavorites = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product) => {
        set((state) => {
          const exists = state.items.find(item => item.id === product.id);
          if (exists) return state;
          
          return {
            items: [...state.items, product],
          };
        });
      },
      
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== productId),
        }));
      },
      
      isInFavorites: (productId) => {
        return get().items.some(item => item.id === productId);
      },
      
      toggleFavorite: (product) => {
        const isInFavorites = get().isInFavorites(product.id);
        
        if (isInFavorites) {
          get().removeItem(product.id);
        } else {
          get().addItem(product);
        }
      },
    }),
    {
      name: 'favorites-storage',
    }
  )
);
