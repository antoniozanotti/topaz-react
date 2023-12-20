import React from 'react';

export interface TzPictureProps {
  files: Record<'' | 'sm' | 'md' | 'lg' | 'xl', string>
  alt: string
  className?: string;
}

export const TzPicture = ({
  
}: TzPictureProps) => {
  return (
    <span>TzPicture</span>
  );
};
