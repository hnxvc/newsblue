import {Text} from 'react-native';
import React from 'react';
import Screen from '../layout/Screen';

const Home = () => {
  return (
    <Screen>
      <Text
        style={{
          fontFamily: 'Poppins',
          backgroundColor: '#ccc',
        }}>
        Home
      </Text>
    </Screen>
  );
};

export default Home;
