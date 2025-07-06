'use client';

import NextImage, { ImageProps } from 'next/image';

interface Props extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt?: string;
}

export const IconAtom = ({ src, alt = '', ...rest }: Props) => {
  return <NextImage src={src} alt={alt ?? ''} width={44} height={44} className='object-contain' {...rest} />;
};
