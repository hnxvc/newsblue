import {useEffect, useState, useContext} from 'react';
import {getBookmarkPosts} from '../utils/storage';
import {DataContext} from '../context/DataContext';

export const useBookmarkPostIds = () => {
  const [posts, setPosts] = useState<number[]>();

  useEffect(() => {
    getBookmarkPosts().then(data => setPosts(data));
  }, []);

  return posts;
};

export const useBookmarkPosts = () => {
  const {bookmarkPosts} = useContext(DataContext);
  return bookmarkPosts();
};

export const useIsBookmark = (postId: number): boolean => {
  const {isBookmark} = useContext(DataContext);
  return isBookmark ? isBookmark(postId) : false;
};
