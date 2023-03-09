import {Text} from 'react-native';
import React, {useState} from 'react';
import Screen from '../layout/Screen';
import Section from '../common/Section';
import Post from '../common/Post';
import {useBookmarkPosts} from '../../hooks';
import SearchInput from '../common/SearchInput';

const Bookmark = ({navigation}: {navigation: any}) => {
  const posts = useBookmarkPosts();
  console.log('===== posts', posts);
  const [keyword, setKeyword] = useState<string>('');
  const onPress = (postId: number) => {
    navigation.navigate('PostDetail', {
      postId: postId,
    });
  };
  return (
    <Screen title={'Bookmark'}>
      <Section>
        <SearchInput keyword={keyword} setKeyword={setKeyword} />
      </Section>
      <Section>
        {posts.length > 0 &&
          posts.map(post => {
            return (
              <Post
                onPress={() => onPress(post.id)}
                cate={'UI/UX'}
                title={post.title}
                date={post.date}
                key={post.id}
              />
            );
          })}
      </Section>
    </Screen>
  );
};

export default Bookmark;
