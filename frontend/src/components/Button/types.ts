import type { MouseEvent } from 'react';

export const BUTTON_VARIANTS = {
  CONTAINED: 'contained',
  CUSTOM: 'custom',
  OUTLINED: 'outlined',
  TEXT: 'text',
} as const;

export type ButtonVariants =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

export const BUTTON_TYPES = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
} as const;

export type Types = (typeof BUTTON_TYPES)[keyof typeof BUTTON_TYPES];

export interface ButtonProps {
  additionalClasses?: string;
  disabled?: boolean;
  label: string;
  loading?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: Types;
  variant?: ButtonVariants;
}
