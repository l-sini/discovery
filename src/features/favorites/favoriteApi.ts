import { IFavoriteItem } from '@/features/favorites/favorite.interface';

import mockFavorites from '@/mocks/mockFavorites';

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getFavorites = async (): Promise<IFavoriteItem[]> => {
  if (process.env.NODE_ENV === 'development') {
    return Promise.resolve(mockFavorites);
  }
  const res = await fetch(`${BASE}/favorites`);
  if (!res.ok) {
    throw new Error(`Failed to fetch favorites: ${res.status}`);
  }
  return res.json();
};

export const removeFavorite = async (id: string): Promise<void> => {
  if (process.env.NODE_ENV === 'development') {
    return Promise.resolve();
  }
  const res = await fetch(`${BASE}/favorites/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    throw new Error(`Failed to delete favorite: ${res.status}`);
  }
};
