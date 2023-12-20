import React from 'react';

export interface TzTextareaProps {
  rows?: number
  variant?: 'accent' | 'primary' | 'secondary' | 'negative' | 'dark' | 'light';
  className?: string;
}

export const TzTextarea = ({
  
}: TzTextareaProps) => {
  return (
    <span>TzTextarea</span>
  );
};
