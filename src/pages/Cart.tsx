import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'iPhone 15 Pro Max', brand: 'Apple', price: 129990, quantity: 1, image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=200&h=200&fit=crop' },
    { id: 2, name: 'MacBook Pro 14"', brand: 'Apple', price: 189990, quantity: 1, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&h=200&fit=crop' },
    { id: 3, name: 'iPad Air', brand: 'Apple', price: 64990, quantity: 2, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&h=200&fit=crop' },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal > 5000 ? 0 : 500;
  const total = subtotal + delivery;

  return (
    <div className="min-h-screen flex flex-col dark">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 py-12">
          <div className="container">
            <h1 className="font-heading text-4xl font-bold mb-4">Корзина</h1>
            <p className="text-muted-foreground">{cartItems.length} товара в корзине</p>
          </div>
        </div>

        <div className="container py-8">
          {cartItems.length === 0 ? (
            <Card className="p-12 text-center">
              <Icon name="ShoppingCart" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <h2 className="font-heading text-2xl font-bold mb-2">Корзина пуста</h2>
              <p className="text-muted-foreground mb-6">Добавьте товары из каталога</p>
              <Button>Перейти в каталог</Button>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="animate-fade-in">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1 space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground">{item.brand}</p>
                            <h3 className="font-heading font-semibold text-lg">{item.name}</h3>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Button
                                size="icon"
                                variant="outline"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Icon name="Minus" size={14} />
                              </Button>
                              <span className="font-medium w-8 text-center">{item.quantity}</span>
                              <Button
                                size="icon"
                                variant="outline"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Icon name="Plus" size={14} />
                              </Button>
                            </div>
                            <div className="text-right">
                              <div className="font-heading font-bold text-xl">
                                {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {item.price.toLocaleString('ru-RU')} ₽ за шт.
                              </div>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Icon name="Trash2" size={16} className="mr-2" />
                            Удалить
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-4">
                <Card className="sticky top-20">
                  <CardContent className="p-6 space-y-4">
                    <h2 className="font-heading font-bold text-xl">Итого</h2>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Товары ({cartItems.length})</span>
                        <span className="font-medium">{subtotal.toLocaleString('ru-RU')} ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Доставка</span>
                        <span className="font-medium">
                          {delivery === 0 ? 'Бесплатно' : `${delivery} ₽`}
                        </span>
                      </div>
                      {delivery > 0 && (
                        <p className="text-sm text-muted-foreground">
                          До бесплатной доставки: {(5000 - subtotal).toLocaleString('ru-RU')} ₽
                        </p>
                      )}
                    </div>
                    <Separator />
                    <div className="flex justify-between text-xl font-heading font-bold">
                      <span>Всего</span>
                      <span>{total.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-lg">
                      Оформить заказ
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                    <div className="space-y-2 pt-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Shield" size={16} className="mr-2" />
                        Безопасная оплата
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Truck" size={16} className="mr-2" />
                        Доставка 1-3 дня
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
