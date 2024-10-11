import React from 'react';
import { TzHeadingInterface } from './TzHeadingInterface';
import { LevelEnum } from './LevelEnum';
import { SizeEnum } from './SizeEnum';
import { VariantEnum } from './VariantEnum';

export function TzHeading({
  level = LevelEnum.h1,
  size = SizeEnum.small,
  variant = VariantEnum.accent,
  children,
  ...props
}: TzHeadingInterface) {
  const baseStyles = 'leading-none';
  const sizeStyles = useSizeStyles(size);
  const variantStyles = useVariantStyles(variant);
  const headingStyles = `${baseStyles} ${sizeStyles} ${variantStyles}`;
  props.className = props.className
    ? `${headingStyles} ${props.className}`
    : headingStyles;

  return React.createElement(level, { ...props }, children);
}

function useSizeStyles(size: keyof typeof SizeEnum) {
  return {
    [SizeEnum.small]: 'text-c5 md:text-c6 lg:text-c7 xl:text-c8',
    [SizeEnum.medium]: 'text-c7 sm:text-c8 lg:text-c10',
    [SizeEnum.large]: 'text-c9 sm:text-c10 lg:text-c11',
  }[size];
}

function useVariantStyles(variant: keyof typeof VariantEnum) {
  return {
    [VariantEnum['accent']]: 'text-accent dark:text-dark-accent',
    [VariantEnum['accent-1']]: 'text-accent-1 dark:text-dark-accent-1',
    [VariantEnum['accent-2']]: 'text-accent-2 dark:text-dark-accent-2',
    [VariantEnum['primary']]: 'text-primary dark:text-dark-primary',
    [VariantEnum['primary-1']]: 'text-primary-1 dark:text-dark-primary-1',
    [VariantEnum['primary-2']]: 'text-primary-2 dark:text-dark-primary-2',
    [VariantEnum['secondary']]: 'text-secondary dark:text-dark-secondary',
    [VariantEnum['secondary-1']]: 'text-secondary-1 dark:text-dark-secondary-1',
    [VariantEnum['secondary-2']]: 'text-secondary-2 dark:text-dark-secondary-2',
    [VariantEnum['negative']]: 'text-negative dark:text-dark-negative',
    [VariantEnum['negative-1']]: 'text-negative-1 dark:text-dark-negative-1',
    [VariantEnum['negative-2']]: 'text-negative-2 dark:text-dark-negative-2',
    [VariantEnum['dark']]: 'text-dark dark:text-dark-dark',
    [VariantEnum['dark-1']]: 'text-dark-1 dark:text-dark-dark-1',
    [VariantEnum['dark-2']]: 'text-dark-2 dark:text-dark-dark-2',
    [VariantEnum['light']]: 'text-light dark:text-dark-light',
    [VariantEnum['light-1']]: 'text-light-1 dark:text-dark-light-1',
    [VariantEnum['light-2']]: 'text-light-2 dark:text-dark-light-2',
  }[variant];
}
