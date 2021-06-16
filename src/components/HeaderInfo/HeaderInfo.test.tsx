import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderInfo from './HeaderInfo';

describe('<HeaderInfo />', () => {
  test('it should mount', () => {
    render(<HeaderInfo />);
    
    const headerInfo = screen.getByTestId('HeaderInfo');

    expect(headerInfo).toBeInTheDocument();
  });
});