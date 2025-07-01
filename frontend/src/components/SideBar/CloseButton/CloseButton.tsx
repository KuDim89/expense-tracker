import { XMarkIcon } from '@heroicons/react/24/outline';

import useAppStore from '../../../stores/AppStore/useAppStore.ts';
import { ButtonIcon } from '../../ButtonIcon';

export const CloseButton = () => {
  const { toggleSideBar } = useAppStore();
  return (
    <div className="flex items-center justify-end border-b-2 border-blue-600 px-5 py-2 text-gray-600 transition duration-150 ease-in-out">
      <ButtonIcon
        additionalClasses="right-3 top-3 p-1 hover:text-blue-600 bg-transparent hover:bg-gray-50 rounded-full"
        icon={<XMarkIcon />}
        onClick={toggleSideBar}
        sizeClasses="h-8 w-8"
      />
    </div>
  );
};
