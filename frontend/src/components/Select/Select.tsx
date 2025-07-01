import { ChevronDownIcon } from '@heroicons/react/24/outline';
import {
  type FC,
  type FocusEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';

interface IOptionItem {
  id: string;
  name: string;
  value: string;
}

export interface SelectProps {
  additionalClasses?: string;
  helperText?: string;
  isDisabled?: boolean;
  isError?: boolean;
  isRequired?: boolean;
  label?: string;
  name: string;
  onBlur: FocusEventHandler<HTMLInputElement>;
  options: IOptionItem[];
  placeholder?: string;
  setActiveOption: (value: string) => void;
  value: string;
}

export const Select: FC<SelectProps> = ({
  additionalClasses,
  helperText,
  isDisabled,
  isError,
  isRequired,
  label,
  name,
  options,
  placeholder,
  setActiveOption,
  value,
}) => {
  const [isShowOptions, setIsShowOptions] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isShowOptions && !ref.current?.contains(e.target as Node)) {
        setIsShowOptions(!isShowOptions);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isShowOptions, setIsShowOptions]);

  return (
    <div
      className={`group relative w-full ${additionalClasses ?? ''}`}
      ref={ref}
    >
      <div
        className={`flex flex-col-reverse gap-1 ${isError ? 'focus:border-red-500 [&_input]:border-red-500 [&_input]:focus:border-red-500' : ''} ${additionalClasses ?? ''}`}
      >
        <div className="flex flex-col-reverse gap-1">
          {isError && helperText && !isShowOptions && (
            <p className="text-xs text-red-500">{helperText}</p>
          )}
          <button
            className={`peer mb-1 flex w-full cursor-pointer items-center justify-between gap-4 rounded-md border-1 bg-white px-4 py-2 shadow-md transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-300 ${value ? 'text-gray-600' : 'text-gray-200'} ${isError ? 'border-red-500 focus:border-red-500' : isShowOptions ? 'border-blue-500' : 'border-gray-100 focus:border-blue-500'}`}
            disabled={isDisabled}
            onClick={() => {
              setIsShowOptions(!isShowOptions);
            }}
            type="button"
          >
            <span className="block flex-1 overflow-hidden text-left text-ellipsis whitespace-nowrap">
              {selectedOption ? selectedOption.name : placeholder}
            </span>

            <ChevronDownIcon
              className={`h-4 w-4 transform text-gray-200 transition-all duration-300 ease-in-out ${isShowOptions ? 'rotate-x-180' : 'rotate-x-0'} ${isError ? 'group-focus-within:text-red-500' : 'group-focus-within:text-blue-500'}`}
            />
          </button>
          {label && (
            <label
              className={`flex items-center gap-1 text-gray-400 ${isError ? 'peer-focus:text-red-500' : 'peer-focus:text-blue-500'}`}
            >
              {label}
              {isRequired && <span className="text-red-500">*</span>}
            </label>
          )}
          <input name={name} type="hidden" value={value} />
        </div>
      </div>

      <div
        className={`absolute z-10 flex min-w-full flex-col rounded-md border-1 border-blue-500 bg-white py-3 shadow-md transition-all duration-300 ease-in-out ${isShowOptions ? 'pointer-events-auto max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'} `}
      >
        {options.map((option) => {
          const isActive = value === option.value;
          return (
            <div
              className={`cursor-pointer overflow-hidden px-3 py-1 text-ellipsis whitespace-nowrap transition-all duration-300 ease-in-out ${isActive ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-white text-gray-600 hover:bg-blue-50'}`}
              key={option.id}
              onClick={() => {
                setActiveOption(option.value);
                setIsShowOptions(!isShowOptions);
              }}
            >
              {option.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
