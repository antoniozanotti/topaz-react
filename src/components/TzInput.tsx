import React from 'react';

export interface TzInputProps {
  type?: 'text' | 'email';
  className?: string;
}

export const TzInput = ({ type = 'text', className = '' }: TzInputProps) => {
  /* input classes */
  let inputOtherClasses =
    'rounded text-primary dark:text-dark-primary bg-secondary dark:bg-dark-secondary';

  // size
  let sizeClasses =
    'h-[28px] sm:h-[38px] lg:h-[48px] px-[10px] sm:px-[14px] lg:px-[20px]';
  return (
    <input
      type={type}
      className={`${inputOtherClasses} ${sizeClasses} ${className}`}
    />
  );
};
