// import AsyncStorage from '@react-native-async-storage/async-storage';

// const key = 'BOOKMARK';
// export const bookmarkPost = async (postId: number) => {
//   try {
//     let posts = (await AsyncStorage.getItem(key)) || '';

//     if (posts.length > 0) {
//       posts = JSON.parse(posts);
//       posts = posts.push(postId);
//     }

//     await AsyncStorage.setItem(key, posts);
//   } catch (e) {
//     // saving error
//   }
// };

// export const removeBookmarkPost = async (postId: number) => {
//   try {
//     await AsyncStorage.removeItem(`bookmark`);
//   } catch (e) {
//     // saving error
//   }
// };

export default () => {};
