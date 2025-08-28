import { HeaderProps } from '@/types';
import { FilterButton } from '@/components/common';
import { colors } from '@/constants/styles';

const Header: React.FC<HeaderProps> = ({
  activeFilter,
  onFilterChange
}) => {
  return (
    <div className="text-center ">
      {/* Title */}
      <h1 
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        style={{ color: colors.textPrimary }}
      >
        Our Collection
      </h1>
      
      {/* Description */}
      <p 
        className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed px-2"
        style={{ color: colors.textSecondary }}
      >
        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
      </p>
      
      {/* Filter Buttons */}
      <div className="flex gap-3 sm:gap-4 justify-center mb-4 md:mb-5 flex-wrap">
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