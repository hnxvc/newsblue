import React from 'react';
import Screen from '../layout/Screen';
import PopularPost from '../PopularPost';
import RecommendPost from '../RecommendPost';
import TrendingPost from '../TrendingPost';
import Category from '../Category';
import Logo from '../common/Logo';

import {
  useCategories,
  usePopularPosts,
  useRecommendPosts,
  useTrendingPosts,
} from '../../context/hooks';

const Home = ({navigation}: {navigation: any}) => {
  const categories = useCategories();
  const popularPosts = usePopularPosts().slice(0, 5);
  const recommendPost = useRecommendPosts().slice(0, 3);
  const trendingPost = useTrendingPosts().slice(0, 3);

  return (
    <Screen>
      <Logo />
      <PopularPost navigation={navigation} posts={popularPosts} />
      <TrendingPost navigation={navigation} posts={trendingPost} />
      <RecommendPost navigation={navigation} posts={recommendPost} />
      <Category navigation={navigation} categories={categories} />
    </Screen>
  );
};

export default Home;
