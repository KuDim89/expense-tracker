import { type FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import type { ItemType } from './types.ts';

import useAppStore from '../../../stores/AppStore/useAppStore.ts';

export const Item: FC<ItemType> = ({ icon: Icon, label, path }) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  const { isSideBarFull } = useAppStore();

  return (
    <div className="font-medium">
      <NavLink
        className={`group flex justify-start px-6 py-2 transition duration-150 ease-in-out dark:text-white dark:hover:bg-gray-700 ${isActive ? 'bg-blue-100 text-blue-500 hover:bg-blue-50 hover:text-blue-700' : 'text-gray-500 hover:bg-blue-50 hover:text-gray-900'}`}
        to={path}
      >
        <span className="flex items-center">
          <Icon
            className={`h-6 w-6 transition duration-75 dark:text-gray-400 dark:group-hover:text-white ${isActive ? 'text-blue-600 group-hover:text-blue-700' : 'text-gray-500 group-hover:text-gray-900'}`}
          />
          <span
            className={`overflow-hidden whitespace-nowrap transition-all duration-150 ease-in-out ${
              isSideBarFull ? 'ml-5 w-auto opacity-100' : 'w-0 opacity-0'
            }`}
          >
            {label}
          </span>
        </span>
      </NavLink>
    </div>
  );
};
