import type { ChangeEvent, FocusEventHandler } from 'react';

export interface InputNumberProps {
  additionalClasses?: string;
  helperText?: string;
  isError?: boolean;
  isRequired?: boolean;
  label?: string;
  max?: string;
  min?: string;
  name: string;
  onBlur: FocusEventHandler<HTMLInputElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  step?: string;
  value: string;
}
