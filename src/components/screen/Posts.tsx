import {Text} from 'react-native';
import React from 'react';
import Screen from '../layout/Screen';
import Section from '../common/Section';
import Post from '../common/Post';

type Props = {
  navigation: any;
};
const Posts = ({navigation}: Props) => {
  const onPress = () => {
    navigation.navigate('PostDetail');
  };
  return (
    <Screen title={'Posts'} isBack={true} navigation={navigation}>
      <Section mt={'25px'}>
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

export default Posts;
