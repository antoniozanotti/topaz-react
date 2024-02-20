import React, { forwardRef } from 'react';
import { useVariantClasses, useFocusClasses } from './useStyles';

export interface TzInputProps {
  type?: 'text' | 'email';
  variant?: 'accent' | 'primary' | 'secondary' | 'negative' | 'dark' | 'light';
  filled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
}

export const TzInput = forwardRef<HTMLInputElement, TzInputProps>(
  function TzInput(
    {
      type = 'text',
      variant = 'accent',
      filled = true,
      required = true,
      className = '',
      name = '',
    }: TzInputProps,
    ref
  ) {
    /* input classes */
    let inputOtherClasses = 'rounded';

    // focus
    let focusClasses = useFocusClasses();

    // size
    let sizeClasses =
      'h-[28px] sm:h-[38px] lg:h-[48px] px-[10px] sm:px-[14px] lg:px-[20px]';

    // variants and filled
    let variantClasses = useVariantClasses(variant, filled);

    return (
      <input
        type={type}
        className={`${inputOtherClasses} ${focusClasses} ${sizeClasses} ${variantClasses} ${className}`}
        required={required}
        name={name}
        ref={ref}
      />
    );
  }
);
