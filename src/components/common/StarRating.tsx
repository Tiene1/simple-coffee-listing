import Image from 'next/image';
import { StarRatingProps } from '@/types';
import { colors } from '@/constants/styles';

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  votes,
  size = 'md'
}) => {
  const sizeMap = {
    sm: 12,
    md: 16,
    lg: 20
  };

  const starSize = sizeMap[size];

  // Convert rating to number if it's a string, handle null/undefined
  const numericRating = rating ? Number(rating) : null;
  
  if (!numericRating || numericRating === 0) {
    return (
      <div className="flex items-center gap-1">
        <Image
          src="/assets/icons/Star.svg"
          alt="No rating"
          width={starSize}
          height={starSize}
          className="opacity-50"
        />
        <span className="text-sm" style={{ color: colors.textMuted }}>No ratings</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <Image
        src="/assets/icons/Star_fill.svg"
        alt="Rating"
        width={starSize}
        height={starSize}
        className="text-yellow-400"
      />
      <span 
        className="font-semibold"
        style={{ color: colors.textPrimary }}
      >
        {numericRating.toFixed(1)}
      </span>
      <span 
        className="text-sm"
        style={{ color: colors.textSecondary }}
      >
        ({votes} vote{votes !== 1 ? 's' : ''})
      </span>
    </div>
  );
};

export default StarRating;