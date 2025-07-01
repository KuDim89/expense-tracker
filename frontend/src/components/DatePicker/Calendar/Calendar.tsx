import { type FC } from 'react';

import type { CalendarProps } from './types';

import { ActionButtons } from './ActionButtons';
import { Days } from './Days';
import { DaysOfWeek } from './DaysOfWeek';
import { MonthName } from './MonthName';

export const Calendar: FC<CalendarProps> = ({
  activeDate,
  activeMonth,
  isDisabledFuture,
  isOpen,
  setActiveDate,
  setActiveMonth,
  toggleOpen,
}) => {
  return (
    <div
      className={`absolute z-10 flex min-w-60 flex-col gap-3 rounded-md border-1 border-blue-500 bg-white p-3 shadow-md transition-all duration-300 ease-in-out ${isOpen ? 'pointer-events-auto max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'} `}
    >
      <MonthName activeMonth={activeMonth} />
      <div>
        <DaysOfWeek
          activeMonth={activeMonth}
          isDisabledFuture={isDisabledFuture}
        />
        <Days
          activeDate={activeDate}
          activeMonth={activeMonth}
          isDisabledFuture={isDisabledFuture}
          isTriggerAnimation={isOpen}
          openCalendar={toggleOpen}
          setActiveDate={setActiveDate}
        />
      </div>
      <ActionButtons
        activeDate={activeDate}
        activeMonth={activeMonth}
        setActiveDate={setActiveDate}
        setActiveMonth={setActiveMonth}
        setTriggerAnimation={toggleOpen}
      />
    </div>
  );
};
