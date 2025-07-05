'use client';

import Link from 'next/link';

import { IBanner } from '@/features/banners/banner.interface';
import { ImageAtom } from '@/features/banners/components/atoms/ImageAtom';

interface Props {
  banner: IBanner;
  locale: 'en' | 'ko';
}

const BannerSlide = ({ banner, locale }: Props) => {
  const src = banner.imageUrl[locale];
  const alt = banner.description?.[locale] ?? banner.id;
  const link = banner.link[locale];

  return (
    <Link href={link} className='relative block w-full aspect-[16/9] h-[140px] overflow-hidden shadow-lg group'>
      <div className='relative w-full h-full'>
        <ImageAtom src={src} alt={alt} />
      </div>
      <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4'>
        {banner.description && <p className='text-white text-sm md:text-base mb-2'>{banner.description[locale]}</p>}
        {banner.buttonText && (
          <span className='inline px-3 py-1.5 w-fit bg-white text-[#222222] rounded-2xl shadow-md text-sm font-medium leading-none'>
            {banner.buttonText[locale]}
          </span>
        )}
      </div>
    </Link>
  );
};

export default BannerSlide;
