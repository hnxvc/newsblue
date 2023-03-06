import React, {createContext} from 'react';

type Obj = {
  main: string;
  surface: string;
  focus: string;
};

type Numbers = {
  500: string;
  400: string;
  300: string;
  200: string;
  100: string;
  white: string;
  whitegrey: string;
};

export type ThemeContextType = {
  primary: Obj;
  secondary: Obj;
  neutural: Numbers;
  success: Obj;
  warn: Obj;
  other: string;
};

const defaultValue: ThemeContextType = {
  primary: {
    main: '#0167FF',
    surface: '#D1E4F6',
    focus: '#EBF3FF',
  },
  secondary: {
    main: '#77E3FF',
    surface: '#D2F6FF',
    focus: '#E4F9FF',
  },
  neutural: {
    500: '#001533',
    400: '#002255',
    300: '#7A7A7A',
    200: '#FFFFF',
    100: '#EAEAEA',
    white: '#FFFFFF',
    whitegrey: '#F2F2F2',
  },
  success: {
    main: '#00CC96',
    surface: '#FEC0C0',
    focus: '#FED9D9',
  },
  warn: {
    main: '#FB4141',
    surface: '#FEC0C0',
    focus: '#FED9D9',
  },
  other: '#0145AA',
};

export const ThemeContext = createContext<ThemeContextType>(defaultValue);

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
