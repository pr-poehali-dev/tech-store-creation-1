import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';
import { toast } from 'sonner';

const Cart = () => {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart, getTotalItems } = useCart();
  const cartCount = getTotalItems();
  const favoritesCount = useFavorites(state => state.items.length);
  const totalPrice = getTotalPrice();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  const handleRemove = (productId: string) => {
    removeItem(productId);
    toast.success('Товар удален из корзины');
  };

  const handleCheckout = () => {
    toast.success('Оформление заказа в разработке');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header cartCount={cartCount} favoritesCount={favoritesCount} />
        
        <div className="flex-1 container py-16 flex flex-col items-center justify-center text-center">
          <Icon name="ShoppingCart" className="h-24 w-24 text-muted-foreground mb-4" />
          <h1 className="text-3xl font-bold mb-2">Корзина пуста</h1>
          <p className="text-muted-foreground mb-8">
            Добавьте товары из каталога, чтобы оформить заказ
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
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold">Корзина</h1>
          <Button variant="ghost" onClick={clearCart}>
            <Icon name="Trash2" className="mr-2 h-4 w-4" />
            Очистить корзину
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <Card key={item.id} className="p-4">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-md object-cover"
                  />

                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{item.brand}</p>
                        <h3 className="font-semibold">{item.name}</h3>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemove(item.id)}
                      >
                        <Icon name="X" className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Icon name="Minus" className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <Icon name="Plus" className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="text-right">
                        <p className="text-xl font-bold">
                          {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.price.toLocaleString('ru-RU')} ₽ за шт.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 space-y-4 sticky top-20">
              <h2 className="text-xl font-bold">Итого</h2>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Товары ({items.length})</span>
                  <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Доставка</span>
                  <span className="text-green-600 font-medium">Бесплатно</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between text-lg font-bold">
                <span>К оплате</span>
                <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
              </div>

              <Button className="w-full" size="lg" onClick={handleCheckout}>
                <Icon name="CreditCard" className="mr-2 h-5 w-5" />
                Оформить заказ
              </Button>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Truck" className="h-4 w-4" />
                  <span>Бесплатная доставка от 5000 ₽</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="ShieldCheck" className="h-4 w-4" />
                  <span>Официальная гарантия</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="RotateCcw" className="h-4 w-4" />
                  <span>Возврат в течение 14 дней</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
