import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { addMonths, isSameDay, isSameMonth } from 'date-fns';

import useCalendarStore from '../../../../stores/CalendarStore/useCalendarStore.ts';

export const ActionButtons = () => {
  const today = new Date();
  const { selectedDate, selectedMonth, setSelectedDate, setSelectedMonth } =
    useCalendarStore();

  const nextMonth = addMonths(selectedMonth, 1);
  const prevMonth = addMonths(selectedMonth, -1);

  return (
    <div className="mt-4 flex items-center justify-center">
      <button
        className="cursor-pointer rounded-tl-lg rounded-bl-lg border-1 border-blue-600 p-1 text-blue-600 transition-all duration-150 ease-in-out hover:bg-blue-600 hover:text-white"
        onClick={() => {
          setSelectedMonth(prevMonth);
        }}
        type="button"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        className="cursor-pointer border-t-1 border-b-1 border-blue-600 px-4 py-1 font-medium text-blue-600 transition-all duration-150 ease-in-out hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-300"
        disabled={
          isSameDay(selectedDate, today) && isSameMonth(selectedMonth, today)
        }
        onClick={() => {
          setSelectedDate(today);
          setSelectedMonth(today);
        }}
        type={'button'}
      >
        Today
      </button>
      <button
        className="cursor-pointer rounded-tr-lg rounded-br-lg border-1 border-blue-600 p-1 text-blue-600 transition-all duration-150 ease-in-out hover:bg-blue-600 hover:text-white"
        onClick={() => {
          setSelectedMonth(nextMonth);
        }}
        type="button"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};
