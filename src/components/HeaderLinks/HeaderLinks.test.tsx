import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderLinks from './HeaderLinks';

describe('<HeaderLinks />', () => {
  test('it should mount', () => {
    render(<HeaderLinks />);
    
    const headerLinks = screen.getByTestId('HeaderLinks');

    expect(headerLinks).toBeInTheDocument();
  });
});