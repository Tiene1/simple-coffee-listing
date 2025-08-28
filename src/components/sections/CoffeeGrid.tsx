import { CoffeeGridProps } from '@/types';
import { CoffeeCard } from '@/components/cards';

const CoffeeGrid: React.FC<CoffeeGridProps> = ({ 
  coffees, 
  className = '' 
}) => {
  return (
    <div 
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ${className}`}
    >
      {coffees.map((coffee) => (
        <CoffeeCard 
          key={coffee.id} 
          coffee={coffee}
        />
      ))}
    </div>
  );
};

export default CoffeeGrid;