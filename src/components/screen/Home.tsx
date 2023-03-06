import React from 'react';
import Screen from '../layout/Screen';
import Heading from '../Heading';
import Cart from '../Card';
import Section from '../Section';

const Home = () => {
  return (
    <Screen>
      <Section>
        <Heading />
        <Cart />
      </Section>
    </Screen>
  );
};

export default Home;
