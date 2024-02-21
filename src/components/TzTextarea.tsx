import React, { forwardRef } from 'react';
import { useVariantClasses, useFocusClasses } from './useStyles';

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

    /* input classes */
    let inputOtherClasses = 'rounded';

    // focus
    let focusClasses = useFocusClasses();

    // size
    let sizeClasses =
      'h-[177px] px-[10px] sm:px-[14px] lg:px-[20px] py-[7px] sm:py-[10px] lg:py-[12px]';

    // variants and filled
    let variantClasses = useVariantClasses(variant, filled);

    let textareaClasses = `${inputOtherClasses} ${focusClasses} ${sizeClasses} ${variantClasses}`;
    props.className = props.className
      ? textareaClasses + ' ' + props.className
      : textareaClasses;

    return <textarea rows={rows} {...props} ref={ref}></textarea>;
  }
);
