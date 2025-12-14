import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';

const Delivery = () => {
  const cartCount = useCart(state => state.getTotalItems());
  const favoritesCount = useFavorites(state => state.items.length);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cartCount} favoritesCount={favoritesCount} />

      <div className="flex-1">
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Доставка и оплата
              </h1>
              <p className="text-xl text-muted-foreground">
                Удобные условия получения вашего заказа
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="space-y-8">
              <Card className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Icon name="Truck" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Способы доставки</h2>
                    <p className="text-muted-foreground">Выберите удобный вариант получения заказа</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="Home" className="h-6 w-6 text-primary" />
                      <h3 className="font-semibold text-xl">Курьером на дом</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Доставка по указанному адресу в удобное для вас время
                    </p>
                    <div className="pt-2 space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">Москва и МО:</span> 1-2 дня
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Регионы:</span> 2-5 дней
                      </p>
                      <p className="text-sm font-semibold text-primary">
                        Бесплатно от 5000 ₽
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="Package" className="h-6 w-6 text-primary" />
                      <h3 className="font-semibold text-xl">Пункты выдачи</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Самовывоз из пунктов выдачи CDEK и Boxberry
                    </p>
                    <div className="pt-2 space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">По России:</span> 2-7 дней
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Более 10,000 пунктов</span>
                      </p>
                      <p className="text-sm font-semibold text-primary">
                        Бесплатно от 3000 ₽
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Icon name="CreditCard" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Способы оплаты</h2>
                    <p className="text-muted-foreground">Безопасные методы оплаты заказа</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border rounded-lg p-6 space-y-3">
                    <Icon name="CreditCard" className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold">Банковской картой</h3>
                    <p className="text-sm text-muted-foreground">
                      Visa, Mastercard, МИР при оформлении или получении
                    </p>
                  </div>

                  <div className="border rounded-lg p-6 space-y-3">
                    <Icon name="Wallet" className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold">Наличными</h3>
                    <p className="text-sm text-muted-foreground">
                      Оплата курьеру или в пункте выдачи при получении
                    </p>
                  </div>

                  <div className="border rounded-lg p-6 space-y-3">
                    <Icon name="Building" className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold">Рассрочка</h3>
                    <p className="text-sm text-muted-foreground">
                      Оформление рассрочки от банков-партнеров
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Icon name="Info" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Важная информация</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Icon name="CheckCircle" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      При получении заказа проверьте комплектацию и отсутствие повреждений
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="CheckCircle" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Срок хранения заказа в пункте выдачи — 7 дней
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="CheckCircle" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Возможен возврат товара в течение 14 дней с момента покупки
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="CheckCircle" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Все товары застрахованы на время доставки
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-4">
                  <Icon name="HelpCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Остались вопросы?</h3>
                    <p className="text-muted-foreground mb-4">
                      Свяжитесь с нашей службой поддержки, и мы ответим на все ваши вопросы
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Phone" className="h-4 w-4" />
                        <span>+7 (800) 555-35-35</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Mail" className="h-4 w-4" />
                        <span>info@appshop.ru</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Delivery;
