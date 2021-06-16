import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderGroups from './HeaderGroups';

describe('<HeaderGroups />', () => {
  test('it should mount', () => {
    render(<HeaderGroups />);
    
    const headerGroups = screen.getByTestId('HeaderGroups');

    expect(headerGroups).toBeInTheDocument();
  });
});