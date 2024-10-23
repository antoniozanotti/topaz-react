import React, { forwardRef } from 'react';
import { TzInputInterface } from './TzInputInterface';
import { VariantEnum } from './VariantEnum';
import { useVariantStyles, useFocusStyles } from '../useStyles';

export const TzInput = forwardRef<HTMLInputElement, TzInputInterface>(
  (props, ref) => {
    const variant = props.variant ?? VariantEnum.accent;
    const filled = props.filled ?? true;
    const baseStyles = 'rounded';
    const focusStyles = useFocusStyles();
    const sizeStyles =
      'h-[28px] sm:h-[38px] lg:h-[48px] px-[10px] sm:px-[14px] lg:px-[20px]';
    const variantStyles = useVariantStyles(variant, filled);
    const inputStyles = `${baseStyles} ${focusStyles} ${sizeStyles} ${variantStyles}`;
    const className = props.className
      ? `${inputStyles} ${props.className}`
      : inputStyles;
    let customProps = {...props};
    delete customProps.variant;
    delete customProps.filled;
    delete customProps.className;

    return <input className={className} {...customProps} ref={ref} />;
  }
);
