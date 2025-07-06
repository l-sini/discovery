'use client';

import { useState } from 'react';

import { ConfirmModal } from '@/features/favorites/components/atoms/ConfirmModal';
import FavoriteItem from '@/features/favorites/components/molecules/FavoriteItem';
import { useFavorites } from '@/features/favorites/useFavorite';

interface Props {
  locale: 'ko' | 'en';
}

const FavoritesList = ({ locale }: Props) => {
  const { favorites, isLoading, isError, removeAsync } = useFavorites();
  const [toDeleteId, setToDeleteId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  if (isLoading) return <p className='p-4 text-center'>{locale === 'ko' ? '로딩 중…' : 'Loading…'}</p>;
  if (isError)
    return (
      <p className='p-4 text-center text-red-500'>{locale === 'ko' ? '불러오기 실패' : 'Error loading Favorites'}</p>
    );

  return (
    <section className='my-2'>
      <h2 className='px-4 pt-4 text-base font-medium text-gray-800'>{locale === 'ko' ? '즐겨찾기' : 'Favorites'}</h2>
      <hr className='border-gray-200 mt-2' />
      <div className='divide-y divide-gray-200 px-2'>
        {favorites.map((item) => (
          <FavoriteItem
            key={item.id}
            {...item}
            onDelete={(id) => setToDeleteId(id)}
            isDeleting={deletingId === item.id}
            locale={locale}
          />
        ))}
      </div>
      <hr className='border-gray-200' />
      <ConfirmModal
        open={!!toDeleteId}
        onCancel={() => setToDeleteId(null)}
        onConfirm={async () => {
          if (!toDeleteId) return;
          setDeletingId(toDeleteId);
          try {
            await removeAsync(toDeleteId);
          } finally {
            setDeletingId(null);
            setToDeleteId(null);
          }
        }}
        title={locale === 'ko' ? '알림' : 'Notification'}
        confirmText={locale === 'ko' ? '확인' : 'Confirm'}
        cancelText={locale === 'ko' ? '취소' : 'Cancel'}
      >
        <p>
          {locale === 'ko'
            ? '이 사이트를 즐겨찾기 목록에서 삭제 하시겠습니까?'
            : 'Are you sure you want to delete this site from your favorites?'}
        </p>
      </ConfirmModal>
    </section>
  );
};

export default FavoritesList;
