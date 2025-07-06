'use client';

import { cn } from '@/lib/utils';

interface Props {
  onClick: () => void;
  isDeleting?: boolean;
}

export const DeleteButton = ({ onClick, isDeleting = false }: Props) => {
  return (
    <button onClick={onClick} disabled={isDeleting} className='flex flex-col items-center space-y-1 p-1'>
      <div className={cn('w-6 h-8 clip-bookmark', isDeleting ? 'bg-gray-300' : 'bg-gray-400')} />
      <span className={cn('text-xs', isDeleting ? 'text-gray-400' : 'text-gray-600')}>
        {isDeleting ? '삭제중…' : '삭제'}
      </span>
    </button>
  );
};
