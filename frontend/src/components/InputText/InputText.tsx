import type { FC } from 'react';

import type { InputTextProps } from './types.ts';

export const InputText: FC<InputTextProps> = ({
  additionalClasses,
  helperText,
  isError,
  isRequired,
  label,
  name,
  onBlur,
  onChange,
  placeholder,
  type,
  value,
}) => {
  return (
    <div
      className={`flex w-full flex-col-reverse gap-1 ${isError ? 'focus:border-red-500 [&_input]:border-red-500 [&_input]:focus:border-red-500' : ''} ${additionalClasses ?? ''}`}
    >
      {isError && helperText && (
        <p className="text-xs text-red-500">{helperText}</p>
      )}
      <input
        autoComplete="one-time-code"
        className="peer w-full rounded-md border-1 border-gray-100 px-4 py-2 text-gray-900 placeholder-gray-200 shadow-md transition duration-150 ease-in-out focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {label && (
        <label className="flex items-center gap-1 text-gray-400 peer-focus:text-blue-500">
          {label}
          {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
    </div>
  );
};
