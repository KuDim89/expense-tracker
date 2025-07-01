import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';

import useAppStore from '../../../stores/AppStore/useAppStore.ts';

export const CollapseButton = () => {
  const { isSideBarFull, toggleSideBarFull } = useAppStore();

  return (
    <div
      className="flex cursor-pointer justify-center bg-blue-600 p-5 text-white shadow-md hover:bg-blue-700"
      onClick={toggleSideBarFull}
    >
      {isSideBarFull ? (
        <div className="flex w-full items-center gap-5 font-medium">
          <ChevronDoubleLeftIcon className="h-5 w-5" />
          <span>Collapse</span>
        </div>
      ) : (
        <ChevronDoubleRightIcon className="h-5 w-5" />
      )}
    </div>
  );
};
