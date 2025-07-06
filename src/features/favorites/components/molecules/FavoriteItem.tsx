'use client';

import Link from 'next/link';

import { DeleteButton } from '@/features/favorites/components/atoms/DeleteButton';
import { IconAtom } from '@/features/favorites/components/atoms/IconAtom';

interface Props {
  id: string;
  name: string;
  description: string;
  link: string;
  iconUrl: string;
  onDelete: (id: string) => void;
  isDeleting?: boolean;
}

const FavoriteItem = ({ id, name, description, link, iconUrl, onDelete, isDeleting = false }: Props) => (
  <li className='flex items-center justify-between px-4 py-3 border-b last:border-b-0'>
    <Link href={link} target='_blank' rel='noopener noreferrer' className='flex items-center space-x-3 flex-1'>
      <div className='w-10 h-10 flex-shrink-0 bg-white rounded-lg shadow flex items-center justify-center'>
        <IconAtom src={iconUrl} alt={name} />
      </div>
      <div className='overflow-hidden'>
        <p className='text-base font-medium text-gray-900 line-clamp-1'>
          {name}
          {description && ` | ${description}`}
        </p>
        <p className='text-xs text-gray-400 line-clamp-1'>{link}</p>
      </div>
    </Link>
    <DeleteButton onClick={() => onDelete(id)} isDeleting={isDeleting} />
  </li>
);

export default FavoriteItem;
