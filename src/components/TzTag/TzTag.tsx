import React from 'react';
import { useVariantStyles } from '../useStyles';

export interface TzTagProps extends React.ComponentProps<"span"> {
  label?: string;
  variant?: 'accent' | 'primary' | 'secondary' | 'negative' | 'dark' | 'light';
  filled?: boolean;
  disabled?: boolean;
}

export function TzTag ({
  label,
  variant = 'accent',
  filled = true,
  disabled = false,
  ...props
}: TzTagProps) {
  /* label Styles */
  let labelOtherStyles = 'rounded font-medium px-2 py-1 text-c2';

  // variants and filled
  let variantStyles = useVariantStyles(variant, filled, false);

  // is disabled
  let labelDisabledStyles = disabled ? 'opacity-50' : '';

  let labelStyles = `${labelOtherStyles} ${variantStyles} ${labelDisabledStyles}`;
  props.className = props.className
    ? labelStyles + " " + props.className
    : labelStyles;

  return (
    <span {...props}>{label}</span>
  );
};
