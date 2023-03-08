import {Text} from 'react-native';
import React from 'react';
import Screen from '../layout/Screen';
import Section from '../common/Section';
import Post from '../common/Post';

const Bookmark = ({navigation}: {navigation: any}) => {
  const onPress = () => {
    navigation.navigate('PostDetail');
  };
  return (
    <Screen title={'Bookmark'}>
      <Section>
        {[1, 2, 3, 3, 3, 3, 3, 3, 3, 3].map((item, index) => {
          return (
            <Post
              onPress={onPress}
              cate={'UI/UX'}
              title={'57 Key Lessons for UI & UX Designers'}
              date={'Dec 21 2021'}
              key={item}
            />
          );
        })}
      </Section>
    </Screen>
  );
};

export default Bookmark;
