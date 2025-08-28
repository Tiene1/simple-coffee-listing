'use client';

import { useState, useMemo } from 'react';
import { FilterType } from '@/types';
import { useCoffeeData } from '@/hooks';
import { Header, CoffeeGrid, CoffeeGridSkeleton } from '@/components/sections';
import { colors } from '@/constants/styles';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const { coffees, loading, error } = useCoffeeData();

  // Filter coffees based on active filter
  const filteredCoffees = useMemo(() => {
    if (activeFilter === 'available') {
      return coffees.filter(coffee => coffee.available);
    }
    return coffees;
  }, [activeFilter, coffees]);

  // Loading state avec skeleton
  if (loading) { 
    return (
      <div className="w-[95%] md:w-[85%] lg:w-[75%] xl:w-[65%] container mx-auto px-4 md:px-6 py-6 md:py-8 max-w-6xl flex flex-col rounded-2xl"
        style={{ backgroundColor: colors.bgCard }}>
        <div className="flex-none">
          <Header 
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          
          <CoffeeGridSkeleton />
        </div>

        {/* Footer */}
        <div className="text-center pt-5">
          <div className="text-sm" style={{ color: colors.textSecondary }}>
            Coded by{' '}
            <a 
              href="#" 
              className="transition-colors"
              style={{ color: colors.textSecondary }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.textPrimary}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}
            >
              Tiene Yoma Paul
            </a>
            {' '}| Challenge by{' '}
            <a 
              href="https://www.devchallenges.io?ref=challenge" 
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: colors.textSecondary }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.textPrimary}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}
            >
              devChallenges.io
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-red-400 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="w-[95%] md:w-[85%] lg:w-[75%] xl:w-[65%] container mx-auto px-4 md:px-6 py-6 md:py-8 max-w-6xl flex flex-col rounded-2xl"
    style={{ 
        backgroundColor: colors.bgCard,
      }}>
      <div className="flex-none">
        <Header 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        
        <CoffeeGrid coffees={filteredCoffees} />
      </div>

      {/* Footer */}
      <div className="text-center pt-5">
        <div className="text-sm text-gray-400">
          Coded by{' '}
          <a href="#" className="hover:text-white transition-colors">
            Tiene Yoma Paul
          </a>
          {' '}| Challenge by{' '}
          <a 
            href="https://www.devchallenges.io?ref=challenge" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            devChallenges.io
          </a>
        </div>
      </div>
    </div>
  );
}