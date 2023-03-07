import React from 'react';
import Screen from '../layout/Screen';
import PopularPost from '../PopularPost';
import RecommendPost from '../RecommendPost';
import TrendingPost from '../TrendingPost';
import Category from '../Category';

const Home = ({navigation}: {navigation: any}) => {
  return (
    <Screen>
      <PopularPost navigation={navigation} />
      <RecommendPost navigation={navigation} />
      <TrendingPost navigation={navigation} />
      <Category navigation={navigation} />
    </Screen>
  );
};

export default Home;