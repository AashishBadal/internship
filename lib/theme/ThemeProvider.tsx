'use client';

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';
import { lightTheme } from './theme';

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * ThemeProvider Component
 * 
 * Provides MUI theme and CSS baseline for the application.
 * 
 * @param children - React children to be wrapped with theme
 */
export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MUIThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}