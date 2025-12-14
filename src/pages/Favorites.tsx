import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';

const Favorites = () => {
  const cartCount = useCart(state => state.getTotalItems());
  const { items } = useFavorites();
  const favoritesCount = items.length;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header cartCount={cartCount} favoritesCount={favoritesCount} />
        
        <div className="flex-1 container py-16 flex flex-col items-center justify-center text-center">
          <Icon name="Heart" className="h-24 w-24 text-muted-foreground mb-4" />
          <h1 className="text-3xl font-bold mb-2">Избранное пусто</h1>
          <p className="text-muted-foreground mb-8">
            Добавьте товары в избранное, чтобы не потерять их
          </p>
          <Button size="lg" asChild>
            <Link to="/catalog">
              <Icon name="ShoppingBag" className="mr-2 h-5 w-5" />
              Перейти в каталог
            </Link>
          </Button>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cartCount} favoritesCount={favoritesCount} />

      <div className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Избранное</h1>
          <p className="text-muted-foreground">
            Сохранено товаров: {items.length}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Favorites;
