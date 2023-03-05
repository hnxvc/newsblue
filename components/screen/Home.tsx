import {Text} from 'react-native';
import React from 'react';
import Screen from '../layout/Screen';
import Heading from '../Heading';

const Home = () => {
  return (
    <Screen>
      <Text
        style={{
          fontFamily: 'Poppins',
          backgroundColor: '#ccc',
        }}>
        Home
        <Heading />
      </Text>
    </Screen>
  );
};

export default Home;
