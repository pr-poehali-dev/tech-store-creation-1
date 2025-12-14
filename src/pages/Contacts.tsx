import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contactInfo = [
    { icon: 'Phone', title: 'Телефон', value: '+7 (999) 123-45-67', description: 'Звоните с 9:00 до 21:00' },
    { icon: 'Mail', title: 'Email', value: 'info@appshop.ru', description: 'Ответим в течение 24 часов' },
    { icon: 'MapPin', title: 'Адрес', value: 'Москва, ул. Примерная, 1', description: 'Пн-Вс: 10:00-22:00' },
    { icon: 'Clock', title: 'Часы работы', value: 'Ежедневно', description: '10:00 - 22:00' },
  ];

  return (
    <div className="min-h-screen flex flex-col dark">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 py-12">
          <div className="container">
            <h1 className="font-heading text-4xl font-bold mb-4">Контакты</h1>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
          </div>
        </div>

        <div className="container py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Наши контакты</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="hover:border-primary/50 transition-all" style={{ animationDelay: `${index * 100}ms` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon name={info.icon as any} size={24} className="text-white" />
                          </div>
                          <div>
                            <h3 className="font-heading font-semibold mb-1">{info.title}</h3>
                            <p className="font-medium mb-1">{info.value}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold mb-4">Мы в социальных сетях</h3>
                <div className="flex space-x-4">
                  <Button size="icon" variant="outline" className="hover:border-primary hover:text-primary">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:border-primary hover:text-primary">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:border-primary hover:text-primary">
                    <Icon name="Twitter" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:border-primary hover:text-primary">
                    <Icon name="Youtube" size={20} />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold mb-6">Напишите нам</h2>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="ivan@example.com" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Ваше сообщение..." rows={5} className="mt-2" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 h-12">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 overflow-hidden animate-fade-in" style={{ animationDelay: '300ms' }}>
            <CardContent className="p-0">
              <div className="aspect-video bg-muted/30 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <Icon name="Map" size={48} className="mx-auto text-muted-foreground" />
                  <p className="text-muted-foreground">Карта загружается...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
