import type { FC } from 'react';

import { isAfter } from 'date-fns';

import type { DaysNameProps } from './types.ts';

export const DaysOfWeek: FC<DaysNameProps> = ({
  activeMonth,
  isDisabledFuture,
}) => {
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const today = new Date();
  const isFutureMonth = isAfter(activeMonth, today);
  return (
    <div
      className={`mb-2 grid grid-cols-7 text-center text-sm font-medium ${isFutureMonth && isDisabledFuture ? 'text-gray-300' : 'text-blue-600'}`}
    >
      {daysOfWeek.map((day) => (
        <div className="first:text-gray-300 last:text-gray-300" key={day}>
          {day}
        </div>
      ))}
    </div>
  );
};
