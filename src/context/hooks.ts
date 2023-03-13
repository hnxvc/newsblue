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

export const useCateById = (cateId: number): CategoryType | undefined => {
  const categories = useCategories();
  return categories?.find(cate => cate.id === cateId);
};

export const usePosts = (): PostType[] => {
  return useContext(DataContext).posts;
};

export const usePostsMapCategory = (): PostType[] => {
  const posts = useContext(DataContext).posts;
  const categories = useCategories();
  return posts.map(post => {
    const cate = categories.find(c => c.id === post.categoryId);
    if (cate && cate.title) {
      post.category = cate.title;
    }
    return post;
  });
};

export const usePopularPosts = (): PostType[] => {
  const posts = usePostsMapCategory();
  return posts.filter(post => post.popular === true);
};

export const useTrendingPosts = (): PostType[] => {
  const posts = usePostsMapCategory();
  return posts.filter(post => post.trending === true);
};

export const useRecommendPosts = (): PostType[] => {
  const posts = usePostsMapCategory();
  return posts.filter(post => post.recommend === true);
};

export const usePostById = (postId: number): PostType => {
  const posts = usePostsMapCategory();
  return posts.filter(post => post.id === postId)[0];
};

export const usePostsByCateId = (cateId: number): PostType[] => {
  return useContext(DataContext).posts.filter(
    post => post.categoryId === cateId,
  );
};
