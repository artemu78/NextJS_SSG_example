import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderHelp from './HeaderHelp';

describe('<HeaderHelp />', () => {
  test('it should mount', () => {
    render(<HeaderHelp />);
    
    const headerHelp = screen.getByTestId('HeaderHelp');

    expect(headerHelp).toBeInTheDocument();
  });
});