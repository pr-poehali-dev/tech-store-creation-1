import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const products = [
    { id: 1, name: 'iPhone 15 Pro Max', brand: 'Apple', price: 129990, rating: 4.9, image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400&h=400&fit=crop', specs: 'A17 Pro, 256GB', category: 'Смартфоны' },
    { id: 2, name: 'MacBook Pro 14"', brand: 'Apple', price: 189990, rating: 4.8, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop', specs: 'M3 Pro, 18GB', category: 'Ноутбуки' },
    { id: 3, name: 'Samsung Galaxy S24', brand: 'Samsung', price: 89990, rating: 4.7, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop', specs: 'Snapdragon 8 Gen 3', category: 'Смартфоны' },
    { id: 4, name: 'iPad Air', brand: 'Apple', price: 64990, rating: 4.6, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop', specs: 'M1, 128GB', category: 'Планшеты' },
    { id: 5, name: 'Xiaomi 13 Pro', brand: 'Xiaomi', price: 69990, rating: 4.5, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop', specs: 'Snapdragon 8 Gen 2', category: 'Смартфоны' },
    { id: 6, name: 'Dell XPS 15', brand: 'Dell', price: 149990, rating: 4.7, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop', specs: 'Intel i7, 16GB', category: 'Ноутбуки' },
  ];

  const brands = ['Apple', 'Samsung', 'Xiaomi', 'Dell', 'Lenovo', 'HP'];
  const ratings = [5, 4, 3, 2, 1];

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleRating = (rating: number) => {
    setSelectedRatings(prev =>
      prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesRating = selectedRatings.length === 0 || selectedRatings.some(r => product.rating >= r && product.rating < r + 1);
    return matchesPrice && matchesBrand && matchesRating;
  });

  return (
    <div className="min-h-screen flex flex-col dark">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 py-12">
          <div className="container">
            <h1 className="font-heading text-4xl font-bold mb-4">Каталог товаров</h1>
            <p className="text-muted-foreground">Найдено {filteredProducts.length} товаров</p>
          </div>
        </div>

        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-heading font-semibold mb-4 flex items-center">
                      <Icon name="DollarSign" size={20} className="mr-2" />
                      Цена
                    </h3>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={200000}
                      step={1000}
                      className="mb-4"
                    />
                    <div className="flex items-center justify-between text-sm">
                      <span>{priceRange[0].toLocaleString('ru-RU')} ₽</span>
                      <span>{priceRange[1].toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold mb-4 flex items-center">
                      <Icon name="Tag" size={20} className="mr-2" />
                      Бренд
                    </h3>
                    <div className="space-y-3">
                      {brands.map(brand => (
                        <div key={brand} className="flex items-center space-x-2">
                          <Checkbox
                            id={brand}
                            checked={selectedBrands.includes(brand)}
                            onCheckedChange={() => toggleBrand(brand)}
                          />
                          <Label htmlFor={brand} className="cursor-pointer">{brand}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold mb-4 flex items-center">
                      <Icon name="Star" size={20} className="mr-2" />
                      Рейтинг
                    </h3>
                    <div className="space-y-3">
                      {ratings.map(rating => (
                        <div key={rating} className="flex items-center space-x-2">
                          <Checkbox
                            id={`rating-${rating}`}
                            checked={selectedRatings.includes(rating)}
                            onCheckedChange={() => toggleRating(rating)}
                          />
                          <Label htmlFor={`rating-${rating}`} className="cursor-pointer flex items-center">
                            {rating}
                            <Icon name="Star" size={14} className="ml-1 fill-yellow-400 text-yellow-400" />
                            и выше
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" variant="outline" onClick={() => {
                    setPriceRange([0, 200000]);
                    setSelectedBrands([]);
                    setSelectedRatings([]);
                  }}>
                    <Icon name="X" size={16} className="mr-2" />
                    Сбросить фильтры
                  </Button>
                </CardContent>
              </Card>
            </aside>

            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Label>Сортировка:</Label>
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-[200px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">По популярности</SelectItem>
                      <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                      <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                      <SelectItem value="rating">По рейтингу</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <Card key={product.id} className="group hover-scale overflow-hidden animate-fade-in border-2 hover:border-primary/50 transition-all" style={{ animationDelay: `${index * 50}ms` }}>
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden bg-muted/30">
                        <button className="absolute top-3 right-3 z-10 p-2 bg-background/80 backdrop-blur rounded-full hover:bg-background transition-colors">
                          <Icon name="Heart" size={18} />
                        </button>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 space-y-3">
                        <div>
                          <Badge variant="outline" className="mb-2">{product.category}</Badge>
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
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
