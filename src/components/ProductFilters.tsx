import { FilterState } from '@/types/product';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { brands, categories } from '@/data/products';

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const ProductFilters = ({ filters, onFilterChange }: ProductFiltersProps) => {
  const handleBrandToggle = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    
    onFilterChange({ ...filters, brands: newBrands });
  };

  const handleCategoryToggle = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handlePriceChange = (value: number[]) => {
    onFilterChange({ ...filters, priceRange: [value[0], value[1]] });
  };

  const handleRatingChange = (value: number[]) => {
    onFilterChange({ ...filters, minRating: value[0] });
  };

  const resetFilters = () => {
    onFilterChange({
      priceRange: [0, 300000],
      brands: [],
      minRating: 0,
      categories: [],
      searchQuery: ''
    });
  };

  return (
    <Card className="p-6 space-y-6 sticky top-20">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Фильтры</h3>
        <Button variant="ghost" size="sm" onClick={resetFilters}>
          Сбросить
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <Label className="text-base font-semibold mb-3 block">Цена</Label>
          <Slider
            min={0}
            max={300000}
            step={1000}
            value={filters.priceRange}
            onValueChange={handlePriceChange}
            className="mb-3"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{filters.priceRange[0].toLocaleString('ru-RU')} ₽</span>
            <span>{filters.priceRange[1].toLocaleString('ru-RU')} ₽</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-base font-semibold">Рейтинг</Label>
        <Slider
          min={0}
          max={5}
          step={0.5}
          value={[filters.minRating]}
          onValueChange={handleRatingChange}
          className="mb-2"
        />
        <div className="text-sm text-muted-foreground">
          От {filters.minRating.toFixed(1)} ⭐
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-base font-semibold">Категории</Label>
        {categories.map(category => (
          <div key={category} className="flex items-center space-x-2">
            <Checkbox
              id={`category-${category}`}
              checked={filters.categories.includes(category)}
              onCheckedChange={() => handleCategoryToggle(category)}
            />
            <label
              htmlFor={`category-${category}`}
              className="text-sm cursor-pointer"
            >
              {category}
            </label>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <Label className="text-base font-semibold">Бренды</Label>
        {brands.map(brand => (
          <div key={brand} className="flex items-center space-x-2">
            <Checkbox
              id={`brand-${brand}`}
              checked={filters.brands.includes(brand)}
              onCheckedChange={() => handleBrandToggle(brand)}
            />
            <label
              htmlFor={`brand-${brand}`}
              className="text-sm cursor-pointer"
            >
              {brand}
            </label>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProductFilters;
