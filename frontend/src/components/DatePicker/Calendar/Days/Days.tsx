import type { FC } from 'react';

import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isAfter,
  isSameDay,
  startOfMonth,
} from 'date-fns';

import type { DaysProps } from './types.ts';

export const Days: FC<DaysProps> = ({
  activeDate,
  activeMonth,
  isDisabledFuture,
  isTriggerAnimation,
  openCalendar,
  setActiveDate,
}) => {
  const today = new Date();
  const monthStart = startOfMonth(activeMonth);
  const monthEnd = endOfMonth(activeMonth);
  const firstDayIndex = getDay(monthStart);
  const days = eachDayOfInterval({ end: monthEnd, start: monthStart });

  return (
    <div className="calendar-days grid grid-cols-7 gap-1 text-center">
      {Array.from({ length: firstDayIndex }).map((_, i) => (
        <div key={`empty-${i.toString()}`} />
      ))}
      {days.map((day, i) => {
        const futureDate = isAfter(day, today);
        const isActive = isSameDay(activeDate, day);
        return (
          <div
            className={`${isTriggerAnimation ? 'animation-zoom-in' : ''} flex flex-col items-center justify-center gap-1 rounded-md p-1 opacity-0 drop-shadow-lg ${futureDate && isDisabledFuture ? 'ignored cursor-not-allowed bg-gray-50 text-gray-300' : 'tracked cursor-pointer bg-white text-gray-600 hover:bg-blue-600 hover:text-white'} ${isActive ? 'isActive' : ''}`}
            key={format(day, 'd')}
            onClick={() => {
              if (!futureDate) {
                setActiveDate(day.toISOString());
                openCalendar(false);
              }
            }}
            style={{ animationDelay: `${Number(i * 20).toString()}ms` }}
          >
            {format(day, 'd')}
          </div>
        );
      })}
    </div>
  );
};
