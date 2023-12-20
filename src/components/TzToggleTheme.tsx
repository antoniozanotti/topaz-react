'use client';
import React, { useState } from 'react';
import { TzIcon } from './TzIcon';

export interface TzToggleThemeProps {}

export const TzToggleTheme = ({}: TzToggleThemeProps) => {
  const [theme, setTheme] = useState('dark');
  const handleClick = () => {
    if (theme == 'dark') {
      document.documentElement.classList.remove('dark');
      setTheme('');
    } else {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  };

  let buttonBackground = 'bg-secondary dark:bg-dark-secondary';
  let buttonSize = 'w-[74px] h-[28px] sm:w-[104px] sm:h-[38px] lg:w-[132px] lg:h-[48px]';
  let buttonOther = 'rounded-full cursor-pointer relative flex justify-around';

  let spanAnimation = 'transform duration-300'
  let spanBackground = 'bg-secondary-2 dark:bg-dark-secondary-2';
  let spanOther = 'block rounded-full absolute';
  let spanSize = 'w-[38px] h-[22px] sm:w-[60px] sm:h-[32px] lg:w-[77px] lg:h-[42px]';
  let spanPosition = 'self-center left-[32px] dark:left-[3px] sm:left-[40px] lg:left-[52px]';

  

  return (
    <button
      className={`${buttonBackground} ${buttonSize} ${buttonOther}`}
      onClick={handleClick}
    >
      <span className={`${spanAnimation} ${spanBackground} ${spanOther} ${spanSize} ${spanPosition}`} />
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
};
