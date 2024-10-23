import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TzIcon } from '../TzIcon';
import * as heroIcons from '@heroicons/react/24/outline';
import { VariantEnum } from '../VariantEnum';

const basicTestIcon = (
  iconName: keyof typeof heroIcons,
  variant: keyof typeof VariantEnum
) => {
  const { container } = render(<TzIcon iconName={iconName} variant={variant} />);

  const icon = screen.getByTitle(iconName);
  expect(icon).toBeInstanceOf(SVGElement);
  expect(icon).toBeInTheDocument();
  expect(container).toMatchSnapshot();
  
  return icon;
};

describe('TzIcon Component', () => {
  it('should render ArrowRightIcon, light', () => {
    basicTestIcon("ArrowRightIcon", "light");
  });

  it('should render MoonIcon, primary', () => {
    basicTestIcon("MoonIcon", "primary");
  });

  it('should render SunIcon, secondary', () => {
    basicTestIcon("SunIcon", "secondary");
  });

  it('should render HeartIcon, negative', () => {
    basicTestIcon("HeartIcon", "negative");
  });
});
