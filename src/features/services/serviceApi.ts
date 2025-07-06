import { IServiceItem } from '@/features/services/service.interface';

import mockServices from '@/mocks/mockService';

const isDev = process.env.NODE_ENV === 'development';
const BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getServices = async (): Promise<IServiceItem[]> => {
  if (isDev) return Promise.resolve(mockServices);
  const res = await fetch(`${BASE}/services`);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};
