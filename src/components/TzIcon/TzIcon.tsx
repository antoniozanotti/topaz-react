import React from 'react';
import * as heroIcons from '@heroicons/react/24/outline';
import { TzIconInterface } from './TzIconInterface';
import { VariantEnum } from './VariantEnum';

export function TzIcon({
  iconName,
  variant = VariantEnum.accent,
  className = '',
}: TzIconInterface) {
  const sizeStyles = 'w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]';
  const variantStyles = useVariantStyles(variant);

  return React.createElement(heroIcons[iconName], {
    className: `${sizeStyles} ${variantStyles} ${className}`,
    title: iconName
  });
}

function useVariantStyles(variant: keyof typeof VariantEnum){
  return {
    [VariantEnum['accent']]: 'text-accent dark:text-dark-accent',
    [VariantEnum['inverse-accent']]: 'text-inverse-accent dark:text-inverse-dark-accent',
    [VariantEnum['primary']]: 'text-primary dark:text-dark-primary',
    [VariantEnum['inverse-primary']]: 'text-inverse-primary dark:text-inverse-dark-primary',
    [VariantEnum['secondary']]: 'text-secondary dark:text-dark-secondary',
    [VariantEnum['inverse-secondary']]: 'text-inverse-secondary dark:text-inverse-dark-secondary',
    [VariantEnum['negative']]: 'text-negative dark:text-dark-negative',
    [VariantEnum['inverse-negative']]: 'text-inverse-negative dark:text-inverse-dark-negative',
    [VariantEnum['dark']]: 'text-dark dark:text-dark-dark',
    [VariantEnum['inverse-dark']]: 'text-inverse-dark dark:text-inverse-dark-dark',
    [VariantEnum['light']]: 'text-light dark:text-dark-light',
    [VariantEnum['inverse-light']]: 'text-inverse-light dark:text-inverse-dark-light',
  }[variant];
}