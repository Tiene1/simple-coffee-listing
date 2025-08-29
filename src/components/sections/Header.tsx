import { HeaderProps } from '@/types';
import { FilterButton } from '@/components/common';
import { colors } from '@/constants/styles';

const Header: React.FC<HeaderProps> = ({
  activeFilter,
  onFilterChange
}) => {
  return (
    <div className="text-center lg:flex-none xl:flex-none">
      {/* Title */}
      <h1 
        className="text-4xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-2 xl:mb-1"
        style={{ color: colors.textPrimary }}
      >
        Our Collection
      </h1>
      
      {/* Description */}
      <p 
        className="text-sm sm:text-base md:text-lg lg:text-sm xl:text-sm max-w-xl lg:max-w-lg xl:max-w-md mx-auto mb-6 md:mb-8 lg:mb-4 xl:mb-5 lg:leading-relaxed xl:leading-tight px-2"
        style={{ color: colors.textSecondary }}
      >
        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
      </p>
      
      {/* Filter Buttons */}
      <div className="flex gap-3 sm:gap-4 lg:gap-3 xl:gap-2 justify-center mb-4 md:mb-5 lg:mb-3 xl:mb-2 flex-wrap">
        <FilterButton
          active={activeFilter === 'all'}
          onClick={() => onFilterChange('all')}
        >
          All Products
        </FilterButton>
        <FilterButton
          active={activeFilter === 'available'}
          onClick={() => onFilterChange('available')}
        >
          Available Now
        </FilterButton>
      </div>
    </div>
  );
};

export default Header;