'use client';

import { useEffect } from 'react';

import { IconAtom } from '@/features/services/components/atoms/IconAtom';
import { IServiceItem } from '@/features/services/service.interface';
import { createPortal } from 'react-dom';

interface Props {
  open: boolean;
  service: IServiceItem & { link: string };
  onClose: () => void;
}

const ServiceDetailBottomSheet = ({ open, service, onClose }: Props) => {
  const root = document.getElementById('modal-root');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!root || !open) return null;

  const locale = 'ko';
  const description = locale === 'ko' && service.descriptionKo ? service.descriptionKo : service.descriptionEn;

  return createPortal(
    <div className='fixed inset-0 z-50'>
      <div className='absolute inset-0 bg-black/50' onClick={onClose} />
      <div
        className='absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl max-h-[80vh]
                   flex flex-col transform translate-y-0 transition-transform duration-300'
      >
        <button
          onClick={onClose}
          className='absolute top-3 right-4 text-2xl text-gray-500 hover:text-gray-700'
          aria-label='Close'
        >
          &times;
        </button>
        <div className='px-6 overflow-auto pt-6'>
          <div className='flex items-center space-x-4 mb-4'>
            <div className='w-16 h-16 bg-white rounded-lg shadow flex items-center justify-center'>
              <IconAtom src={service.iconUrl} alt={service.name} width={48} height={48} />
            </div>
            <h3 className='text-xl font-bold'>{service.name}</h3>
          </div>
          <div className='mb-6'>
            <h4 className='text-base font-semibold mb-1'>Description</h4>
            <p className='text-sm text-gray-600 leading-relaxed'>{description}</p>
          </div>
          {service.supportedNetworks && (
            <div className='mb-6'>
              <h4 className='text-base font-semibold mb-1'>Supported Networks</h4>
              <p className='text-sm text-gray-600'>{service.supportedNetworks.join(', ')}</p>
            </div>
          )}
        </div>
        <div className='px-6 pb-6 pt-2'>
          <button
            onClick={() => window.open(service.link, '_blank')}
            className='w-full py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition'
          >
            Go
          </button>
        </div>
      </div>
    </div>,
    root
  );
};

export default ServiceDetailBottomSheet;
