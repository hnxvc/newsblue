import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'BOOKMARK';
export const addBookmarkPost = async (postId: number) => {
  try {
    let posts = await AsyncStorage.getItem(key);
    if (!posts) {
      await AsyncStorage.setItem(key, postId.toString());
      return postId;
    } else {
      let postBookmark = await AsyncStorage.getItem(key);
      const post = postBookmark?.split(',').find(id => Number(id) === postId);
      if (!post) {
        postBookmark += `,${postId}`;
        await AsyncStorage.setItem(key, postBookmark || '');
        return postId;
      }
      console.log('===== bookmark success', postId);
      return null;
    }
  } catch (e) {
    console.error('Add bookmark error');
  }
};

export const removeBookmarkPost = async (postId: number) => {
  try {
    const postBookmark = await AsyncStorage.getItem(key);
    if (postBookmark === '' || !postBookmark) return;

    const args = postBookmark.split(',');
    const filter = args.filter(id => Number(id) !== postId);
    const str = filter.join(',');
    await AsyncStorage.setItem(key, str);
    return postId;
  } catch (e) {
    console.error('Remove bookmark error');
  }
};

export const getBookmarkPosts = async () => {
  const postBookmark = await AsyncStorage.getItem(key);
  if (postBookmark) {
    return postBookmark?.split(',').map(item => Number(item)) || [];
  }
  return [];
};

export default () => {};
