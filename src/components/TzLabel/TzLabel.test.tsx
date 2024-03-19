import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TzLabel } from './TzLabel';

const basicTestSpan = (container: HTMLElement) => {
  const span = container.querySelector("span");
  expect(span).toBeInTheDocument();
};

const basicTestLabel = (span: HTMLElement, text: string) => {
  expect(span).toHaveTextContent(text);
};

describe('TzLabel Component', () => {
  it('should render span', () => {
    const { container } = render(<TzLabel label="Label" />);
    
    basicTestSpan(container);
    basicTestLabel(container, "Label");
  });

  it('should render disable state', () => {
    const { container } = render(<TzLabel label="Locked" disabled={true} />);
    
    basicTestSpan(container);
    basicTestLabel(container, "Locked");
  });
});
