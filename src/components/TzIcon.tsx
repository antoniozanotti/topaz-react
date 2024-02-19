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
  let sizeClasses =
    'w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] lg:w-[20px] lg:h-[20px]';

  // variants
  let variantClasses = '';
  switch (variant) {
    case 'accent':
      variantClasses += ' text-accent dark:text-dark-accent';
      break;
    case 'inverse-accent':
      variantClasses += ' text-inverse-accent dark:text-inverse-dark-accent';
      break;
    case 'primary':
      variantClasses += ' text-primary dark:text-dark-primary';
      break;
    case 'inverse-primary':
      variantClasses += ' text-inverse-primary dark:text-inverse-dark-primary';
      break;
    case 'secondary':
      variantClasses += ' text-secondary dark:text-dark-secondary';
      break;
    case 'inverse-secondary':
      variantClasses +=
        ' text-inverse-secondary dark:text-inverse-dark-secondary';
      break;
    case 'negative':
      variantClasses += ' text-negative dark:text-dark-negative';
      break;
    case 'inverse-negative':
      variantClasses +=
        ' text-inverse-negative dark:text-inverse-dark-negative';
      break;
    case 'dark':
      variantClasses += ' text-dark dark:text-dark-dark';
      break;
    case 'inverse-dark':
      variantClasses += ' text-inverse-dark dark:text-inverse-dark-dark';
      break;
    case 'light':
      variantClasses += ' text-light dark:text-dark-light';
      break;
    case 'inverse-light':
      variantClasses += ' text-inverse-light dark:text-inverse-dark-light';
      break;
  }

  return React.createElement(heroIcons[iconName], {
    className: `${sizeClasses} ${variantClasses} ${className}`,
  });
}
