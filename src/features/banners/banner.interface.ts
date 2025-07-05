export interface IBanner {
  id: string;
  imageUrl: {
    en: string;
    ko: string;
  };
  link: {
    en: string;
    ko: string;
  };
  description?: {
    en: string;
    ko: string;
  };
  buttonText?: {
    en: string;
    ko: string;
  };
}
