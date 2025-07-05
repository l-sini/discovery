'use client';

import { useCallback, useEffect, useState } from 'react';

import { useBanners } from '@/features/banners/useBanner';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import BannerSlide from '../molecules/BannerSlide';

interface Props {
  locale: 'en' | 'ko';
}

export const BannerCarousel = ({ locale }: Props) => {
  const { data: banners, isLoading, isError } = useBanners();
  const autoplay = Autoplay({ delay: 2500, stopOnInteraction: false });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    emblaApi?.on('select', onSelect);
  }, [emblaApi, onSelect]);

  if (isLoading) return <p>Loading…</p>;
  if (isError || !banners) return <p>Error loading banners.</p>;

  const total = banners.length;
  const current = selectedIndex + 1;

  return (
    <div className='relative'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {banners?.map((b) => (
            <div className='min-w-full' key={b.id}>
              <BannerSlide banner={b} locale={locale} />
            </div>
          ))}
        </div>
      </div>
      <div className='absolute bottom-2 right-1 bg-opacity-50 text-white px-3 py-1 rounded-full text-sm'>
        {current} / {total}
      </div>
    </div>
  );
};

export default BannerCarousel;
