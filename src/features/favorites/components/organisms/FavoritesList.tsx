'use client';

import { useState } from 'react';

import { ConfirmModal } from '@/features/favorites/components/atoms/ConfirmModal';
import FavoriteItem from '@/features/favorites/components/molecules/FavoriteItem';
import { useFavorites } from '@/features/favorites/useFavorite';

const FavoritesList = () => {
  const { favorites, isLoading, isError, removeAsync } = useFavorites();
  const [toDeleteId, setToDeleteId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  if (isLoading) return <p className='p-4 text-center'>로딩 중…</p>;
  if (isError) return <p className='p-4 text-center text-red-500'>불러오기 실패</p>;

  return (
    <section className='my-2'>
      <h2 className='px-4 pt-4 text-base font-medium text-gray-800'>즐겨찾기</h2>
      <hr className='border-gray-200 mt-2' />
      <div className='divide-y divide-gray-200 px-2'>
        {favorites.map((item) => (
          <FavoriteItem
            key={item.id}
            {...item}
            onDelete={(id) => setToDeleteId(id)}
            isDeleting={deletingId === item.id}
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
      >
        <p>이 사이트를 즐겨찾기 목록에서 삭제 하시겠습니까?</p>
      </ConfirmModal>
    </section>
  );
};

export default FavoritesList;
