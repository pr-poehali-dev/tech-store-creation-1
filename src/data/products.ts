import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 129990,
    oldPrice: 149990,
    rating: 4.9,
    reviewsCount: 342,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80',
    category: 'Смартфоны',
    specs: {
      'Диагональ экрана': '6.7"',
      'Процессор': 'A17 Pro',
      'Память': '256 ГБ',
      'Камера': '48 Мп'
    },
    inStock: true,
    isNew: true,
    discount: 13
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 119990,
    rating: 4.8,
    reviewsCount: 278,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80',
    category: 'Смартфоны',
    specs: {
      'Диагональ экрана': '6.8"',
      'Процессор': 'Snapdragon 8 Gen 3',
      'Память': '512 ГБ',
      'Камера': '200 Мп'
    },
    inStock: true,
    isNew: true
  },
  {
    id: '3',
    name: 'MacBook Pro 16',
    brand: 'Apple',
    price: 249990,
    rating: 4.9,
    reviewsCount: 189,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
    category: 'Ноутбуки',
    specs: {
      'Диагональ экрана': '16.2"',
      'Процессор': 'M3 Pro',
      'Память': '512 ГБ',
      'RAM': '18 ГБ'
    },
    inStock: true
  },
  {
    id: '4',
    name: 'AirPods Pro 2',
    brand: 'Apple',
    price: 24990,
    oldPrice: 29990,
    rating: 4.7,
    reviewsCount: 521,
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&q=80',
    category: 'Наушники',
    specs: {
      'Тип': 'TWS',
      'Шумоподавление': 'Активное',
      'Время работы': '6 часов',
      'Зарядный кейс': 'USB-C'
    },
    inStock: true,
    discount: 17
  },
  {
    id: '5',
    name: 'iPad Air M2',
    brand: 'Apple',
    price: 79990,
    rating: 4.8,
    reviewsCount: 234,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80',
    category: 'Планшеты',
    specs: {
      'Диагональ экрана': '10.9"',
      'Процессор': 'M2',
      'Память': '128 ГБ',
      'Вес': '461 г'
    },
    inStock: true,
    isNew: true
  },
  {
    id: '6',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    price: 34990,
    rating: 4.8,
    reviewsCount: 412,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80',
    category: 'Наушники',
    specs: {
      'Тип': 'Накладные',
      'Шумоподавление': 'Активное',
      'Время работы': '30 часов',
      'Bluetooth': '5.2'
    },
    inStock: true
  },
  {
    id: '7',
    name: 'Apple Watch Ultra 2',
    brand: 'Apple',
    price: 89990,
    rating: 4.9,
    reviewsCount: 156,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&q=80',
    category: 'Умные часы',
    specs: {
      'Диагональ экрана': '1.92"',
      'Процессор': 'S9',
      'Водозащита': '100 м',
      'Время работы': '36 часов'
    },
    inStock: true,
    isNew: true
  },
  {
    id: '8',
    name: 'Dell XPS 15',
    brand: 'Dell',
    price: 159990,
    rating: 4.7,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80',
    category: 'Ноутбуки',
    specs: {
      'Диагональ экрана': '15.6"',
      'Процессор': 'Intel Core i7',
      'Память': '1 ТБ',
      'RAM': '32 ГБ'
    },
    inStock: true
  }
];

export const categories = Array.from(new Set(products.map(p => p.category)));
export const brands = Array.from(new Set(products.map(p => p.brand)));
