import React from 'react';
import { ReactNode } from 'react';

export interface TzHeadingProps {
  /**
   * The level of the heading.
   */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * The size of the heading.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the heading.
   */
  variant?:
    | 'accent'
    | 'accent-1'
    | 'accent-2'
    | 'primary'
    | 'primary-1'
    | 'primary-2'
    | 'secondary'
    | 'secondary-1'
    | 'secondary-2';
  /**
   * Children of the heading.
   */
  children?: ReactNode;
  /**
   * Additional classes of the heading.
   */
  className?: string;
}

export const TzHeading = ({
  level = 'h1',
  size = 'large',
  variant = 'accent',
  children,
  className
}: TzHeadingProps) => {
  let headingClasses = className;

  switch (size) {
    case 'large':
      headingClasses += ' text-8xl';
      break;
    case 'medium':
      headingClasses += ' text-5xl';
      break;
    default:
      headingClasses += ' text-4xl';
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
  }

  return (
    React.createElement(level, {className: headingClasses}, children)
  );
};
