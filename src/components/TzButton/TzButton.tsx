import React from 'react';
import { TzIcon } from '../TzIcon/TzIcon';
import type { TzIconVariant } from '../TzIcon/TzIcon';
import { useVariantStyles, useFocusStyles } from '../useStyles';
import { VariantEnum } from './VariantEnum';
import { TzButtonInterface } from './TzButtonInterface';

export function TzButton({
  label,
  iconName,
  isIconAfterLabel = false,
  variant = VariantEnum.ACCENT,
  filled = true,
  isLoading = false,
  disabled = false,
  ...props
}: TzButtonInterface) {
  const buttonBaseStyles = 'rounded-full font-medium';
  const buttonAlignStyles = 'flex gap-x-2 justify-center place-items-center';
  const buttonFocusStyles = useFocusStyles();
  const buttonVariantStyles = useVariantStyles(variant, filled);
  const buttonSizeStyles = useButtonSizeStyles(label);
  const buttonDisabledStyles = useButtonDisabledStyles(isLoading, disabled);
  const buttonStyles = `${buttonBaseStyles} ${buttonAlignStyles} ${buttonFocusStyles} ${buttonVariantStyles} ${buttonSizeStyles} ${buttonDisabledStyles}`;
  props.className = props.className
    ? `${buttonStyles} ${props.className}`
    : buttonStyles;

  const iconVariant = useIconVariant(variant, filled);
  let iconBaseStyles = isIconAfterLabel ? 'order-last' : '';
  if (isLoading) {
    iconBaseStyles += ' animate-spin';
    label = 'loading';
    iconName = 'ArrowPathIcon';
  }

  return (
    <button {...props} disabled={disabled || isLoading}>
      {iconName &&
        React.createElement(TzIcon, {
          iconName: iconName,
          variant: iconVariant,
          className: iconBaseStyles,
        })}
      {label && <span>{label}</span>}
    </button>
  );
}

function useButtonSizeStyles(label?: string) {
  let buttonSizeStyles = 'h-[38px] lg:h-[48px] min-w-[38px] lg:min-w-[48px]';
  if (label) {
    buttonSizeStyles += ' px-[27px] lg:px-[36px]';
  }
  return buttonSizeStyles;
}

function useButtonDisabledStyles(isLoading?: boolean, disabled?: boolean) {
  return isLoading || disabled ? 'opacity-50 pointer-events-none' : '';
}

function useIconVariant(
  variant?: VariantEnum,
  filled?: boolean
): TzIconVariant | undefined {
  if (!filled) {
    return variant;
  }
  switch (variant) {
    case VariantEnum.ACCENT:
      return 'inverse-accent';
    case VariantEnum.PRIMARY:
      return 'inverse-primary';
    case VariantEnum.SECONDARY:
      return 'inverse-secondary';
    case VariantEnum.NEGATIVE:
      return 'inverse-negative';
    case VariantEnum.DARK:
      return 'inverse-dark';
    case VariantEnum.LIGHT:
      return 'inverse-light';
  }
  return undefined;
}
