import Section from './common/Section';
import Heading from './common/Heading';
import React from 'react';
import Post from './common/Post';
import {PostType} from '../types';

type Props = {
  navigation: any;
  posts: PostType[];
};

const RecommendPost = ({navigation, posts}: Props) => {
  const onPress = (postId: number) => {
    navigation.navigate('PostDetail', {
      postId,
    });
  };
  return (
    <Section mt={'25px'}>
      <Heading
        title="Recommend for you"
        onPress={() =>
          navigation.navigate('Posts', {
            recommended: true,
            title: 'Recommend for you',
          })
        }
      />
      {posts.length > 0 &&
        posts.map(post => {
          return (
            <Post post={post} key={post.id} onPress={() => onPress(post.id)} />
          );
        })}
    </Section>
  );
};

export default RecommendPost;
