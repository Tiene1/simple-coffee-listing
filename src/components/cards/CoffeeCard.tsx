import Image from 'next/image';
import { CoffeeCardProps } from '@/types';
import { Badge, StarRating } from '@/components/common';
import { colors } from '@/constants/styles';

const CoffeeCard: React.FC<CoffeeCardProps> = ({ 
  coffee, 
  className = '' 
}) => {
  const {
    name,
    image,
    price,
    rating,
    votes,
    popular,
    available
  } = coffee;

  return (
    <div 
      className={`rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200 ${className}`}
      style={{ 
        backgroundColor: colors.bgCard,
        border: `0px solid ${colors.cardBorder}`
      }}
    >
      {/* Image Container */}
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={400}
          height={160}
          className="w-full h-40 lg:h-32 object-cover rounded-xl"
        />
        {popular && (
          <div className="absolute top-3 left-3 lg:top-2 lg:left-2">
            <Badge variant="popular">Popular</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 lg:p-3">
        {/* Header with name and price */}
        <div className="flex items-center justify-between mb-2 lg:mb-1">
          <h3 
            className="font-semibold text-lg lg:text-base truncate"
            style={{ color: colors.textPrimary }}
          >
            {name}
          </h3>
          <Badge variant="price">{price}</Badge>
        </div>

        {/* Rating and availability */}
        <div className="flex items-center justify-between">
          <StarRating rating={rating} votes={votes} />
          {!available && (
            <Badge variant="status">Sold out</Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;