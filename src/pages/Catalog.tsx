import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { products } from '@/data/products';
import { FilterState } from '@/types/product';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';

const Catalog = () => {
  const cartCount = useCart(state => state.getTotalItems());
  const favoritesCount = useFavorites(state => state.items.length);

  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 300000],
    brands: [],
    minRating: 0,
    categories: [],
    searchQuery: ''
  });

  const [sortBy, setSortBy] = useState<string>('popular');

  const filteredProducts = useMemo(() => {
    const filtered = products.filter(product => {
      const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const matchesBrand = filters.brands.length === 0 || filters.brands.includes(product.brand);
      const matchesRating = product.rating >= filters.minRating;
      const matchesCategory = filters.categories.length === 0 || filters.categories.includes(product.category);
      const matchesSearch = filters.searchQuery === '' || 
        product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(filters.searchQuery.toLowerCase());

      return matchesPrice && matchesBrand && matchesRating && matchesCategory && matchesSearch;
    });

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cartCount} favoritesCount={favoritesCount} />

      <div className="container py-8 flex-1">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Каталог товаров</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Поиск товаров..."
                value={filters.searchQuery}
                onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                className="pl-10"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">По популярности</SelectItem>
                <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                <SelectItem value="rating">По рейтингу</SelectItem>
                <SelectItem value="name">По названию</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <aside className="hidden lg:block">
            <ProductFilters filters={filters} onFilterChange={setFilters} />
          </aside>

          <div>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                Найдено товаров: <span className="font-semibold text-foreground">{filteredProducts.length}</span>
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <Icon name="Search" className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
                <p className="text-muted-foreground">
                  Попробуйте изменить параметры фильтрации
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
