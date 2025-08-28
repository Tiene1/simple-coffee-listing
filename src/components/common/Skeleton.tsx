import { colors } from '@/constants/styles';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <div 
      className={`animate-pulse rounded ${className}`}
      style={{ backgroundColor: colors.slate }}
    />
  );
};

export default Skeleton;