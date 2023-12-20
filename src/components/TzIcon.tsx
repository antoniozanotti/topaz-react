import React from 'react';
import * as heroIcons from '@heroicons/react/24/outline';

export interface TzIconProps {
  iconName: keyof typeof heroIcons;
  variant: 'accent' | 'primary' | 'secondary' | 'negative' | 'dark' | 'light';
  className?: string;
}

export const TzIcon = ({
  iconName,
  variant = 'accent',
  className = ''
}: TzIconProps) => {

  // size
  let sizeClasses = 'w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] lg:w-[20px] lg:h-[20px]';

  // variants
  let variantClasses = '';
  if (variant == 'accent') {
    variantClasses = 'text-accent dark:text-dark-accent';
  } else if (variant == 'primary') {
    variantClasses = 'text-primary dark:text-dark-primary';
  } else if (variant == 'secondary') {
    variantClasses = 'text-secondary dark:text-dark-secondary';
  } else if (variant == 'negative') {
    variantClasses = 'text-negative dark:text-dark-negative';
  } else if (variant == 'dark') {
    variantClasses = 'text-dark dark:text-dark-dark';
  } else if (variant == 'light') {
    variantClasses = 'text-light dark:text-dark-light';
  }

  // icon
  let iconComponentName = iconName ? heroIcons[iconName] : '';

  return (
    React.createElement(iconComponentName, {
      className: `${sizeClasses} ${variantClasses} ${className}`,
    })
  );
};
