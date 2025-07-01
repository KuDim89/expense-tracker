import { EyeIcon } from '@heroicons/react/24/outline';
import { EyeSlashIcon } from '@heroicons/react/24/outline';
import { type FC, useState } from 'react';

import type { InputPasswordProps } from './types.ts';

import ButtonIcon from '../ButtonIcon/ButtonIcon.tsx';

export const InputPassword: FC<InputPasswordProps> = ({
  additionalClasses,
  error,
  helperText,
  label,
  name,
  onChange,
  placeholder,
  required,
  value,
}) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  return (
    <div
      className={`group flex flex-col gap-1 focus-within:text-blue-500 ${error ? 'focus:border-red-500 [&_input]:border-red-500 [&_input]:focus:border-red-500' : ''} ${additionalClasses ?? ''}`}
    >
      {label && (
        <label className="peer flex items-center gap-1 text-gray-400 group-focus-within:text-blue-500">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          autoComplete="one-time-code"
          className={`w-full rounded-md border-1 border-gray-100 py-2 pr-9 pl-4 text-gray-900 placeholder-gray-200 shadow-md transition duration-150 ease-in-out focus:border-blue-500 focus:ring-blue-500 focus:outline-none`}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type={isShowPassword ? 'text' : 'password'}
          value={value}
        />
        <ButtonIcon
          additionalClasses={`absolute right-0 p-2 ${error ? 'group-focus-within:text-red-500' : 'group-focus-within:text-blue-500'}`}
          icon={isShowPassword ? <EyeIcon /> : <EyeSlashIcon />}
          onClick={() => {
            setIsShowPassword(!isShowPassword);
          }}
        />
      </div>

      {error && helperText && (
        <p className="text-xs text-red-500">{helperText}</p>
      )}
    </div>
  );
};
