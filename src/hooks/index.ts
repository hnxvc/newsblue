import {useEffect, useState} from 'react';
import {getBookmarkPosts} from '../utils/storage';
import {usePosts} from '../context/hooks';

export const useBookmarkPostIds = () => {
  const [posts, setPosts] = useState<string[]>();

  useEffect(() => {
    getBookmarkPosts().then(data => setPosts(data));
  }, []);

  return posts;
};

export const useBookmarkPosts = () => {
  // const [posts, setPosts] = useState<string[]>();
  const postIds = useBookmarkPostIds();
  const posts = usePosts();

  const postFilter = posts?.filter(post => {
    if (postIds?.find(id => post.id === Number(id))) {
      return true;
    }
    return false;
  });

  return postFilter;
};

export const useIsBookmark = (postId: number) => {
  const postIds = useBookmarkPostIds();
  return postIds?.find(id => Number(id) === postId);
};
