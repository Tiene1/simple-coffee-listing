import { BadgeProps } from '@/types';
import { colors } from '@/constants/styles';

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant, 
  className = '' 
}) => {
  const baseClasses = 'px-1.5 py-0.5 rounded-md text-xs font-medium md:px-2 md:py-1 md:text-sm md:rounded-lg';
  
  const variantClasses = {
    popular: 'text-black font-semibold',
    price: 'text-black font-semibold', 
    status: 'text-xs md:text-sm'
  };
  
  const variantStyles = {
    popular: { backgroundColor: colors.badgePopular },
    price: { backgroundColor: colors.badgePrice },
    status: { color: colors.soldOut }
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <span 
      className={classes}
      style={variantStyles[variant]}
    >
      {children}
    </span>
  );
};

export default Badge;