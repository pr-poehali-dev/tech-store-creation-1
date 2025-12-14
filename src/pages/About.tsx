import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';

const About = () => {
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
                О магазине AppShop
              </h1>
              <p className="text-xl text-muted-foreground">
                Мы создаем лучший опыт покупки электроники в России
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-4">Наша миссия</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  AppShop — это современный интернет-магазин электроники, который объединяет широкий ассортимент 
                  качественной техники, выгодные цены и высокий уровень сервиса. Мы работаем только с официальными 
                  поставщиками и предоставляем полную гарантию на всю продукцию.
                </p>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                    <Icon name="Award" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl">7+ лет на рынке</h3>
                  <p className="text-muted-foreground">
                    Проверенная репутация и тысячи довольных клиентов
                  </p>
                </Card>

                <Card className="p-6 text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                    <Icon name="Package" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl">10,000+ товаров</h3>
                  <p className="text-muted-foreground">
                    Широкий ассортимент электроники и аксессуаров
                  </p>
                </Card>

                <Card className="p-6 text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                    <Icon name="Users" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl">50,000+ клиентов</h3>
                  <p className="text-muted-foreground">
                    Нам доверяют по всей России
                  </p>
                </Card>
              </div>

              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Почему выбирают нас</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <Icon name="CheckCircle" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Официальная гарантия</h3>
                      <p className="text-muted-foreground">
                        Все товары поставляются с официальной гарантией производителя
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <Icon name="Truck" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Быстрая доставка</h3>
                      <p className="text-muted-foreground">
                        Доставляем по всей России в течение 1-3 дней
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <Icon name="CreditCard" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Удобная оплата</h3>
                      <p className="text-muted-foreground">
                        Принимаем все способы оплаты, включая рассрочку
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <Icon name="Headphones" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Поддержка 24/7</h3>
                      <p className="text-muted-foreground">
                        Наши специалисты всегда готовы помочь с выбором и ответить на вопросы
                      </p>
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

export default About;
