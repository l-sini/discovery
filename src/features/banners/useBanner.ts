import { IBanner } from '@/features/banners/banner.interface';
import { getBanners } from '@/features/banners/bannerApi';
import { useQuery } from '@tanstack/react-query';

export const useBanners = () => {
  return useQuery<IBanner[], Error>({
    queryKey: ['banners'],
    queryFn: async () => {
      const data: IBanner[] = await getBanners();
      return data;
    },
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
};
