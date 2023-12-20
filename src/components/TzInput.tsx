import React from 'react';

export interface TzInputProps {
  type?: 'text' | 'email'
  variant?: 'accent' | 'primary' | 'secondary' | 'negative' | 'dark' | 'light';
  className?: string;
}

export const TzInput = ({
  
}: TzInputProps) => {
  return (
    <span>TzInput</span>
  );
};