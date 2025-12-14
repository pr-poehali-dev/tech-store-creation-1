export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  category: string;
  specs: {
    [key: string]: string;
  };
  inStock: boolean;
  isNew?: boolean;
  discount?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterState {
  priceRange: [number, number];
  brands: string[];
  minRating: number;
  categories: string[];
  searchQuery: string;
}
