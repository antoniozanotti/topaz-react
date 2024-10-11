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
  const tagBaseStyles = 'rounded font-medium px-2 py-1 text-c2';
  const variantStyles = useVariantStyles(variant, filled, false);
  const tagDisabledStyles = disabled ? 'opacity-50' : '';
  const tagStyles = `${tagBaseStyles} ${variantStyles} ${tagDisabledStyles}`;
  props.className = props.className
    ? `${tagStyles} ${props.className}`
    : tagStyles;

  return (
    <span {...props}>{label}</span>
  );
};
