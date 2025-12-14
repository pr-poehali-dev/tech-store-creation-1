import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                <Icon name="Smartphone" className="text-white" size={20} />
              </div>
              <span className="font-heading font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AppShop
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Современный магазин техники с лучшими ценами и сервисом
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/catalog" className="hover:text-primary transition-colors">Смартфоны</Link></li>
              <li><Link to="/catalog" className="hover:text-primary transition-colors">Ноутбуки</Link></li>
              <li><Link to="/catalog" className="hover:text-primary transition-colors">Планшеты</Link></li>
              <li><Link to="/catalog" className="hover:text-primary transition-colors">Аксессуары</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">О магазине</Link></li>
              <li><Link to="/delivery" className="hover:text-primary transition-colors">Доставка</Link></li>
              <li><Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@appshop.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 AppShop. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
