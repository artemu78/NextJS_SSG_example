import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderMenu from './HeaderMenu';

describe('<HeaderMenu />', () => {
  test('it should mount', () => {
    render(<HeaderMenu />);
    
    const headerMenu = screen.getByTestId('HeaderMenu');

    expect(headerMenu).toBeInTheDocument();
  });
});