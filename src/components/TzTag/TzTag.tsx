import React from 'react';
import { TzTagInterface } from './TzTagInterface';
import { useVariantStyles } from '../useStyles';
import { VariantEnum } from './VariantEnum';

export function TzTag ({
  label,
  variant = VariantEnum.accent,
  filled = true,
  disabled = false,
  ...props
}: TzTagInterface) {
  const baseStyles = 'rounded font-medium px-2 py-1 text-c2';
  const variantStyles = useVariantStyles(variant, filled, false);
  const disabledStyles = disabled ? 'opacity-50' : '';
  const tagStyles = `${baseStyles} ${variantStyles} ${disabledStyles}`;
  props.className = props.className
    ? `${tagStyles} ${props.className}`
    : tagStyles;

  return (
    <span {...props}>{label}</span>
  );
};
