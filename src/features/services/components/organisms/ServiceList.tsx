'use client';

import { useState } from 'react';

import ServiceDetailBottomSheet from '@/features/services/components/molecules/ServiceDetailBottomSheet';
import ServiceItem from '@/features/services/components/molecules/ServiceItem';
import { IServiceItem } from '@/features/services/service.interface';
import { useServices } from '@/features/services/useService';

interface Props {
  locale: 'ko' | 'en';
}

const ServiceList = ({ locale }: Props) => {
  const [selected, setSelected] = useState<(IServiceItem & { link: string }) | null>(null);

  const { services, isLoading, isError } = useServices(locale);

  if (isLoading) return <p className='p-4 text-center'>{locale === 'ko' ? '로딩 중…' : 'Loading…'}</p>;
  if (isError)
    return (
      <p className='p-4 text-center text-red-500'>{locale === 'ko' ? '불러오기 실패' : 'Error loading Services'}</p>
    );

  return (
    <>
      <section className='my-2'>
        <h2 className='px-4 pt-4 text-base font-medium text-gray-800'>{locale === 'ko' ? '목록' : 'List'}</h2>
        <hr className='border-gray-200 mt-2' />
        <div className='divide-y divide-gray-200 px-2'>
          {services.map((svc) => (
            <ServiceItem
              key={svc.id}
              service={svc}
              locale={locale}
              onClickItem={() => setSelected(svc as IServiceItem & { link: string })}
            />
          ))}
        </div>
      </section>
      <ServiceDetailBottomSheet
        open={!!selected}
        service={selected!}
        onClose={() => setSelected(null)}
        locale={locale}
      />
    </>
  );
};

export default ServiceList;
