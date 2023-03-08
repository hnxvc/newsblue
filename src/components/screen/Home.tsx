import React from 'react';
import Screen from '../layout/Screen';
import PopularPost from '../PopularPost';
import RecommendPost from '../RecommendPost';
import TrendingPost from '../TrendingPost';
import Category from '../Category';

import {
  useCategories,
  usePopularPosts,
  useRecommendPosts,
  useTrendingPosts,
} from '../../context/hooks';

const Home = ({navigation}: {navigation: any}) => {
  const categories = useCategories();
  const popularPosts = usePopularPosts();
  const recommendPost = useRecommendPosts();
  const trendingPost = useTrendingPosts();

  return (
    <Screen>
      <PopularPost navigation={navigation} posts={popularPosts} />
      <RecommendPost navigation={navigation} posts={recommendPost} />
      <TrendingPost navigation={navigation} posts={trendingPost} />
      <Category navigation={navigation} categories={categories} />
    </Screen>
  );
};

export default Home;
