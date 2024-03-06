import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TzTextarea } from './TzTextarea';

describe('TzTextarea Component', () => {
  it('should render correctly', () => {
    const { container } = render(<TzTextarea name="textareaName" />);

    const textarea = container.querySelector("textarea[name='textareaName']");

    expect(textarea).toBeInTheDocument();
  });
});
