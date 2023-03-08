import React, {createContext} from 'react';
import posts from '../config/posts.json';
import categories from '../config/category.json';
import {CategoryType, PostType} from '../types';

type Data = {
  categories: CategoryType[];
  posts: PostType[];
};

export const DataContext = createContext<Data>({
  categories: [],
  posts: [],
});

type Props = {
  children: React.ReactNode;
};

const DataProvider = ({children}: Props) => {
  return (
    <DataContext.Provider
      value={{
        categories: categories,
        posts: posts,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
