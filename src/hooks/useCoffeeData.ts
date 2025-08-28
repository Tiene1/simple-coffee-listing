import { useState, useEffect } from 'react';
import { Coffee } from '@/types';
import { fetchCoffees } from '@/services';

interface UseCoffeeDataReturn {
  coffees: Coffee[];
  loading: boolean;
  error: string | null;
}

export const useCoffeeData = (): UseCoffeeDataReturn => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCoffees = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await fetchCoffees();
        setCoffees(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadCoffees();
  }, []);

  return { coffees, loading, error };
};