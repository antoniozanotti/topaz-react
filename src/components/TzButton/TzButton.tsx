import React from 'react';
import { TzIcon } from '../TzIcon/TzIcon';
import { VariantEnum as IconVariant } from '../TzIcon/VariantEnum';
import { useVariantStyles, useFocusStyles } from '../useStyles';
import { VariantEnum } from './VariantEnum';
import { TzButtonInterface } from './TzButtonInterface';

export function TzButton({
  label,
  iconName,
  isIconAfterLabel = false,
  variant = VariantEnum.accent,
  filled = true,
  isLoading = false,
  disabled = false,
  ...props
}: TzButtonInterface) {
  const baseStyles = 'rounded-full font-medium';
  const alignStyles = 'flex gap-x-2 justify-center place-items-center';
  const focusStyles = useFocusStyles();
  const variantStyles = useVariantStyles(variant, filled);
  const sizeStyles = useSizeStyles(label);
  const disabledStyles = useDisabledStyles(isLoading, disabled);
  const buttonStyles = `${baseStyles} ${alignStyles} ${focusStyles} ${variantStyles} ${sizeStyles} ${disabledStyles}`;
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

function useSizeStyles(label?: string) {
  let buttonSizeStyles = 'h-[38px] lg:h-[48px] min-w-[38px] lg:min-w-[48px]';
  if (label) {
    buttonSizeStyles += ' px-[27px] lg:px-[36px]';
  }
  return buttonSizeStyles;
}

function useDisabledStyles(isLoading?: boolean, disabled?: boolean) {
  return isLoading || disabled ? 'opacity-50 pointer-events-none' : '';
}

function useIconVariant(
  variant?: keyof typeof VariantEnum,
  filled?: boolean
): keyof typeof IconVariant | undefined {
  if (!filled) {
    return variant;
  }
  switch (variant) {
    case VariantEnum.accent:
      return IconVariant['inverse-accent'];
    case VariantEnum.primary:
      return IconVariant['inverse-primary'];
    case VariantEnum.secondary:
      return IconVariant['inverse-secondary'];
    case VariantEnum.negative:
      return IconVariant['inverse-negative'];
    case VariantEnum.dark:
      return IconVariant['inverse-dark'];
    case VariantEnum.light:
      return IconVariant['inverse-light'];
  }
  return undefined;
}
