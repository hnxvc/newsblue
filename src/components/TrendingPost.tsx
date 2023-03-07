import Section from './common/Section';
import Heading from './common/Heading';
import React from 'react';
import Post from './common/Post';

const TrendingPost = () => {
  return (
    <Section mt={'25px'}>
      <Heading title="Trending post" onClick={() => {}} />
      {[1, 2, 3].map((item, index) => {
        return (
          <Post
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
