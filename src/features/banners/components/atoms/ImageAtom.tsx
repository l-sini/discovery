import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface Props extends Omit<NextImageProps, 'src' | 'alt'> {
  src: string;
  alt?: string;
}

export const ImageAtom = ({ src, alt = '', ...rest }: Props) => {
  return <NextImage src={src} alt={alt} fill className='object-cover' {...rest} />;
};
