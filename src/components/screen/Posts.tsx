import {Text} from 'react-native';
import React from 'react';
import Screen from '../layout/Screen';
import Section from '../common/Section';
import Post from '../common/Post';
import {
  usePostsByCateId,
  useRecommendPosts,
  useTrendingPosts,
} from '../../context/hooks';
import {PostType} from '../../types/index';

type Props = {
  navigation: any;
  route: any;
};
const Posts = ({route, navigation}: Props) => {
  const title = route.params?.title;
  const cateId = route.params?.cateId;
  const postsCate = usePostsByCateId(cateId);

  const recommended = route.params?.recommended;
  const recommendedPosts = useRecommendPosts();

  // const trending = route.params?.trending;
  const trendingPosts = useTrendingPosts();

  let data: PostType[] = [];
  if (cateId) {
    data = postsCate;
  } else if (recommended) {
    data = recommendedPosts;
  } else {
    data = trendingPosts;
  }

  const onPress = (postId: number) => {
    navigation.navigate('PostDetail', {
      postId,
    });
  };
  return (
    <Screen title={title || 'Posts'} isBack={true} navigation={navigation}>
      <Section mt={'25px'}>
        {data.length > 0 &&
          data.map(item => {
            return (
              <Post
                onPress={() => onPress(item.id)}
                cate={item.category}
                title={item.title}
                date={item.date}
                key={item.id}
              />
            );
          })}
      </Section>
    </Screen>
  );
};

export default Posts;
