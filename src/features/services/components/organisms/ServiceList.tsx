'use client';

import { useState } from 'react';

import ServiceDetailBottomSheet from '@/features/services/components/molecules/ServiceDetailBottomSheet';
import ServiceItem from '@/features/services/components/molecules/ServiceItem';
import { IServiceItem } from '@/features/services/service.interface';
import { useServices } from '@/features/services/useService';

const ServiceList = () => {
  const [selected, setSelected] = useState<(IServiceItem & { link: string }) | null>(null);

  const { services, isLoading, isError } = useServices();

  if (isLoading) return <p className='p-4 text-center'>로딩 중…</p>;
  if (isError) return <p className='p-4 text-center text-red-500'>불러오기 실패</p>;

  return (
    <>
      <section className='my-2'>
        <h2 className='px-4 pt-4 text-base font-medium text-gray-800'>목록</h2>
        <hr className='border-gray-200 mt-2' />
        <div className='divide-y divide-gray-200 px-2'>
          {services.map((svc) => (
            <ServiceItem
              key={svc.id}
              service={svc}
              onClickItem={() => setSelected(svc as IServiceItem & { link: string })}
            />
          ))}
        </div>
      </section>
      <ServiceDetailBottomSheet open={!!selected} service={selected!} onClose={() => setSelected(null)} />
    </>
  );
};

export default ServiceList;
