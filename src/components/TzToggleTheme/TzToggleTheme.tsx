'use client';
import React from 'react';
import { TzIcon } from '../TzIcon/TzIcon';

export interface TzToggleThemeProps extends React.ComponentProps<'button'> {
  className?: string;
}

export function TzToggleTheme({
  className = '',
  ...props
}: TzToggleThemeProps) {
  let buttonBackground = 'bg-secondary dark:bg-dark-secondary';
  let buttonSize = 'w-[104px] h-[38px] lg:w-[132px] lg:h-[48px]';
  let buttonOther = 'rounded-full cursor-pointer relative flex justify-around';

  let spanAnimation = 'transform duration-300';
  let spanBackground = 'bg-secondary-2 dark:bg-dark-secondary-2';
  let spanOther = 'block rounded-full absolute';
  let spanSize = 'w-[60px] h-[32px] lg:w-[77px] lg:h-[42px]';
  let spanPosition = 'self-center left-[40px] dark:left-[3px] lg:left-[52px]';

  return (
    <button
      className={`${buttonBackground} ${buttonSize} ${buttonOther} ${className}`}
      {...props}
      role="presentation"
    >
      <span
        className={`${spanAnimation} ${spanBackground} ${spanOther} ${spanSize} ${spanPosition}`}
      />
      <TzIcon
        iconName="MoonIcon"
        variant="primary"
        className="place-self-center"
      />
      <TzIcon
        iconName="SunIcon"
        variant="primary"
        className="place-self-center"
      />
    </button>
  );
}
