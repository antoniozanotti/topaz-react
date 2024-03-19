import React from 'react';
import { useVariantClasses } from '../useStyles';

export interface TzLabelProps extends React.ComponentProps<"span"> {
  label?: string;
  variant?: 'accent' | 'primary' | 'secondary' | 'negative' | 'dark' | 'light';
  filled?: boolean;
  disabled?: boolean;
}

export function TzLabel ({
  label,
  variant = 'accent',
  filled = true,
  disabled = false,
  ...props
}: TzLabelProps) {
  /* label classes */
  let labelOtherClasses = 'rounded font-medium px-2 py-1';

  // variants and filled
  let variantClasses = useVariantClasses(variant, filled, false);

  // is disabled
  let labelDisabledClasses = disabled ? 'opacity-50' : '';

  let labelClasses = `${labelOtherClasses} ${variantClasses} ${labelDisabledClasses}`;
  props.className = props.className
    ? labelClasses + " " + props.className
    : labelClasses;

  return (
    <span {...props}>{label}</span>
  );
};
