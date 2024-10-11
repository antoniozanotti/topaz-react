import React from 'react';
import * as heroIcons from '@heroicons/react/24/outline';
import { TzIconInterface } from './TzIconInterface';
import { VariantEnum } from './VariantEnum';

export function TzIcon({
  iconName,
  variant = VariantEnum.ACCENT,
  className = '',
}: TzIconInterface) {
  const sizeStyles = 'w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]';
  const variantStyles = useVariantStyles(variant);

  return React.createElement(heroIcons[iconName], {
    className: `${sizeStyles} ${variantStyles} ${className}`,
    title: iconName
  });
}

function useVariantStyles(variant: VariantEnum){
  return {
    [VariantEnum.ACCENT]: 'text-accent dark:text-dark-accent',
    [VariantEnum.INVERSE_ACCENT]: 'text-inverse-accent dark:text-inverse-dark-accent',
    [VariantEnum.PRIMARY]: 'text-primary dark:text-dark-primary',
    [VariantEnum.INVERSE_PRIMARY]: 'text-inverse-primary dark:text-inverse-dark-primary',
    [VariantEnum.SECONDARY]: 'text-secondary dark:text-dark-secondary',
    [VariantEnum.INVERSE_SECONDARY]: 'text-inverse-secondary dark:text-inverse-dark-secondary',
    [VariantEnum.NEGATIVE]: 'text-negative dark:text-dark-negative',
    [VariantEnum.INVERSE_NEGATIVE]: 'text-inverse-negative dark:text-inverse-dark-negative',
    [VariantEnum.DARK]: 'text-dark dark:text-dark-dark',
    [VariantEnum.INVERSE_DARK]: 'text-inverse-dark dark:text-inverse-dark-dark',
    [VariantEnum.LIGHT]: 'text-light dark:text-dark-light',
    [VariantEnum.INVERSE_LIGHT]: 'text-inverse-light dark:text-inverse-dark-light',
  }[variant];
}