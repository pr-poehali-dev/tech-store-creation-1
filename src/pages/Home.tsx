import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const categories = [
    { name: 'Смартфоны', icon: 'Smartphone', count: 245 },
    { name: 'Ноутбуки', icon: 'Laptop', count: 189 },
    { name: 'Планшеты', icon: 'Tablet', count: 98 },
    { name: 'Наушники', icon: 'Headphones', count: 156 },
    { name: 'Часы', icon: 'Watch', count: 87 },
    { name: 'Камеры', icon: 'Camera', count: 73 },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 129990,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
      rating: 4.9,
      brand: 'Apple',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      price: 114990,
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500',
      rating: 4.8,
      brand: 'Samsung',
    },
    {
      id: 3,
      name: 'MacBook Pro 16"',
      price: 249990,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
      rating: 5.0,
      brand: 'Apple',
    },
    {
      id: 4,
      name: 'Sony WH-1000XM5',
      price: 29990,
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500',
      rating: 4.7,
      brand: 'Sony',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col dark">
      <Header />
      <div className="flex-1 bg-gradient-to-b from-background to-secondary/20">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200')] bg-cover bg-center mix-blend-overlay" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            Добро пожаловать в AppShop
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Новейшие технологии и гаджеты по лучшим ценам
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 text-lg px-8">
                <Icon name="ShoppingBag" className="mr-2" size={20} />
                Каталог
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                О магазине
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Категории товаров</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link key={category.name} to="/catalog">
              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={category.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} товаров</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-secondary/30 rounded-3xl my-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Хиты продаж</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
                    <Icon name="Heart" size={20} />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </span>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                    <Icon name="ShoppingCart" size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/catalog">
            <Button size="lg" variant="outline" className="text-lg px-8">
              Смотреть все товары
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Icon name="Truck" size={32} className="text-green-600" />
            </div>
            <h3 className="font-bold text-xl mb-2">Быстрая доставка</h3>
            <p className="text-muted-foreground">
              Доставим ваш заказ в течение 1-2 дней по всей России
            </p>
          </Card>
          <Card className="p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <Icon name="ShieldCheck" size={32} className="text-blue-600" />
            </div>
            <h3 className="font-bold text-xl mb-2">Гарантия качества</h3>
            <p className="text-muted-foreground">
              Все товары оригинальные с официальной гарантией
            </p>
          </Card>
          <Card className="p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
              <Icon name="HeadphonesIcon" size={32} className="text-purple-600" />
            </div>
            <h3 className="font-bold text-xl mb-2">Поддержка 24/7</h3>
            <p className="text-muted-foreground">
              Наша служба поддержки всегда готова помочь вам
            </p>
          </Card>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;