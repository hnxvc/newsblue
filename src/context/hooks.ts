import {useContext} from 'react';
import {ThemeContext} from './ThemeContext';
// FIXME: move to type
import {ThemeContextType} from './ThemeContext';
import {DataContext} from './DataContext';

import {PostType, CategoryType} from '../types/index';

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};

export const useCategories = (): CategoryType[] => {
  return useContext(DataContext).categories;
};

export const usePosts = (): PostType[] => {
  return useContext(DataContext).posts;
};
