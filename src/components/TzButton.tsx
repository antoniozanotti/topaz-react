import React from 'react';
import * as heroIcons from '@heroicons/react/20/solid';
import { TzIcon } from './TzIcon';
import type { TzIconVariant } from './TzIcon';
import { useVariantClasses, useFocusClasses } from './useStyles';

export interface TzButtonProps {
  label?: string;
  iconName?: keyof typeof heroIcons;
  isIconAfterLabel?: boolean;
  variant?: 'accent' | 'primary' | 'secondary' | 'negative' | 'dark' | 'light';
  style?: 'fill' | 'outline';
  isDisabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

export const TzButton = ({
  label,
  iconName,
  isIconAfterLabel = false,
  variant = 'accent',
  style = 'fill',
  isDisabled = false,
  isLoading = false,
  className = '',
}: TzButtonProps) => {
  /* button classes */
  let buttonOtherClasses =
    'rounded-full font-medium flex gap-x-2 justify-center place-items-center';

  // focus
  let focusClasses = useFocusClasses();

  // size
  let buttonSizeClasses = 'h-[28px] sm:h-[38px] lg:h-[48px] min-w-[28px] sm:min-w-[38px] lg:min-w-[48px]';
  if(label){
    buttonSizeClasses += ' px-[16px] sm:px-[27px] lg:px-[36px]'
  }

  // variants and styles
  let variantClasses = useVariantClasses(variant, style);

  // is disabled
  let buttonDisabledClasses =
    isDisabled || isLoading ? 'opacity-50 pointer-events-none' : '';

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
  if(style=="fill"){
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

  return (
    <button
      className={`${buttonOtherClasses} ${focusClasses} ${buttonSizeClasses} ${variantClasses} ${buttonDisabledClasses} ${className}`}
      disabled={isDisabled}
    >
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
