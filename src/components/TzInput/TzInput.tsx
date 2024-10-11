import React, { forwardRef } from 'react';
import { useVariantStyles, useFocusStyles } from '../useStyles';

export interface TzInputProps extends React.ComponentProps<'input'> {
  variant?: 'accent' | 'primary' | 'secondary' | 'negative' | 'dark' | 'light';
  filled?: boolean;
}

export const TzInput = forwardRef<HTMLInputElement, TzInputProps>(
  function TzInput(
    { variant = 'accent', filled = true, ...props }: TzInputProps,
    ref
  ) {
    /* input Styles */
    let inputOtherStyles = 'rounded';

    // focus
    let focusStyles = useFocusStyles();

    // size
    let sizeStyles =
      'h-[28px] sm:h-[38px] lg:h-[48px] px-[10px] sm:px-[14px] lg:px-[20px]';

    // variants and filled
    let variantStyles = useVariantStyles(variant, filled);

    let inputStyles = `${inputOtherStyles} ${focusStyles} ${sizeStyles} ${variantStyles}`;
    props.className = props.className
      ? inputStyles + ' ' + props.className
      : inputStyles;

    return <input {...props} ref={ref} />;
  }
);
