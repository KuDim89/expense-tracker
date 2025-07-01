import type { ChangeEvent, FocusEventHandler } from 'react';

export const INPUT_TYPES = {
  EMAIL: 'email',
  NUMBER: 'number',
  TEXT: 'text',
} as const;

type InputTypes = (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];

export interface InputTextProps {
  additionalClasses?: string;
  helperText?: string;
  isError: boolean;
  isRequired?: boolean;
  label?: string;
  name: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: InputTypes;
  value: string;
}
