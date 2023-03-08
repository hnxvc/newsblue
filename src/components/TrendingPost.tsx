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
  const onPress = () => {
    navigation.navigate('PostDetail');
  };
  return (
    <Section mt={'25px'}>
      <Heading
        title="Trending post"
        onPress={() => navigation.navigate('Posts')}
      />
      {posts.map(post => {
        return (
          <Post
            onPress={onPress}
            cate={post.category}
            title={post.title}
            date={post.date}
            key={post.id}
            isRight={true}
          />
        );
      })}
    </Section>
  );
};

export default TrendingPost;
