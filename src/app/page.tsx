import BannerCarousel from '@/features/banners/components/organisms/BannerCarousel';
import FavoritesList from '@/features/favorites/components/organisms/FavoritesList';
import ServiceList from '@/features/services/components/organisms/ServiceList';

export default function Home() {
  const locale = typeof navigator !== 'undefined' && navigator.language.startsWith('ko') ? 'ko' : 'en';
  return (
    <div>
      <BannerCarousel locale={locale} />
      <FavoritesList locale={locale} />
      <ServiceList locale={locale} />
    </div>
  );
}
