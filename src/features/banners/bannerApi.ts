import { IBanner } from '@/features/banners/banner.interface';

import mockBanners from '@/mocks/mockBanner';

const isDev = process.env.NODE_ENV === 'development';
const BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getBanners = async (): Promise<IBanner[]> => {
  if (isDev) {
    return Promise.resolve(mockBanners);
  }

  const res = await fetch(`${BASE}/banners`);
  if (!res.ok) {
    throw new Error(`Failed to fetch banners: ${res.status}`);
  }
  return res.json();
};
