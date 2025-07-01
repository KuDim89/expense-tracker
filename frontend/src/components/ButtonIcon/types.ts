import type { ReactNode } from 'react';

export interface ButtonIconProps {
  additionalClasses?: string;
  colorClass?: string;
  disabled?: boolean;
  icon: ReactNode;
  onClick: () => void;
  sizeClasses?: string;
}
