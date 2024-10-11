import React, { forwardRef } from 'react';
import { TzInputInterface } from './TzInputInterface';
import { VariantEnum } from './VariantEnum';
import { useVariantStyles, useFocusStyles } from '../useStyles';

export const TzInput = forwardRef<HTMLInputElement, TzInputInterface>(
  function TzInput(
    { variant = VariantEnum.ACCENT, filled = true, ...props }: TzInputInterface,
    ref
  ) {
    let inputBaseStyles = 'rounded';
    let focusStyles = useFocusStyles();
    let sizeStyles =
      'h-[28px] sm:h-[38px] lg:h-[48px] px-[10px] sm:px-[14px] lg:px-[20px]';
    let variantStyles = useVariantStyles(variant, filled);
    let inputStyles = `${inputBaseStyles} ${focusStyles} ${sizeStyles} ${variantStyles}`;
    props.className = props.className
      ? `${inputStyles} ${props.className}`
      : inputStyles;

    return <input {...props} ref={ref} />;
  }
);
