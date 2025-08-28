import Image from 'next/image';
import { IconProps } from '@/types';

const Icon: React.FC<IconProps> = ({
  src,
  alt,
  size = 'md',
  showLabel = false,
  className = ''
}) => {
  const sizeMap = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const iconSize = typeof size === 'number' ? size : sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={iconSize}
        height={iconSize}
        className="object-contain"
      />
      {showLabel && (
        <span className="text-xs text-gray-400">{alt}</span>
      )}
    </div>
  );
};

export default Icon;