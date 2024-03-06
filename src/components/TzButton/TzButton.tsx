import React from 'react';
import * as heroIcons from '@heroicons/react/20/solid';
import { TzIcon } from '../TzIcon/TzIcon';
import type { TzIconVariant } from '../TzIcon/TzIcon';
import { useVariantClasses, useFocusClasses } from '../useStyles';

export interface TzButtonProps extends React.ComponentProps<"button"> {
  label?: string;
  iconName?: keyof typeof heroIcons;
  isIconAfterLabel?: boolean;
  variant?: 'accent' | 'primary' | 'secondary' | 'negative' | 'dark' | 'light';
  filled?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

export function TzButton ({
  label,
  iconName,
  isIconAfterLabel = false,
  variant = 'accent',
  filled = true,
  isLoading = false,
  disabled = false,
  ...props
}: TzButtonProps) {
  /* button classes */
  let buttonOtherClasses =
    'rounded-full font-medium flex gap-x-2 justify-center place-items-center';

  // focus
  let focusClasses = useFocusClasses();

  // size
  let buttonSizeClasses = 'h-[38px] lg:h-[48px] min-w-[38px] lg:min-w-[48px]';
  if(label){
    buttonSizeClasses += ' px-[27px] lg:px-[36px]'
  }

  // variants and filled
  let variantClasses = useVariantClasses(variant, filled);

  // is disabled
  let buttonDisabledClasses =
    disabled || isLoading ? 'opacity-50 pointer-events-none' : '';

  /* icon classes */
  let iconClasses = '';

  if(isIconAfterLabel){
    iconClasses += " order-last";
  }

  // is loading
  if (isLoading) {
    iconClasses += ' animate-spin';
  }

  // label
  if (isLoading) {
    label = 'loading';
  }

  // icon
  if (isLoading) {
    iconName = 'ArrowPathIcon';
  }

  // icon variant
  let iconVariant: TzIconVariant = variant;
  if(filled){
    switch (variant) {
      case "accent":
        iconVariant = "inverse-accent";
        break;
      case "primary":
        iconVariant = "inverse-primary";
        break;
      case "secondary":
        iconVariant = "inverse-secondary";
        break;
      case "negative":
        iconVariant = "inverse-negative";
        break;
      case "dark":
        iconVariant = "inverse-dark";
        break;
      case "light":
        iconVariant = "inverse-light";
        break;
    }
  }

  let buttonClasses = `${buttonOtherClasses} ${focusClasses} ${buttonSizeClasses} ${variantClasses} ${buttonDisabledClasses}`;
  props.className = props.className
    ? buttonClasses + " " + props.className
    : buttonClasses;

  return (
    <button {...props} disabled={disabled}>
      {iconName &&
        React.createElement(TzIcon, {
          iconName: iconName,
          variant: iconVariant,
          className: iconClasses,
        })}
      {label && <span>{label}</span>}
    </button>
  );
};
