import { createContext, useState, useContext } from 'react';
import { ThemeStore, ThemeContext } from 'src/contexts/theme';
import { ThemeProvider } from 'styled-components';
const themes = {
  light: {
    colors: {
      primary: 'rgb(46, 68, 78)',
      background: 'rgb(224, 224, 224)',
    },
  },

  dark: {
    colors: {
      primary: 'lightgrey',
      background: 'rgb(33, 33, 33)',
    },
  },
};
export const Theme = ({ children }: any) => {
  const { theme } = useContext(ThemeContext);
  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};
