import { Coffee } from '@/types';

// Service API pour récupérer les données de café
const API_URL = 'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json';

export const fetchCoffees = async (): Promise<Coffee[]> => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: Coffee[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching coffee data:', error);
    throw error;
  }
};