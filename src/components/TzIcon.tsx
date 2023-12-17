import React from 'react';
import * as heroIcons from '@heroicons/react/24/outline';
type IconName = keyof typeof heroIcons;

export interface TzIconProps {
  /**
   * The icon of the button.
   */
  iconName?: IconName;
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button.
   */
  variant?: 'accent' | 'primary' | 'secondary' | 'negative' | 'dark' | 'light';
  /**
   * Additional classes of the heading.
   */
  className?: string;
}

export const TzIcon = ({
  iconName,
  size = 'medium',
  variant = 'accent',
  className = ''
}: TzIconProps) => {

  /* icon classes */
  let iconClasses = className;
  // size
  if (size == 'small') {
    iconClasses += ' h-6 w-6 lg:h-4 lg:w-4';
  } else if (size == 'medium') {
    iconClasses += ' h-7 w-7 lg:h-5 lg:w-5';
  } else if (size == 'large') {
    iconClasses += ' h-8 w-8 lg:h-6 lg:w-6';
  }

  // variants
  if (variant == 'accent') {
    iconClasses += ' text-accent dark:text-dark-accent';
  } else if (variant == 'primary') {
    iconClasses += ' text-primary dark:text-dark-primary';
  } else if (variant == 'secondary') {
    iconClasses += ' text-secondary dark:text-dark-secondary';
  } else if (variant == 'negative') {
    iconClasses += ' text-negative dark:text-dark-negative';
  } else if (variant == 'dark') {
    iconClasses += ' text-dark dark:text-dark-dark';
  } else if (variant == 'light') {
    iconClasses += ' text-light dark:text-dark-light';
  }

  // icon
  let iconComponentName = iconName ? heroIcons[iconName] : '';

  return (
    React.createElement(iconComponentName, {
      className: iconClasses,
    })
  );
};
