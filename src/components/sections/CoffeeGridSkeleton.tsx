import { CoffeeCardSkeleton } from '@/components/common';

const CoffeeGridSkeleton: React.FC = () => {
  // Créer 6 cartes skeleton (même nombre que l'API)
  const skeletonCards = Array.from({ length: 6 }, (_, index) => (
    <CoffeeCardSkeleton key={index} />
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {skeletonCards}
    </div>
  );
};

export default CoffeeGridSkeleton;