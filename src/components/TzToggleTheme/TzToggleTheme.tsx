'use client';
import React from 'react';
import { TzToggleThemeInterface } from './TzToggleThemeInterface';
import { TzIcon } from '../TzIcon/TzIcon';

export function TzToggleTheme({
  className = '',
  ...props
}: TzToggleThemeInterface) {
  const buttonBase = 'rounded-full cursor-pointer relative flex justify-around';
  const buttonBackground = 'bg-secondary dark:bg-dark-secondary';
  const buttonSize = 'w-[104px] h-[38px] lg:w-[132px] lg:h-[48px]';

  const spanBase = 'block rounded-full absolute';
  const spanAnimation = 'transform duration-300';
  const spanBackground = 'bg-secondary-2 dark:bg-dark-secondary-2';
  const spanSize = 'w-[60px] h-[32px] lg:w-[77px] lg:h-[42px]';
  const spanPosition = 'self-center left-[40px] dark:left-[3px] lg:left-[52px]';

  return (
    <button
      className={`${buttonBase} ${buttonBackground} ${buttonSize} ${className}`}
      {...props}
      aria-label="Toggle Theme"
    >
      <span
        className={`${spanBase} ${spanAnimation} ${spanBackground} ${spanSize} ${spanPosition}`}
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
