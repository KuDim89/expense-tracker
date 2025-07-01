import type { ChangeEvent } from 'react';

export interface InputPasswordProps {
  additionalClasses?: string;
  error: boolean;
  helperText?: string;
  label?: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  value: string;
}
