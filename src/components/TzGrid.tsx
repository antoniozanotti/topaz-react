import React from 'react';
import { ReactNode } from 'react';

export interface TzGridProps {
  /**
   * The level of the grid.
   */
  columns?: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /**
   * Is the grid a root wrapper?
   */
  isRootWrapper?: boolean;
  /**
   * Additional classes of the grid.
   */
  className?: string;
  /**
   * Children of the grid.
   */
  children?: ReactNode;
}

export const TzGrid = ({
  columns = 12,
  isRootWrapper = false,
  className = '',
  children,
}: TzGridProps) => {
  const columnsVariants = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
    7: 'lg:grid-cols-7',
    8: 'lg:grid-cols-8',
    9: 'lg:grid-cols-9',
    10: 'lg:grid-cols-10',
    11: 'lg:grid-cols-11',
    12: 'lg:grid-cols-12',
  }
  let gridClasses = `${className} lg:grid ${columnsVariants[columns]} gap-4 md:gap-6 xl:gap-8 `;
  if (isRootWrapper) {
    gridClasses += ' p-4 md:p-6 xl:p-8';
  }
  return (
    <>
      {isRootWrapper ? (
        <div className={gridClasses}>
          <div className="lg:col-start-2 lg:col-span-10">{children}</div>
        </div>
      ) : (
        <div className={gridClasses}>{children}</div>
      )}
    </>
  );
};
