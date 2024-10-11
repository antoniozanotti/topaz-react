import React, { forwardRef } from 'react';
import { useVariantStyles, useFocusStyles } from '../useStyles';

export interface TzTextareaProps extends React.ComponentProps<'textarea'> {
  rows?: number;
  variant?: 'accent' | 'primary' | 'secondary' | 'negative' | 'dark' | 'light';
  filled?: boolean;
}

export const TzTextarea = forwardRef<HTMLTextAreaElement, TzTextareaProps>(
  function TzTextarea(
    {
      rows = 7,
      variant = 'accent',
      filled = true,
      ...props
    }: TzTextareaProps,
    ref
  ) {

    /* input Styles */
    let inputOtherStyles = 'rounded';

    // focus
    let focusStyles = useFocusStyles();

    // size
    let sizeStyles =
      'h-[177px] px-[10px] sm:px-[14px] lg:px-[20px] py-[7px] sm:py-[10px] lg:py-[12px]';

    // variants and filled
    let variantStyles = useVariantStyles(variant, filled);

    let textareaStyles = `${inputOtherStyles} ${focusStyles} ${sizeStyles} ${variantStyles}`;
    props.className = props.className
      ? textareaStyles + ' ' + props.className
      : textareaStyles;

    return <textarea rows={rows} {...props} ref={ref}></textarea>;
  }
);
