import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'iPhone 15 Pro Max', brand: 'Apple', price: 129990, rating: 4.9, image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400&h=400&fit=crop', specs: 'A17 Pro, 256GB' },
    { id: 2, name: 'MacBook Pro 14"', brand: 'Apple', price: 189990, rating: 4.8, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop', specs: 'M3 Pro, 18GB' },
    { id: 3, name: 'Samsung Galaxy S24', brand: 'Samsung', price: 89990, rating: 4.7, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop', specs: 'Snapdragon 8 Gen 3' },
    { id: 4, name: 'iPad Air', brand: 'Apple', price: 64990, rating: 4.6, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop', specs: 'M1, 128GB' },
    { id: 5, name: 'Xiaomi 13 Pro', brand: 'Xiaomi', price: 69990, rating: 4.5, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop', specs: 'Snapdragon 8 Gen 2' },
  ]);

  const removeFavorite = (id: number) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col dark">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 py-12">
          <div className="container">
            <h1 className="font-heading text-4xl font-bold mb-4">Избранное</h1>
            <p className="text-muted-foreground">{favorites.length} товаров в избранном</p>
          </div>
        </div>

        <div className="container py-8">
          {favorites.length === 0 ? (
            <Card className="p-12 text-center">
              <Icon name="Heart" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <h2 className="font-heading text-2xl font-bold mb-2">Список избранного пуст</h2>
              <p className="text-muted-foreground mb-6">Добавьте товары, которые вам понравились</p>
              <Button>Перейти в каталог</Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {favorites.map((product, index) => (
                <Card key={product.id} className="group hover-scale overflow-hidden animate-fade-in border-2 hover:border-primary/50 transition-all" style={{ animationDelay: `${index * 50}ms` }}>
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden bg-muted/30">
                      <button
                        onClick={() => removeFavorite(product.id)}
                        className="absolute top-3 right-3 z-10 p-2 bg-background/80 backdrop-blur rounded-full hover:bg-background transition-colors"
                      >
                        <Icon name="Heart" size={18} className="fill-red-500 text-red-500" />
                      </button>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
                        <h3 className="font-heading font-semibold text-lg line-clamp-1">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.specs}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                      <div className="flex items-end justify-between pt-2">
                        <div className="font-heading font-bold text-2xl">
                          {product.price.toLocaleString('ru-RU')} ₽
                        </div>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          <Icon name="ShoppingCart" size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;
