import React from 'react';
import * as heroIcons from '@heroicons/react/20/solid';
type IconName = keyof typeof heroIcons;

export interface TzButtonProps {
  /**
   * The label of the button.
   */
  label?: string;
  /**
   * The icon of the button.
   */
  iconName?: IconName;
  /**
   * Is the icon after the label?
   */
  isIconAfterLabel?: boolean;
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button.
   */
  variant?: 'accent' | 'primary' | 'secondary' | 'negative' | 'dark' | 'light';
  /**
   * The style of the button.
   */
  style?: 'fill' | 'outline';
  /**
   * Is the button disabled?
   */
  isDisabled?: boolean;
  /**
   * Is the button loading?
   */
  isLoading?: boolean;
  /**
   * Additional classes of the button.
   */
  className?: string;
}

export const TzButton = ({
  label,
  iconName,
  isIconAfterLabel = false,
  size = 'medium',
  variant = 'accent',
  style = 'fill',
  isDisabled = false,
  isLoading = false,
  className = '',
}: TzButtonProps) => {
  /* button classes */
  let buttonClasses =
    className + ' rounded-full font-medium flex justify-center items-center';

  // focus
  buttonClasses += ' focus:outline focus:outline-offset-2 focus:outline-2';

  // size
  if (size == 'small') {
    // size -> small
    buttonClasses +=
      ' text-sm min-h-[theme(spacing.11)] min-w-[theme(spacing.11)] lg:text-xs lg:min-h-[theme(spacing.9)] lg:min-w-[theme(spacing.9)]';
  } else if (size == 'medium') {
    // size -> medium
    buttonClasses +=
      ' text-base min-h-[theme(spacing.12)] min-w-[theme(spacing.12)] lg:text-sm lg:min-h-[theme(spacing.10)] lg:min-w-[theme(spacing.10)]';
  } else if (size == 'large') {
    // size -> large
    buttonClasses +=
      ' text-lg min-h-[theme(spacing.14)] min-w-[theme(spacing.14)] lg:text-base lg:min-h-[theme(spacing.11)] lg:min-w-[theme(spacing.11)]';
  }

  // padding only with text
  if (label) {
    if (size == 'small') {
      buttonClasses += ' px-6 lg:px-4';
    } else if (size == 'medium') {
      buttonClasses += ' px-7 lg:px-5';
    } else if (size == 'large') {
      buttonClasses += ' px-8 lg:px-6';
    }
  }

  // variants and styles
  if (style == 'fill') {
    buttonClasses += ' text-dark-2 dark:text-dark-dark-2';
    // fill
    if (variant == 'accent') {
      // fill -> accent
      buttonClasses +=
        ' bg-accent hover:bg-accent-1 active:bg-accent-2 focus:outline-accent dark:bg-dark-accent dark:hover:bg-dark-accent-1 dark:active:bg-dark-accent-2 dark:focus:outline-dark-accent';
    } else if (variant == 'primary') {
      // fill -> primary
      buttonClasses +=
        ' bg-primary hover:bg-primary-1 active:bg-primary-2 focus:outline-primary dark:bg-dark-primary dark:hover:bg-dark-primary-1 dark:active:bg-dark-primary-2 dark:focus:outline-dark-primary';
    } else if (variant == 'secondary') {
      // fill -> secondary
      buttonClasses +=
        ' bg-secondary hover:bg-secondary-1 active:bg-secondary-2 focus:outline-secondary dark:bg-dark-secondary dark:hover:bg-dark-secondary-1 dark:active:bg-dark-secondary-2 dark:focus:outline-dark-secondary';
    } else if (variant == 'negative') {
      // fill -> negative
      buttonClasses +=
        ' bg-negative hover:bg-negative-1 active:bg-negative-2 focus:outline-negative dark:bg-dark-negative dark:hover:bg-dark-negative-1 dark:active:bg-dark-negative-2 dark:focus:outline-dark-negative';
    } else if (variant == 'dark') {
      // fill -> dark
      buttonClasses +=
        ' bg-dark hover:bg-dark-2 active:bg-dark-1 focus:outline-dark dark:bg-dark-dark dark:hover:bg-dark-dark-2 dark:active:bg-dark-dark-1 dark:focus:outline-dark-dark';
    } else if (variant == 'light') {
      // fill -> white
      buttonClasses +=
        ' bg-light hover:bg-light-1 active:bg-light-2 focus:outline-light dark:bg-dark-light dark:hover:bg-dark-light-1 dark:active:bg-dark-light-2 dark:focus:outline-dark-light';
    }
  } else if (style == 'outline') {
    buttonClasses += ' outline outline-px';
    // outline
    if (variant == 'accent') {
      // outline -> accent
      buttonClasses +=
        ' outline-accent hover:outline-accent-1 active:outline-accent-2 text-accent dark:outline-accent dark:hover:outline-accent-1 dark:active:outline-accent-2 dark:text-dark-accent';
    } else if (variant == 'primary') {
      // outline -> primary
      buttonClasses +=
        ' outline-primary hover:outline-primary-1 active:outline-primary-2 text-primary dark:outline-dark-primary dark:hover:outline-dark-primary-1 dark:active:outline-dark-primary-2 dark:text-dark-primary';
    } else if (variant == 'secondary') {
      // outline -> secondary
      buttonClasses +=
        ' outline-secondary hover:outline-secondary-1 active:outline-secondary-2 text-secondary dark:outline-dark-secondary dark:hover:outline-dark-secondary-1 dark:active:outline-dark-secondary-2 dark:text-dark-secondary';
    } else if (variant == 'negative') {
      // outline -> negative
      buttonClasses +=
        ' outline-negative hover:outline-negative-1 active:outline-negative-2 text-negative dark:outline-dark-negative dark:hover:outline-dark-negative-1 dark:active:outline-dark-negative-2 dark:text-dark-negative';
    } else if (variant == 'dark') {
      // outline -> black
      buttonClasses +=
        ' outline-dark hover:outline-dark-1 active:outline-dark-2 text-dark dark:outline-dark-dark dark:hover:outline-dark-dark-1 dark:active:outline-dark-dark-2 dark:text-dark-dark';
    } else if (variant == 'light') {
      // outline -> white
      buttonClasses +=
        ' outline-light hover:outline-light-1 active:outline-light-2 text-light dark:outline-dark-light dark:hover:outline-dark-light-1 dark:active:outline-dark-light-2 dark:text-dark-light';
    }
  }

  // is disabled
  if (isDisabled || isLoading) {
    buttonClasses += ' opacity-50 pointer-events-none';
  }

  /* icon classes */
  let iconClasses;
  // size
  if (size == 'small') {
    iconClasses = 'h-6 w-6 lg:h-4 lg:w-4';
  } else if (size == 'medium') {
    iconClasses = 'h-7 w-7 lg:h-5 lg:w-5';
  } else if (size == 'large') {
    iconClasses = 'h-8 w-8 lg:h-6 lg:w-6';
  }
  // is loading
  if (isLoading) {
    iconClasses += ' animate-spin';
  }

  /* label classes */
  let labelClasses;
  // padding between icon and text
  if (iconName) {
    if (!isIconAfterLabel) {
      labelClasses = 'pl-1.5';
    } else {
      labelClasses = 'pr-1.5';
    }
  }

  // label
  if (isLoading) {
    label = 'loading';
  }

  // icon
  let iconComponentName;
  if (isLoading) {
    iconComponentName = heroIcons['ArrowPathIcon'];
  } else {
    iconComponentName = iconName ? heroIcons[iconName] : '';
  }

  return (
    <button className={buttonClasses} disabled={isDisabled}>
      {iconName &&
        !isIconAfterLabel &&
        React.createElement(iconComponentName, {
          className: iconClasses,
        })}
      {label && <span className={labelClasses}>{label}</span>}
      {iconName &&
        isIconAfterLabel &&
        React.createElement(iconComponentName, {
          className: iconClasses,
        })}
    </button>
  );
};
