'use client';

import { IconAtom } from '@/features/services/components/atoms/IconAtom';
import { IServiceItem } from '@/features/services/service.interface';

interface Props {
  service: IServiceItem;
  onClickItem: () => void;
}

const ServiceItem = ({ service, onClickItem }: Props) => {
  const { name, iconUrl, descriptionEn, descriptionKo } = service;
  const locale = 'ko';

  const description = locale === 'ko' && descriptionKo ? descriptionKo : descriptionEn;

  return (
    <li className='flex items-start space-x-4 px-4 py-3 h-[74px]' onClick={onClickItem}>
      <IconAtom src={iconUrl} alt={name} />
      <div className='flex-1'>
        <p className='font-medium text-gray-900'>{name}</p>
        <p className='mt-1 text-sm text-gray-600 line-clamp-1'>{description}</p>
      </div>
    </li>
  );
};

export default ServiceItem;
