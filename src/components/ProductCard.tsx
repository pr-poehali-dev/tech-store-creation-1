import { Product } from '@/types/product';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = useCart(state => state.addItem);
  const { isInFavorites, toggleFavorite } = useFavorites();
  const isFavorite = isInFavorites(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Товар добавлен в корзину');
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
    toast.success(isFavorite ? 'Удалено из избранного' : 'Добавлено в избранное');
  };

  return (
    <Card className="group overflow-hidden hover-scale">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        {product.isNew && (
          <Badge className="absolute top-2 left-2 bg-primary">Новинка</Badge>
        )}
        {product.discount && (
          <Badge className="absolute top-2 right-2 bg-destructive">-{product.discount}%</Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
          onClick={handleToggleFavorite}
        >
          <Icon
            name="Heart"
            className={`h-5 w-5 ${isFavorite ? 'fill-destructive text-destructive' : ''}`}
          />
        </Button>
      </div>

      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{product.brand}</p>
          <h3 className="font-semibold line-clamp-2 min-h-[3rem]">{product.name}</h3>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({product.reviewsCount})</span>
        </div>

        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">{product.price.toLocaleString('ru-RU')} ₽</span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {product.oldPrice.toLocaleString('ru-RU')} ₽
              </span>
            )}
          </div>
        </div>

        <Button
          className="w-full"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          {product.inStock ? (
            <>
              <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
              В корзину
            </>
          ) : (
            'Нет в наличии'
          )}
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
