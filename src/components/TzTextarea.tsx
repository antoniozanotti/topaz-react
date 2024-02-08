import React from 'react';

export interface TzTextareaProps {
  rows?: number;
  className?: string;
}

export const TzTextarea = ({ rows = 7, className = '' }: TzTextareaProps) => {
  /* input classes */
  let inputOtherClasses =
    'rounded text-primary dark:text-dark-primary bg-secondary dark:bg-dark-secondary';

  // size
  let sizeClasses =
    'h-[177px] px-[10px] sm:px-[14px] lg:px-[20px] py-[7px] sm:py-[10px] lg:py-[12px]';

  return (
    <textarea
      rows={rows}
      className={`${inputOtherClasses} ${sizeClasses} ${className}`}
    ></textarea>
  );
};
