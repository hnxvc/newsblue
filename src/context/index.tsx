import React from 'react';
import ThemeProvider from './ThemeContext';
import DataProvider from './DataContext';

const Index = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeProvider>
      <DataProvider>{children}</DataProvider>
    </ThemeProvider>
  );
};

export default Index;
