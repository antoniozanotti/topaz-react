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

  let spanClasses =
    'transform duration-300 bg-secondary-2 dark:bg-dark-secondary-2 block rounded-full absolute w-11 h-6 mt-1';
  if (theme == 'dark') {
    spanClasses += ' left-12 lg:left-8';
  } else {
    spanClasses += ' left-1';
  }

  return (
    <button
      className="bg-secondary-1 dark:bg-dark-secondary-1 rounded-full grid grid-cols-2 gap-4 w-24 h-8 lg:w-20 lg:h-8 cursor-pointer px-2 relative"
      onClick={handleClick}
    >
      <span className={spanClasses} />
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
