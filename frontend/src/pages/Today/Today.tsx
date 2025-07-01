import { PlusIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { useState } from 'react';

import { ButtonIcon } from '../../components/ButtonIcon';
import useCalendarStore from '../../stores/CalendarStore/useCalendarStore.ts';
import { AddExpenseModal } from './AddExpenseModal';
import { Calendar } from './Calendar';

export const Today = () => {
  const { selectedMonth } = useCalendarStore();
  const currentMonthName = format(selectedMonth, 'LLLL');
  const currentYear = format(selectedMonth, 'yyyy');
  const [isOpenExpanseModal, setIsOpenExpanseModal] = useState(false);

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between border-b-2 border-blue-600 pb-2">
        <h1
          className="animation-zoom-in text-2xl font-medium text-gray-600"
          key={selectedMonth}
        >
          {currentMonthName} <span className="font-light">{currentYear}</span>
        </h1>
        <div>
          <ButtonIcon
            additionalClasses="p-1 hover:text-blue-600 bg-transparent hover:bg-gray-50 rounded-full"
            icon={<PlusIcon />}
            onClick={() => {
              setIsOpenExpanseModal(!isOpenExpanseModal);
            }}
            sizeClasses="h-9 w-9"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <Calendar />
        <div>Info</div>
      </div>
      <AddExpenseModal
        isOpen={isOpenExpanseModal}
        toggleModal={setIsOpenExpanseModal}
      />
    </div>
  );
};
