import {useContext} from 'react';
import {ThemeContext} from './ThemeContext';
import {ThemeContextType} from './ThemeContext';

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};
