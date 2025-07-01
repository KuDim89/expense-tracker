import type { FC } from 'react';

import type { ButtonIconProps } from './types.ts';

export const ButtonIcon: FC<ButtonIconProps> = ({
  additionalClasses,
  colorClass,
  disabled,
  icon,
  onClick,
  sizeClasses,
}) => {
  return (
    <button
      className={`cursor-pointer transition duration-150 ease-in-out ${sizeClasses ?? 'h-10 w-10'} ${colorClass ?? 'text-gray-200'} ${additionalClasses ?? ''}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {icon}
    </button>
  );
};

export default ButtonIcon;
