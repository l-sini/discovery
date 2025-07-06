'use client';

import { ReactNode } from 'react';

import { createPortal } from 'react-dom';

interface Props {
  open: boolean;
  title?: string;
  children: ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal = ({
  open,
  title = '알림',
  children,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
}: Props) => {
  if (!open) return null;
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return createPortal(
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg w-80 overflow-hidden px-2'>
        <div className='px-4 py-2'>
          <h3 className='text-center text-base font-medium text-gray-900'>{title}</h3>
        </div>
        <div className='border-t border-dashed border-gray-300' />
        <div className='p-4 text-center text-sm text-gray-700'>{children}</div>
        <div className='border-t border-gray-200 flex'>
          <button onClick={onCancel} className='flex-1 py-3 text-sm text-gray-700 hover:bg-gray-100 transition'>
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className='flex-1 py-3 text-sm text-red-600 hover:bg-red-50 transition border-l border-gray-200'
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};
