import React from 'react';
import Screen from '../layout/Screen';
import PopularPost from '../PopularPost';
import RecommendPost from '../RecommendPost';
import TrendingPost from '../TrendingPost';
import Category from '../Category';

import {useCategories} from '../../context/hooks';

const Home = ({navigation}: {navigation: any}) => {
  const categories = useCategories();

  return (
    <Screen>
      <PopularPost navigation={navigation} />
      <RecommendPost navigation={navigation} />
      <TrendingPost navigation={navigation} />
      <Category navigation={navigation} categories={categories} />
    </Screen>
  );
};

export default Home;
