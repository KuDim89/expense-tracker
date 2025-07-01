import { type FC, useEffect, useRef, useState } from 'react';

import type { DatePickerProps } from './types.ts';

import { ButtonField } from './ButtonField';
import { Calendar } from './Calendar';

export const DatePicker: FC<DatePickerProps> = ({
  additionalClasses,
  helperText,
  isDisabled,
  isDisabledFuture,
  isError,
  isRequired,
  label,
  name,
  setActiveDate,
  value,
}) => {
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [activeMonth, setActiveMonth] = useState<string>(value);

  const toggleCalendar = () => {
    setIsShowCalendar(!isShowCalendar);
    setActiveMonth(value);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isShowCalendar && !ref.current?.contains(e.target as Node)) {
        toggleCalendar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleCalendar]);

  return (
    <div
      className={`group relative w-full ${additionalClasses ?? ''}`}
      ref={ref}
    >
      <ButtonField
        date={value}
        helperText={helperText}
        isActive={isShowCalendar}
        isDisabled={isDisabled}
        isError={isError}
        isRequired={isRequired}
        label={label}
        name={name}
        toggleCalendar={toggleCalendar}
      />
      <Calendar
        activeDate={value}
        activeMonth={activeMonth}
        isDisabledFuture={isDisabledFuture}
        isOpen={isShowCalendar}
        setActiveDate={setActiveDate}
        setActiveMonth={setActiveMonth}
        toggleOpen={setIsShowCalendar}
      />
    </div>
  );
};
