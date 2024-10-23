import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TzTag } from '../TzTag';

const basicTestSpan = (container: HTMLElement) => {
  const span = container.querySelector("span");
  expect(span).toBeInTheDocument();
};

const basicTestLabel = (span: HTMLElement, text: string) => {
  expect(span).toHaveTextContent(text);
};

describe('TzTag Component', () => {
  it('should render span', () => {
    const { container } = render(<TzTag label="Label" />);
    
    basicTestSpan(container);
    basicTestLabel(container, "Label");
    expect(container).toMatchSnapshot();
  });

  it('should render disable state', () => {
    const { container } = render(<TzTag label="Locked" disabled={true} />);
    
    basicTestSpan(container);
    basicTestLabel(container, "Locked");
    expect(container).toMatchSnapshot();
  });
});
