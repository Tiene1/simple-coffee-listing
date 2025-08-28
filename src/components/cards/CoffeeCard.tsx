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
        border: `1px solid ${colors.cardBorder}`
      }}
    >
      {/* Image Container */}
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={400}
          height={160}
          className="w-full h-40 object-cover rounded-xl"
        />
        {popular && (
          <div className="absolute top-3 left-3">
            <Badge variant="popular">Popular</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Header with name and price */}
        <div className="flex items-center justify-between mb-2">
          <h3 
            className="font-semibold text-lg truncate"
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