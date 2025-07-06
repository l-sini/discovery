'use client';

import { IFavoriteItem } from '@/features/favorites/favorite.interface';
import { getFavorites, removeFavorite } from '@/features/favorites/favoriteApi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useFavorites = () => {
  const queryClient = useQueryClient();

  const {
    data: favorites = [],
    isLoading,
    isError,
    refetch,
  } = useQuery<IFavoriteItem[], Error>({
    queryKey: ['favorites'],
    queryFn: getFavorites,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  const { mutateAsync: removeAsync, isPending: isDeleting } = useMutation<void, Error, string>({
    mutationFn: removeFavorite,
    onSuccess: (_data, id) => {
      queryClient.setQueryData<IFavoriteItem[]>(['favorites'], (old) => old?.filter((item) => item.id !== id) ?? []);
    },
  });

  return {
    favorites,
    isLoading,
    isError,
    isDeleting,
    refetch,
    removeAsync,
  };
};
