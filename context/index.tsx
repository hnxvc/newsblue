import React from 'react';
import ThemeProvider from './ThemeContext';

const Index = ({children}: {children: React.ReactNode}) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Index;
