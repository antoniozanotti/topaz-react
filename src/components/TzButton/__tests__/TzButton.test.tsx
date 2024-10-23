import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TzButton } from '../TzButton';

const basicTestButton = () => {
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  return button;
};

const basicTestLabel = (button: HTMLElement, text: string) => {
  expect(button).toHaveTextContent(text);
};

const basicTestIcon = (button: HTMLElement) => {
  const icon = button.children[0];
  expect(icon).toBeInstanceOf(SVGElement);
  return icon;
};

describe('TzButton Component', () => {
  it('should render only label', () => {
    const { container } = render(<TzButton label="Home" />);

    const button = basicTestButton();

    basicTestLabel(button, 'Home');
    expect(container).toMatchSnapshot();
  });

  it('should render only icon', () => {
    const { container } = render(<TzButton label="" iconName="HomeIcon" />);

    const button = basicTestButton();

    basicTestIcon(button);
    expect(container).toMatchSnapshot();
  });

  it('should render label and icon on the left', () => {
    const { container } = render(<TzButton label="Home" iconName="HomeIcon" />);

    const button = basicTestButton();

    basicTestLabel(button, 'Home');
    basicTestIcon(button);
    expect(container).toMatchSnapshot();
  });

  it('should render label and icon on the right', () => {
    const { container } = render(<TzButton label="Home" iconName="HomeIcon" isIconAfterLabel />);

    const button = basicTestButton();

    basicTestLabel(button, 'Home');

    const icon = basicTestIcon(button);

    expect(icon).toHaveClass('order-last');
    expect(container).toMatchSnapshot();
  });

  it('should render disable state', () => {
    const { container } = render(
      <TzButton label="Locked" iconName="LockClosedIcon" disabled={true} />
    );

    const button = basicTestButton();

    expect(button).toBeDisabled();
    basicTestLabel(button, 'Locked');
    basicTestIcon(button);
    expect(container).toMatchSnapshot();
  });

  it('should render loading state', () => {
    const { container } = render(<TzButton isLoading />);

    const button = basicTestButton();
    expect(button).toBeDisabled();

    basicTestLabel(button, 'loading');

    const icon = basicTestIcon(button);
    expect(icon).toHaveClass('animate-spin');
    expect(container).toMatchSnapshot();
  });
});
