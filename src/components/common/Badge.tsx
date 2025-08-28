import { BadgeProps } from '@/types';
import { colors } from '@/constants/styles';

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant, 
  className = '' 
}) => {
  const baseClasses = 'px-2 py-1 rounded-lg text-sm font-medium';
  
  const variantClasses = {
    popular: 'text-black font-semibold',
    price: 'text-black font-semibold', 
    status: 'text-sm'
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