import React from 'react';
import { TzHeadingInterface } from './TzHeadingInterface';
import { LevelEnum } from './LevelEnum';
import { SizeEnum } from './SizeEnum';
import { VariantEnum } from './VariantEnum';

export function TzHeading({
  level = LevelEnum.H1,
  size = SizeEnum.SMALL,
  variant = VariantEnum.ACCENT,
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

function useSizeStyles(size: SizeEnum) {
  return {
    [SizeEnum.SMALL]: 'text-c5 md:text-c6 lg:text-c7 xl:text-c8',
    [SizeEnum.MEDIUM]: 'text-c7 sm:text-c8 lg:text-c10',
    [SizeEnum.LARGE]: 'text-c9 sm:text-c10 lg:text-c11',
  }[size];
}

function useVariantStyles(variant: VariantEnum) {
  return {
    [VariantEnum.ACCENT]: 'text-accent dark:text-dark-accent',
    [VariantEnum.ACCENT1]: 'text-accent-1 dark:text-dark-accent-1',
    [VariantEnum.ACCENT2]: 'text-accent-2 dark:text-dark-accent-2',
    [VariantEnum.PRIMARY]: 'text-primary dark:text-dark-primary',
    [VariantEnum.PRIMARY1]: 'text-primary-1 dark:text-dark-primary-1',
    [VariantEnum.PRIMARY2]: 'text-primary-2 dark:text-dark-primary-2',
    [VariantEnum.SECONDARY]: 'text-secondary dark:text-dark-secondary',
    [VariantEnum.SECONDARY1]: 'text-secondary-1 dark:text-dark-secondary-1',
    [VariantEnum.SECONDARY2]: 'text-secondary-2 dark:text-dark-secondary-2',
    [VariantEnum.NEGATIVE]: 'text-negative dark:text-dark-negative',
    [VariantEnum.NEGATIVE1]: 'text-negative-1 dark:text-dark-negative-1',
    [VariantEnum.NEGATIVE2]: 'text-negative-2 dark:text-dark-negative-2',
    [VariantEnum.DARK]: 'text-dark dark:text-dark-dark',
    [VariantEnum.DARK1]: 'text-dark-1 dark:text-dark-dark-1',
    [VariantEnum.DARK2]: 'text-dark-2 dark:text-dark-dark-2',
    [VariantEnum.LIGHT]: 'text-light dark:text-dark-light',
    [VariantEnum.LIGHT1]: 'text-light-1 dark:text-dark-light-1',
    [VariantEnum.LIGHT2]: 'text-light-2 dark:text-dark-light-2',
  }[variant];
}
