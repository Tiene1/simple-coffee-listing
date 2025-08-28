// Types des entités métier
export interface Coffee {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number | string | null;
  votes: number;
  popular: boolean;
  available: boolean;
}

export type FilterType = 'all' | 'available';