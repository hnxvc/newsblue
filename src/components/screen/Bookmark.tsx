import React, {useState, useContext} from 'react';
import Screen from '../layout/Screen';
import Section from '../common/Section';
import Post from '../common/Post';
import SearchInput from '../common/SearchInput';
import {DataContext} from '../../context/DataContext';

const Bookmark = ({navigation}: {navigation: any}) => {
  const {bookmarkPosts} = useContext(DataContext);

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
        {bookmarkPosts &&
          bookmarkPosts.length > 0 &&
          bookmarkPosts.map(post => {
            return (
              <Post
                onPress={() => onPress(post.id)}
                post={post}
                key={post.id}
              />
            );
          })}
      </Section>
    </Screen>
  );
};

export default Bookmark;
