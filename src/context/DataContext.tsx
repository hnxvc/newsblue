import React, {createContext, useEffect, useState} from 'react';
import POSTS from '../config/posts.json';
import CATEGORIES from '../config/category.json';
import {CategoryType, PostType} from '../types';
import {
  addBookmarkPost as storageAddBookmarkPost,
  getBookmarkPosts as storageGetBookmarkPosts,
  removeBookmarkPost as storageRemoveBookmarkPost,
} from '../utils/storage';

type Data = {
  categories: CategoryType[];
  posts: PostType[];
  bookmarkPostIds: number[] | undefined;
  isBookmark: (postId: number) => boolean;
  bookmarkPosts: () => PostType[] | [];
  addBookmarkPost: (postId: number) => void;
  removeBookmarkPostId: (postId: number) => void;
};

export const DataContext = createContext<Data>({
  categories: [],
  posts: [],
  bookmarkPostIds: [],
  isBookmark: () => false,
  bookmarkPosts: () => [],
  addBookmarkPost: () => {},
  removeBookmarkPostId: () => {},
});

type Props = {
  children: React.ReactNode;
};

const DataProvider = ({children}: Props) => {
  const [allPost] = useState<any[]>(POSTS);

  const [bookmarkPostIds, setPostIds] = useState<number[]>();
  useEffect(() => {
    storageGetBookmarkPosts().then(data => setPostIds(data));
    console.log('==== bookmarkPostIds', bookmarkPostIds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageGetBookmarkPosts, setPostIds]);

  function addBookmarkPost(postId: number) {
    storageAddBookmarkPost(postId)
      .then(id => {
        if (id) {
          const newPostIds = bookmarkPostIds?.concat([postId]);
          setPostIds(newPostIds);
        }
      })
      .catch(err => {
        console.log('Add bookmark post error', err.message);
      });
  }

  const removeBookmarkPostId = (postId: number) => {
    storageRemoveBookmarkPost(postId)
      .then(id => {
        if (id) {
          const newPostIds = bookmarkPostIds?.concat([postId]);
          setPostIds(newPostIds);
        }
      })
      .catch(err => {
        console.log('Remove bookmark post error', err.message);
      });
  };

  const isBookmark = (postId: number): boolean => {
    return bookmarkPostIds?.find(id => Number(id) === postId) ? true : false;
  };

  const bookmarkPosts = (): PostType[] => {
    const postFilter = allPost?.filter(post => {
      if (bookmarkPostIds?.find(id => post.id === Number(id))) {
        return true;
      }
      return false;
    });
    return postFilter;
  };

  return (
    <DataContext.Provider
      value={{
        categories: CATEGORIES,
        posts: allPost,
        bookmarkPostIds: bookmarkPostIds,
        isBookmark,
        bookmarkPosts,
        addBookmarkPost,
        removeBookmarkPostId,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
