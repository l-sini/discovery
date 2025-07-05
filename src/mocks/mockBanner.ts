import { IBanner } from '@/features/banners/banner.interface';

const mockCampaigns: IBanner[] = [
  {
    id: 'mapo-airdrop',
    imageUrl: {
      en: 'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_mapo_en.png',
      ko: 'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_mapo_kr.png',
    },
    link: {
      en: 'https://store.dcentwallet.com/blogs/post/tap-that-drop-with-map-protocol',
      ko: 'https://store-kr.dcentwallet.com/blogs/post/tap-that-drop-with-map-protocol',
    },
  },
  {
    id: 'dcent-wallet',
    imageUrl: {
      en: 'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_dcent.png',
      ko: 'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_dcent.png',
    },
    description: {
      en: "Enhance your security with D'CENT biometric wallet",
      ko: '디센트 지문인증형 지갑으로 한층 더 강화된 보안을 경험하세요!',
    },
    link: {
      en: 'https://store.dcentwallet.com',
      ko: 'https://store-kr.dcentwallet.com',
    },
    buttonText: {
      en: 'Buy Now',
      ko: '구매하기',
    },
  },
  {
    id: 'dcent-blog',
    imageUrl: {
      en: 'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_blog.png',
      ko: 'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_blog.png',
    },
    description: {
      en: 'Visit the new D’CENT Blog to explore the latest updates first!',
      ko: '새로운 디센트 블로그를 방문하여 최신 업데이트를 먼저 확인해보세요!',
    },
    link: {
      en: 'https://store.dcentwallet.com/blogs/post',
      ko: 'https://store-kr.dcentwallet.com/blogs/post',
    },
    buttonText: {
      en: 'Explore',
      ko: '확인하기',
    },
  },
];

export default mockCampaigns;
