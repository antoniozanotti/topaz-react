import React from 'react';
import * as heroIcons from '@heroicons/react/24/outline';

export type TzIconVariant =
  | 'accent'
  | 'inverse-accent'
  | 'primary'
  | 'inverse-primary'
  | 'secondary'
  | 'inverse-secondary'
  | 'negative'
  | 'inverse-negative'
  | 'dark'
  | 'inverse-dark'
  | 'light'
  | 'inverse-light';

export interface TzIconProps {
  iconName: keyof typeof heroIcons;
  variant?: TzIconVariant;
  className?: string;
}

export function TzIcon({
  iconName,
  variant = 'accent',
  className = '',
}: TzIconProps) {
  // size
  let sizeStyles = 'w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]';

  // variants
  let variantStyles = '';
  switch (variant) {
    case 'accent':
      variantStyles = 'text-accent dark:text-dark-accent';
      break;
    case 'inverse-accent':
      variantStyles = 'text-inverse-accent dark:text-inverse-dark-accent';
      break;
    case 'primary':
      variantStyles = 'text-primary dark:text-dark-primary';
      break;
    case 'inverse-primary':
      variantStyles = 'text-inverse-primary dark:text-inverse-dark-primary';
      break;
    case 'secondary':
      variantStyles = 'text-secondary dark:text-dark-secondary';
      break;
    case 'inverse-secondary':
      variantStyles = 'text-inverse-secondary dark:text-inverse-dark-secondary';
      break;
    case 'negative':
      variantStyles = 'text-negative dark:text-dark-negative';
      break;
    case 'inverse-negative':
      variantStyles = 'text-inverse-negative dark:text-inverse-dark-negative';
      break;
    case 'dark':
      variantStyles = 'text-dark dark:text-dark-dark';
      break;
    case 'inverse-dark':
      variantStyles = 'text-inverse-dark dark:text-inverse-dark-dark';
      break;
    case 'light':
      variantStyles = 'text-light dark:text-dark-light';
      break;
    case 'inverse-light':
      variantStyles = 'text-inverse-light dark:text-inverse-dark-light';
      break;
  }

  return React.createElement(heroIcons[iconName], {
    className: `${sizeStyles} ${variantStyles} ${className}`,
    title: iconName
  });
}
