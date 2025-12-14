import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';
import { toast } from 'sonner';

const Contacts = () => {
  const cartCount = useCart(state => state.getTotalItems());
  const favoritesCount = useFavorites(state => state.items.length);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cartCount} favoritesCount={favoritesCount} />

      <div className="flex-1">
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Контакты
              </h1>
              <p className="text-xl text-muted-foreground">
                Свяжитесь с нами удобным способом
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                        <Icon name="Phone" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Телефон</h3>
                        <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                        <p className="text-sm text-muted-foreground">Бесплатно по России</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                        <Icon name="Mail" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">info@appshop.ru</p>
                        <p className="text-sm text-muted-foreground">Ответим в течение 24 часов</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                        <Icon name="MapPin" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Адрес офиса</h3>
                        <p className="text-muted-foreground">Москва, ул. Ленина, 1</p>
                        <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                        <Icon name="Clock" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Часы работы</h3>
                        <p className="text-muted-foreground">Понедельник - Пятница: 9:00 - 20:00</p>
                        <p className="text-muted-foreground">Суббота - Воскресенье: 10:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Мы в социальных сетях</h3>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon">
                      <Icon name="MessageCircle" className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Send" className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Mail" className="h-5 w-5" />
                    </Button>
                  </div>
                </Card>
              </div>

              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Ваше имя
                    </label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="ivan@example.com" required />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                      Телефон
                    </label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Опишите ваш вопрос..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" className="mr-2 h-5 w-5" />
                    Отправить сообщение
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
