import { IFavoriteItem } from '@/features/favorites/favorite.interface';

const mockFavorites: IFavoriteItem[] = [
  {
    id: 'opensea',
    name: 'OpenSea',
    description: 'the largest NFT marketplace',
    link: 'https://opensea.io',
    iconUrl: 'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_opensea.png',
  },
  {
    id: 'moonpay',
    name: 'MoonPay',
    description: '',
    link: 'https://buy.moonpay.com/v2/buy',
    iconUrl: 'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_moonpay.png',
  },
  {
    id: 'rarible',
    name: 'Rarible',
    description: 'NFT Marketplace for Brands, Communities and Traders',
    link: 'https://rarible.com/',
    iconUrl: 'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_rarible.png',
  },
];

export default mockFavorites;
