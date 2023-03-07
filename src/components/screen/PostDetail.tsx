import {Text} from 'react-native';
import React from 'react';
import Screen from '../layout/Screen';

const PostDetail = ({navigation}: {navigation: any}) => {
  return (
    <Screen title={'Detail'} navigation={navigation} isBack={true}>
      <Text>PostDetail</Text>
    </Screen>
  );
};

export default PostDetail;
