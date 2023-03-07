import React from 'react';
import Screen from '../layout/Screen';
import PopularPost from '../PopularPost';
import RecommendPost from '../RecommendPost';
import TrendingPost from '../TrendingPost';
import Category from '../Category';

const Home = () => {
  return (
    <Screen>
      <PopularPost />
      <RecommendPost />
      <TrendingPost />
      <Category />
    </Screen>
  );
};

export default Home;
