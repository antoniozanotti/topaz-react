import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TzInput } from '../TzInput';

describe('TzInput Component', () => {
  it('should render correctly', () => {
    const { container } = render(<TzInput name="inputName" />);

    const input = container.querySelector("input[name='inputName']");

    expect(input).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
