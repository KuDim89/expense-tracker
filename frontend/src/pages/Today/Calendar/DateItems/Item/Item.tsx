import { format, isAfter, isSameDay } from 'date-fns';
import { type FC } from 'react';

import type { ItemProps } from './types.ts';

import useCalendarStore from '../../../../../stores/CalendarStore/useCalendarStore.ts';

export const Item: FC<ItemProps> = ({ day, delay }) => {
  const today = new Date();
  const { selectedDate, setSelectedDate } = useCalendarStore();
  const future = isAfter(day, today);
  const isActive = isSameDay(selectedDate, day);

  return (
    <div
      className={`animation-zoom-in flex flex-col items-center justify-center gap-2 rounded-md p-2 opacity-0 drop-shadow-lg ${future ? 'ignored cursor-not-allowed bg-gray-50 text-gray-300' : 'tracked cursor-pointer bg-white text-gray-600 hover:bg-blue-600 hover:text-white'} ${isActive ? 'isActive' : ''}`}
      onClick={() => {
        if (!future) setSelectedDate(day.toISOString());
      }}
      style={{ animationDelay: `${delay.toString()}ms` }}
    >
      <span>{format(day, 'd')}</span>
      {!future && isActive && (
        <span className="inline-block h-2 w-2 rounded-full bg-green-300"></span>
      )}
    </div>
  );
};
