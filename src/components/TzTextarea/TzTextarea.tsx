import React, { forwardRef } from 'react';
import { TzTextareaInterface } from './TzTextareaInterface';
import { VariantEnum } from './VariantEnum';
import { useVariantStyles, useFocusStyles } from '../useStyles';

export const TzTextarea = forwardRef<HTMLTextAreaElement, TzTextareaInterface>(
  (props, ref) => {
    const variant = props.variant ?? VariantEnum.accent;
    const filled = props.filled ?? true;
    const baseStyles = 'rounded';
    const focusStyles = useFocusStyles();
    const sizeStyles =
      'h-[177px] px-[10px] sm:px-[14px] lg:px-[20px] py-[7px] sm:py-[10px] lg:py-[12px]';
    const variantStyles = useVariantStyles(variant, filled);
    const textareaStyles = `${baseStyles} ${focusStyles} ${sizeStyles} ${variantStyles}`;
    const className = props.className
      ? `${textareaStyles} ${props.className}`
      : textareaStyles;
    let customProps = { ...props };
    delete customProps.variant;
    delete customProps.filled;
    delete customProps.className;
    delete customProps.children;

    return (
      <textarea className={className} {...customProps} ref={ref}>
        {props.children}
      </textarea>
    );
  }
);
