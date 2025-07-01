import type { FC } from 'react';

import { CurrencyDollarIcon } from '@heroicons/react/24/outline';

import type { InputNumberProps } from './types.ts';

export const InputNumber: FC<InputNumberProps> = ({
  additionalClasses,
  helperText,
  isError,
  isRequired,
  label,
  max,
  min,
  name,
  onBlur,
  onChange,
  placeholder,
  step,
  value,
}) => {
  return (
    <div
      className={`group flex w-full flex-col-reverse gap-1 ${isError ? 'focus:border-red-500 [&_input]:border-red-500 [&_input]:focus:border-red-500' : ''} ${additionalClasses ?? ''}`}
    >
      {isError && helperText && (
        <p className="text-xs text-red-500">{helperText}</p>
      )}
      <div className="relative flex items-center">
        <input
          className="w-full rounded-md border-1 border-gray-100 py-2 pr-4 pl-10 text-gray-900 placeholder-gray-200 shadow-md transition duration-150 ease-in-out focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
          max={max}
          min={min}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          step={step}
          type="number"
          value={value}
        />
        <CurrencyDollarIcon
          className={`absolute left-2 h-6 w-6 text-gray-200 transition duration-150 ease-in-out ${isError ? 'group-focus-within:text-red-500' : 'group-focus-within:text-blue-500'}`}
        />
      </div>
      {label && (
        <label
          className={`flex items-center gap-1 text-gray-400 transition duration-150 ease-in-out ${isError ? 'group-focus-within:text-red-500' : 'group-focus-within:text-blue-500'}`}
        >
          {label}
          {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
    </div>
  );
};
