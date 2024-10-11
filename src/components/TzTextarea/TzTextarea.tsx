import React, { forwardRef } from 'react';
import { useVariantStyles, useFocusStyles } from '../useStyles';
import { TzTextareaInterface } from './TzTextareaInterface';
import { VariantEnum } from './VariantEnum';

export const TzTextarea = forwardRef<HTMLTextAreaElement, TzTextareaInterface>(
  function TzTextarea(
    {
      rows = 7,
      variant = VariantEnum.accent,
      filled = true,
      ...props
    }: TzTextareaInterface,
    ref
  ) {
    const baseStyles = 'rounded';
    const focusStyles = useFocusStyles();
    const sizeStyles = 'h-[177px] px-[10px] sm:px-[14px] lg:px-[20px] py-[7px] sm:py-[10px] lg:py-[12px]';
    const variantStyles = useVariantStyles(variant, filled);
    const textareaStyles = `${baseStyles} ${focusStyles} ${sizeStyles} ${variantStyles}`;
    props.className = props.className
      ? `${textareaStyles} ${props.className}`
      : textareaStyles;

    return <textarea rows={rows} {...props} ref={ref}></textarea>;
  }
);
