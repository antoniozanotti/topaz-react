import React from 'react';
import { useVariantClasses, useFocusClasses } from './useStyles';

export interface TzInputProps {
  type?: 'text' | 'email';
  variant?: 'accent' | 'primary' | 'secondary' | 'negative' | 'dark' | 'light';
  style?: 'fill' | 'outline';
  className?: string;
}

export const TzInput = ({
  type = 'text',
  variant = 'accent',
  style = 'fill',
  className = '',
}: TzInputProps) => {
  /* input classes */
  let inputOtherClasses = 'rounded';

  // focus
  let buttonFocusClasses = useFocusClasses();

  // size
  let sizeClasses =
    'h-[28px] sm:h-[38px] lg:h-[48px] px-[10px] sm:px-[14px] lg:px-[20px]';

  // variants and styles
  let variantClasses = useVariantClasses(variant, style);

  return (
    <input
      type={type}
      className={`${inputOtherClasses} ${focusClasses} ${sizeClasses} ${variantClasses} ${className}`}
    />
  );
};
