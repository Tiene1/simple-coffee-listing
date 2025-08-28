import Skeleton from './Skeleton';
import { colors } from '@/constants/styles';

const CoffeeCardSkeleton: React.FC = () => {
  return (
    <div 
      className="rounded-xl overflow-hidden p-0"
      style={{ 
        backgroundColor: colors.bgCard,
        border: `1px solid ${colors.cardBorder}` 
      }}
    >
      {/* Image skeleton */}
      <Skeleton className="w-full h-40" />
      
      {/* Content skeleton */}
      <div className="p-4">
        {/* Header with name and price */}
        <div className="flex items-center justify-between mb-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-12" />
        </div>

        {/* Rating skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCardSkeleton;