import React, { forwardRef } from 'react';
import { useVariantClasses, useFocusClasses } from './useStyles';

export interface TzTextareaProps {
  rows?: number;
  variant?: 'accent' | 'primary' | 'secondary' | 'negative' | 'dark' | 'light';
  filled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
}

export const TzTextarea = forwardRef<HTMLTextAreaElement, TzTextareaProps>(
  function TzTextarea(
    {
      rows = 7,
      variant = 'accent',
      filled = true,
      required = true,
      className = '',
      name = '',
    }: TzTextareaProps,
    ref
  ) {
    /* input classes */
    let inputOtherClasses = 'rounded';

    // focus
    let focusClasses = useFocusClasses();

    // size
    let sizeClasses =
      'h-[177px] px-[10px] sm:px-[14px] lg:px-[20px] py-[7px] sm:py-[10px] lg:py-[12px]';

    // variants and filled
    let variantClasses = useVariantClasses(variant, filled);

    return (
      <textarea
        rows={rows}
        className={`${inputOtherClasses} ${focusClasses} ${sizeClasses} ${variantClasses} ${className}`}
        required={required}
        name={name}
        ref={ref}
      ></textarea>
    );
  }
);
