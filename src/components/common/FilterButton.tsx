import { FilterButtonProps } from '@/types';
import { colors } from '@/constants/styles';

const FilterButton: React.FC<FilterButtonProps> = ({
  active,
  onClick,
  children
}) => {
  const baseClasses = 'px-3 sm:px-4 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-200';
  
  return (
    <button 
      className={baseClasses}
      style={{
        backgroundColor: active ? colors.btnActive : 'transparent',
        color: active ? colors.textPrimary : colors.textSecondary,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FilterButton;