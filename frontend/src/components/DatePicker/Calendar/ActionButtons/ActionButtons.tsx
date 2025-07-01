import type { FC } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { addMonths, isSameDay, isSameMonth } from 'date-fns';

import type { ActionButtonsProps } from './types.ts';

export const ActionButtons: FC<ActionButtonsProps> = ({
  activeDate,
  activeMonth,
  setActiveDate,
  setActiveMonth,
  setTriggerAnimation,
}) => {
  const today = new Date().toISOString();
  const nextMonth = addMonths(activeMonth, 1).toISOString();
  const prevMonth = addMonths(activeMonth, -1).toISOString();

  const updateAnimation = () => {
    setTriggerAnimation(false);
    requestAnimationFrame(() => {
      setTriggerAnimation(true);
    });
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="cursor-pointer rounded-tl-lg rounded-bl-lg border-1 border-blue-600 text-blue-600 transition-all duration-150 ease-in-out hover:bg-blue-600 hover:text-white"
        onClick={() => {
          setActiveMonth(prevMonth);
          updateAnimation();
        }}
        type="button"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        className="cursor-pointer border-t-1 border-b-1 border-blue-600 px-4 font-medium text-blue-600 transition-all duration-150 ease-in-out hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-300"
        disabled={
          isSameDay(activeDate, today) && isSameMonth(activeMonth, today)
        }
        onClick={() => {
          setActiveDate(today);
          setActiveMonth(today);
          updateAnimation();
        }}
        type={'button'}
      >
        Today
      </button>
      <button
        className="cursor-pointer rounded-tr-lg rounded-br-lg border-1 border-blue-600 text-blue-600 transition-all duration-150 ease-in-out hover:bg-blue-600 hover:text-white"
        onClick={() => {
          setActiveMonth(nextMonth);
          updateAnimation();
        }}
        type="button"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};
