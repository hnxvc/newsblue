import Section from './common/Section';
import Heading from './common/Heading';
import React from 'react';
import Post from './common/Post';
import {PostType} from '../types';

type Props = {
  navigation: any;
  posts: PostType[];
};
const TrendingPost = ({navigation, posts}: Props) => {
  const onPress = (postId: number) => {
    navigation.navigate('PostDetail', {
      postId,
    });
  };
  return (
    <Section mt={'25px'}>
      <Heading
        title="Trending post"
        onPress={() =>
          navigation.navigate('Posts', {
            title: 'Trending posts',
            trending: true,
          })
        }
      />
      {posts.map(post => {
        return (
          <Post
            onPress={() => onPress(post.id)}
            post={post}
            key={post.id}
            isRight={true}
          />
        );
      })}
    </Section>
  );
};

export default TrendingPost;
