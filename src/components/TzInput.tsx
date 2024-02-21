import React, { forwardRef } from 'react';
import { useVariantClasses, useFocusClasses } from './useStyles';

export interface TzInputProps extends React.ComponentProps<'input'> {
  variant?: 'accent' | 'primary' | 'secondary' | 'negative' | 'dark' | 'light';
  filled?: boolean;
}

export const TzInput = forwardRef<HTMLInputElement, TzInputProps>(
  function TzInput(
    { variant = 'accent', filled = true, ...props }: TzInputProps,
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

    let inputClasses = `${inputOtherClasses} ${focusClasses} ${sizeClasses} ${variantClasses}`;
    props.className = props.className
      ? inputClasses + ' ' + props.className
      : inputClasses;

    return <input {...props} ref={ref} />;
  }
);
