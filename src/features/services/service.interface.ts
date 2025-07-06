export interface IServiceItem {
  id: string;
  name: string;
  iconUrl: string;
  descriptionEn?: string;
  descriptionKo?: string;
  supportedNetworks?: string[];
  visibility?: {
    locales?: Array<'en' | 'ko'>;
    platforms?: Array<'android' | 'ios'>;
    environments?: Array<'development' | 'stage' | 'production'>;
  };
}
