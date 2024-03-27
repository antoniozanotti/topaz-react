import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TzToggleTheme } from './TzToggleTheme';

describe('TzToggleTheme Component', () => {
  it('should render correctly', () => {
    render(<TzToggleTheme />);

    const toggleTheme = screen.getByRole("button");

    expect(toggleTheme).toBeInTheDocument();
  });
});
