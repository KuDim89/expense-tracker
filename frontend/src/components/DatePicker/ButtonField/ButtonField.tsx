import type { FC } from 'react';

import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';

import type { ButtonFieldProps } from './types.ts';

export const ButtonField: FC<ButtonFieldProps> = ({
  date,
  helperText,
  isActive,
  isDisabled,
  isError,
  isRequired,
  label,
  name,
  toggleCalendar,
}) => {
  return (
    <div className="flex flex-col-reverse gap-1">
      {isError && helperText && !isActive && (
        <p className="text-xs text-red-500">{helperText}</p>
      )}
      <button
        className={`peer mb-1 flex w-full cursor-pointer gap-4 rounded-md border-1 bg-white px-4 py-2 text-gray-900 shadow-md transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-300 ${isError ? 'border-red-500 focus:border-red-500' : isActive ? 'border-blue-500' : 'border-gray-100 focus:border-blue-500'}`}
        disabled={isDisabled}
        onClick={() => {
          toggleCalendar();
        }}
        type="button"
      >
        <CalendarDaysIcon
          className={`h-6 w-6 text-gray-200 transition-all duration-150 ease-in-out ${isError ? 'group-focus-within:text-red-500' : 'group-focus-within:text-blue-500'}`}
        />
        {format(date, 'dd/MM/yyyy')}
      </button>
      {label && (
        <label
          className={`flex items-center gap-1 text-gray-400 ${isError ? 'peer-focus:text-red-500' : 'peer-focus:text-blue-500'}`}
        >
          {label}
          {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <input name={name} type="hidden" value={date || ''} />
    </div>
  );
};
