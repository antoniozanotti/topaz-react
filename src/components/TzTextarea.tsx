import React, { forwardRef } from 'react';
import { useVariantClasses, useFocusClasses } from './useStyles';

export interface TzTextareaProps {
  rows?: number;
  variant?: 'accent' | 'primary' | 'secondary' | 'negative' | 'dark' | 'light';
  style?: 'fill' | 'outline';
  required?: boolean;
  className?: string;
  name?: string;
}

export const TzTextarea = forwardRef<HTMLTextAreaElement, TzTextareaProps>(
  ({
    rows = 7,
    variant = 'accent',
    style = 'fill',
    required = true,
    className = '',
    name = ''
  }: TzTextareaProps, ref) => {
    /* input classes */
    let inputOtherClasses =
      'rounded';

    // focus
    let focusClasses = useFocusClasses();

    // size
    let sizeClasses =
      'h-[177px] px-[10px] sm:px-[14px] lg:px-[20px] py-[7px] sm:py-[10px] lg:py-[12px]';
    
    // variants and styles
    let variantClasses = useVariantClasses(variant, style);

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