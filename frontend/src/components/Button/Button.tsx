import type { FC } from 'react';

import { Spinner } from '../Spinner';
import {
  type ButtonProps,
  type ButtonVariants,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from './types.ts';

export const Button: FC<ButtonProps> = ({
  additionalClasses,
  disabled,
  label,
  loading,
  onClick,
  type,
  variant,
}) => {
  const getVariantClasses = (
    variant: ButtonVariants = BUTTON_VARIANTS.CONTAINED,
  ): string => {
    const defaultClasses =
      'cursor-pointer rounded-md py-2 px-3 font-bold transition duration-150 ease-in-out focus:outline-none disabled:cursor-not-allowed disabled:opacity-50';

    switch (variant) {
      case BUTTON_VARIANTS.CONTAINED:
        return `${defaultClasses} bg-blue-600 text-white shadow-md hover:bg-blue-700`;
      case BUTTON_VARIANTS.OUTLINED:
        return `${defaultClasses} border border-blue-600 text-blue-600  shadow-md hover:bg-blue-50`;
      case BUTTON_VARIANTS.TEXT:
        return `${defaultClasses} text-blue-600 hover:underline`;
      default:
        return '';
    }
  };

  return (
    <button
      className={`flex items-center justify-center gap-x-4 ${getVariantClasses(variant)} ${additionalClasses ?? ''} `}
      disabled={disabled}
      onClick={onClick}
      type={type ?? BUTTON_TYPES.BUTTON}
    >
      {label}
      {loading && (
        <Spinner
          backgroundClasses={'text-gray-100'}
          colorClasses={'fill-blue-700'}
          sizeClasses={'h-4 w-4'}
        />
      )}
    </button>
  );
};
