import Section from './common/Section';
import Heading from './common/Heading';
import React from 'react';
import Post from './common/Post';

type Props = {
  navigation: any;
};
const TrendingPost = ({navigation}: Props) => {
  const onPress = () => {
    navigation.navigate('PostDetail');
  };
  return (
    <Section mt={'25px'}>
      <Heading
        title="Trending post"
        onPress={() => navigation.navigate('Posts')}
      />
      {[1, 2, 3].map((item, index) => {
        return (
          <Post
            onPress={onPress}
            cate={'UI/UX'}
            title={'57 Key Lessons for UI & UX Designers'}
            date={'Dec 21 2021'}
            key={item}
            isRight={true}
          />
        );
      })}
    </Section>
  );
};

export default TrendingPost;
