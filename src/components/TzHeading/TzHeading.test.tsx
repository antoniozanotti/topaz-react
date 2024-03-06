import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  TzHeading,
  TzHeadingLevel,
  TzHeadingSize,
  TzHeadingVariant,
} from './TzHeading';

const basicTestHeading = (
  levelString: TzHeadingLevel,
  level: number,
  size: TzHeadingSize,
  variant: TzHeadingVariant
) => {
  render(
    <TzHeading level={levelString} size={size} variant={variant}>
      Heading
    </TzHeading>
  );

  const heading = screen.getByRole('heading', { level: level });
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent('Heading');

  return heading;
};

describe('TzHeading Component', () => {
  it('should render h1, x_large, accent', () => {
    basicTestHeading('h1', 1, 'x_large', 'accent');
  });

  it('should render h2, large, accent-1', () => {
    basicTestHeading('h2', 2, 'large', 'accent-1');
  });

  it('should render h3, medium, accent-2', () => {
    basicTestHeading('h3', 3, 'medium', 'accent-2');
  });

  it('should render h4, small, secondary', () => {
    basicTestHeading('h4', 4, 'small', 'secondary');
  });
});
