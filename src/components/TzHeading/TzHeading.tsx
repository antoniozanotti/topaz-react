import React from 'react';
import { ReactNode } from 'react';

export type TzHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TzHeadingSize = 'small' | 'medium' | 'large' | 'x_large';
export type TzHeadingVariant =
  | 'accent'
  | 'accent-1'
  | 'accent-2'
  | 'primary'
  | 'primary-1'
  | 'primary-2'
  | 'secondary'
  | 'secondary-1'
  | 'secondary-2'
  | 'negative'
  | 'negative-1'
  | 'negative-2'
  | 'dark'
  | 'dark-1'
  | 'dark-2'
  | 'light'
  | 'light-1'
  | 'light-2';

export interface TzHeadingProps extends React.ComponentProps<'h1'> {
  level?: TzHeadingLevel;
  size?: TzHeadingSize;
  variant?: TzHeadingVariant;
  children?: ReactNode;
}

export function TzHeading({
  level = 'h1',
  size = 'small',
  variant = 'accent',
  children,
  ...props
}: TzHeadingProps) {
  let headingClasses = 'leading-none';

  switch (size) {
    case 'small':
      headingClasses += ' text-c5 md:text-c6 lg:text-c7 xl:text-c8';
      break;
    case 'medium':
      headingClasses += ' text-c7 sm:text-c8 lg:text-c10';
      break;
    default:
      headingClasses += ' text-c9 sm:text-c10 lg:text-c11';
      break;
  }

  switch (variant) {
    case 'accent':
      headingClasses += ' text-accent dark:text-dark-accent';
      break;
    case 'accent-1':
      headingClasses += ' text-accent-1 dark:text-dark-accent-1';
      break;
    case 'accent-2':
      headingClasses += ' text-accent-2 dark:text-dark-accent-2';
      break;
    case 'primary':
      headingClasses += ' text-primary dark:text-dark-primary';
      break;
    case 'primary-1':
      headingClasses += ' text-primary-1 dark:text-dark-primary-1';
      break;
    case 'primary-2':
      headingClasses += ' text-primary-2 dark:text-dark-primary-2';
      break;
    case 'secondary':
      headingClasses += ' text-secondary dark:text-dark-secondary';
      break;
    case 'secondary-1':
      headingClasses += ' text-secondary-1 dark:text-dark-secondary-1';
      break;
    case 'secondary-2':
      headingClasses += ' text-secondary-2 dark:text-dark-secondary-2';
      break;
    case 'negative':
      headingClasses += ' text-negative dark:text-dark-negative';
      break;
    case 'negative-1':
      headingClasses += ' text-negative-1 dark:text-dark-negative-1';
      break;
    case 'negative-2':
      headingClasses += ' text-negative-2 dark:text-dark-negative-2';
      break;
    case 'dark':
      headingClasses += ' text-dark dark:text-dark-dark';
      break;
    case 'dark-1':
      headingClasses += ' text-dark-1 dark:text-dark-dark-1';
      break;
    case 'dark-2':
      headingClasses += ' text-dark-2 dark:text-dark-dark-2';
      break;
    case 'light':
      headingClasses += ' text-light dark:text-dark-light';
      break;
    case 'light-1':
      headingClasses += ' text-light-1 dark:text-dark-light-1';
      break;
    case 'light-2':
      headingClasses += ' text-light-2 dark:text-dark-light-2';
      break;
  }

  props.className = props.className
    ? headingClasses + ' ' + props.className
    : headingClasses;

  return React.createElement(level, { ...props }, children);
}
