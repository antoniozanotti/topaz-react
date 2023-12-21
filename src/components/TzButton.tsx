import React from 'react';
import * as heroIcons from '@heroicons/react/20/solid';
import { TzIcon } from './TzIcon';

export interface TzButtonProps {
  label?: string;
  iconName?: keyof typeof heroIcons;
  isIconAfterLabel?: boolean;
  variant?: 'accent' | 'primary' | 'secondary' | 'negative' | 'dark' | 'light';
  style?: 'fill' | 'outline';
  isDisabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

export const TzButton = ({
  label,
  iconName,
  isIconAfterLabel = false,
  variant = 'accent',
  style = 'fill',
  isDisabled = false,
  isLoading = false,
  className = '',
}: TzButtonProps) => {
  /* button classes */
  let buttonOtherClasses =
    'rounded-full font-medium flex gap-x-2 justify-center place-items-center';

  // focus
  let buttonFocusClasses =
    'focus:outline focus:outline-offset-2 focus:outline-2';

  // size
  let buttonSizeClasses = 'h-[28px] sm:h-[38px] lg:h-[48px] min-w-[28px] sm:min-w-[38px] lg:min-w-[48px]';
  if(label){
    buttonSizeClasses += ' px-[16px] sm:px-[27px] lg:px-[36px]'
  }

  /*if (size == 'small') {
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
  }*/

  // variants and styles
  let buttonVariantClasses = '';
  if (style == 'fill') {
    buttonVariantClasses = 'text-dark-2 dark:text-dark-dark-2';
    // fill
    if (variant == 'accent') {
      // fill -> accent
      buttonVariantClasses +=
        ' bg-accent hover:bg-accent-1 active:bg-accent-2 focus:outline-accent dark:bg-dark-accent dark:hover:bg-dark-accent-1 dark:active:bg-dark-accent-2 dark:focus:outline-dark-accent';
    } else if (variant == 'primary') {
      // fill -> primary
      buttonVariantClasses +=
        ' bg-primary hover:bg-primary-1 active:bg-primary-2 focus:outline-primary dark:bg-dark-primary dark:hover:bg-dark-primary-1 dark:active:bg-dark-primary-2 dark:focus:outline-dark-primary';
    } else if (variant == 'secondary') {
      // fill -> secondary
      buttonVariantClasses +=
        ' bg-secondary hover:bg-secondary-1 active:bg-secondary-2 focus:outline-secondary dark:bg-dark-secondary dark:hover:bg-dark-secondary-1 dark:active:bg-dark-secondary-2 dark:focus:outline-dark-secondary';
    } else if (variant == 'negative') {
      // fill -> negative
      buttonVariantClasses +=
        ' bg-negative hover:bg-negative-1 active:bg-negative-2 focus:outline-negative dark:bg-dark-negative dark:hover:bg-dark-negative-1 dark:active:bg-dark-negative-2 dark:focus:outline-dark-negative';
    } else if (variant == 'dark') {
      // fill -> dark
      buttonVariantClasses +=
        ' bg-dark hover:bg-dark-2 active:bg-dark-1 focus:outline-dark dark:bg-dark-dark dark:hover:bg-dark-dark-2 dark:active:bg-dark-dark-1 dark:focus:outline-dark-dark';
    } else if (variant == 'light') {
      // fill -> white
      buttonVariantClasses +=
        ' bg-light hover:bg-light-1 active:bg-light-2 focus:outline-light dark:bg-dark-light dark:hover:bg-dark-light-1 dark:active:bg-dark-light-2 dark:focus:outline-dark-light';
    }
  } else if (style == 'outline') {
    buttonVariantClasses = 'outline outline-px';
    // outline
    if (variant == 'accent') {
      // outline -> accent
      buttonVariantClasses +=
        ' outline-accent hover:outline-accent-1 active:outline-accent-2 text-accent dark:outline-accent dark:hover:outline-accent-1 dark:active:outline-accent-2 dark:text-dark-accent';
    } else if (variant == 'primary') {
      // outline -> primary
      buttonVariantClasses +=
        ' outline-primary hover:outline-primary-1 active:outline-primary-2 text-primary dark:outline-dark-primary dark:hover:outline-dark-primary-1 dark:active:outline-dark-primary-2 dark:text-dark-primary';
    } else if (variant == 'secondary') {
      // outline -> secondary
      buttonVariantClasses +=
        ' outline-secondary hover:outline-secondary-1 active:outline-secondary-2 text-secondary dark:outline-dark-secondary dark:hover:outline-dark-secondary-1 dark:active:outline-dark-secondary-2 dark:text-dark-secondary';
    } else if (variant == 'negative') {
      // outline -> negative
      buttonVariantClasses +=
        ' outline-negative hover:outline-negative-1 active:outline-negative-2 text-negative dark:outline-dark-negative dark:hover:outline-dark-negative-1 dark:active:outline-dark-negative-2 dark:text-dark-negative';
    } else if (variant == 'dark') {
      // outline -> black
      buttonVariantClasses +=
        ' outline-dark hover:outline-dark-1 active:outline-dark-2 text-dark dark:outline-dark-dark dark:hover:outline-dark-dark-1 dark:active:outline-dark-dark-2 dark:text-dark-dark';
    } else if (variant == 'light') {
      // outline -> white
      buttonVariantClasses +=
        ' outline-light hover:outline-light-1 active:outline-light-2 text-light dark:outline-dark-light dark:hover:outline-dark-light-1 dark:active:outline-dark-light-2 dark:text-dark-light';
    }
  }

  // is disabled
  let buttonDisabledClasses =
    isDisabled || isLoading ? 'opacity-50 pointer-events-none' : '';

  /* icon classes */
  let iconClasses = '';

  if(isIconAfterLabel){
    iconClasses += " order-last";
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
      labelClasses = '';
    } else {
      labelClasses = '';
    }
  }

  // label
  if (isLoading) {
    label = 'loading';
  }

  // icon
  if (isLoading) {
    iconName = 'ArrowPathIcon';
  }

  return (
    <button
      className={`${buttonOtherClasses} ${buttonFocusClasses} ${buttonSizeClasses} ${buttonVariantClasses} ${buttonDisabledClasses} ${className}`}
      disabled={isDisabled}
    >
      {iconName &&
        React.createElement(TzIcon, {
          iconName: iconName,
          variant: 'light',
          className: iconClasses,
        })}
      {label && <span className={labelClasses}>{label}</span>}
    </button>
  );
};
