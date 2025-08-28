// Props des composants
import { Coffee, FilterType } from './entities';
import { Size, Variant } from './utilities';

export interface CoffeeCardProps {
  coffee: Coffee;
  className?: string;
}

export interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  variant?: Variant;
}

export interface StarRatingProps {
  rating: number | string | null;
  votes: number;
  size?: Size;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant: 'popular' | 'price' | 'status';
  className?: string;
}

export interface IconProps {
  src: string;
  alt: string;
  size?: Size | number;
  showLabel?: boolean;
  className?: string;
}

export interface CoffeeGridProps {
  coffees: Coffee[];
  className?: string;
}

export interface HeaderProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}