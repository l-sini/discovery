'use client';

import { getServices } from '@/features/services/serviceApi';
import { useQuery } from '@tanstack/react-query';

function detectPlatform(): 'android' | 'ios' | 'unknown' {
  const ua = typeof navigator === 'undefined' ? '' : navigator.userAgent;
  if (/android/i.test(ua)) return 'android';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  return 'unknown';
}

export const useServices = () => {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const locale = (typeof navigator !== 'undefined' ? navigator.language : 'en').startsWith('ko') ? 'ko' : 'en';

  const platform = detectPlatform();
  const env = process.env.NODE_ENV as 'development' | 'stage' | 'production';

  const filtered = data.filter((svc) => {
    const { locales, platforms, environments } = svc.visibility || {};
    if (locales && locales.length && !locales.includes(locale)) return false;
    if (platforms && platforms.length && !platforms.includes(platform as 'android' | 'ios')) return false;
    if (environments && environments.length && !environments.includes(env)) return false;
    return true;
  });

  return { services: filtered, isLoading, isError };
};
