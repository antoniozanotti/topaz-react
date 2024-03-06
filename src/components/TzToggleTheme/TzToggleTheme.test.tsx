import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TzToggleTheme } from './TzToggleTheme';

describe('TzToggleTheme Component', () => {
  it('should render in light theme', () => {
    const doc = document.documentElement;
    render(<TzToggleTheme initialTheme=''/>);

    const toggleTheme = screen.getByRole("button");

    expect(toggleTheme).toBeInTheDocument();
    expect(doc).not.toHaveClass("dark");

    fireEvent.click(toggleTheme);
    expect(doc).toHaveClass("dark");
  });

  it('should render in dark theme', () => {
    const doc = document.documentElement;
    doc.classList.add('dark');
    render(<TzToggleTheme initialTheme="dark" />);

    const toggleTheme = screen.getByRole("button");

    expect(toggleTheme).toBeInTheDocument();
    expect(doc).toHaveClass("dark");

    fireEvent.click(toggleTheme);
    expect(doc).not.toHaveClass("dark");
  });
});
