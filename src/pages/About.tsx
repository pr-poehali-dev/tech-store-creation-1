import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const features = [
    { icon: 'Award', title: 'Гарантия качества', description: 'Только оригинальная продукция от официальных поставщиков' },
    { icon: 'Truck', title: 'Быстрая доставка', description: 'Доставляем по всей России в течение 1-3 дней' },
    { icon: 'Shield', title: 'Официальная гарантия', description: 'Полная поддержка производителя на весь гарантийный срок' },
    { icon: 'Headphones', title: 'Поддержка 24/7', description: 'Наши специалисты всегда готовы помочь вам' },
  ];

  const stats = [
    { value: '10+', label: 'Лет на рынке' },
    { value: '50K+', label: 'Довольных клиентов' },
    { value: '200+', label: 'Товаров в наличии' },
    { value: '24/7', label: 'Поддержка' },
  ];

  return (
    <div className="min-h-screen flex flex-col dark">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 py-12">
          <div className="container">
            <h1 className="font-heading text-4xl font-bold mb-4">О магазине AppShop</h1>
            <p className="text-xl text-muted-foreground">Ваш надежный партнер в мире технологий</p>
          </div>
        </div>

        <div className="container py-16">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl font-bold">Наша история</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                AppShop был основан в 2014 году с простой миссией — сделать современные технологии 
                доступными для каждого. За годы работы мы выросли из небольшого магазина в один из 
                ведущих ритейлеров электроники в России.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Сегодня мы предлагаем широкий ассортимент смартфонов, ноутбуков, планшетов и 
                аксессуаров от лучших мировых брендов. Наша команда экспертов тщательно отбирает 
                каждый товар, чтобы гарантировать качество и надежность.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="font-heading text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-muted/30 py-16">
          <div className="container">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="animate-fade-in border-2 hover:border-primary/50 transition-all" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Icon name={feature.icon as any} size={32} className="text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="container py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-6">Наши ценности</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-2 flex items-center">
                    <Icon name="Target" size={24} className="mr-3 text-primary" />
                    Качество превыше всего
                  </h3>
                  <p className="text-muted-foreground">
                    Мы работаем только с официальными поставщиками и гарантируем подлинность каждого товара.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-2 flex items-center">
                    <Icon name="Users" size={24} className="mr-3 text-primary" />
                    Клиент в центре внимания
                  </h3>
                  <p className="text-muted-foreground">
                    Ваше удовлетворение — наш главный приоритет. Мы делаем всё возможное, чтобы превзойти ожидания.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-2 flex items-center">
                    <Icon name="Zap" size={24} className="mr-3 text-primary" />
                    Инновации и развитие
                  </h3>
                  <p className="text-muted-foreground">
                    Мы постоянно совершенствуем наш сервис и следим за новейшими технологиями на рынке.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
