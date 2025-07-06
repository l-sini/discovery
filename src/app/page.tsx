import BannerCarousel from '@/features/banners/components/organisms/BannerCarousel';
import FavoritesList from '@/features/favorites/components/organisms/FavoritesList';
import ServiceList from '@/features/services/components/organisms/ServiceList';

export default function Home() {
  return (
    <div>
      <BannerCarousel locale='ko' />
      <FavoritesList />
      <ServiceList />
    </div>
  );
}
