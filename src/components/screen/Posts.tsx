import {Text} from 'react-native';
import React, {useState} from 'react';
import Screen from '../layout/Screen';
import Section from '../common/Section';
import Post from '../common/Post';
import {
  usePostsByCateId,
  useRecommendPosts,
  useTrendingPosts,
} from '../../context/hooks';
import {PostType} from '../../types/index';
import useDebounce from '../../hooks/debounce';
import SearchInput from '../common/SearchInput';

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

  const [keyword, setKeyword] = useState<string>('');
  const keyDebounce = useDebounce<string>(keyword, 300);

  const searchData = keyDebounce
    ? data.filter(post => {
        const t = post.title.toLocaleLowerCase();
        const args = t.split(' ');
        return args.indexOf(keyDebounce.toLowerCase()) > -1;
      })
    : data;

  return (
    <Screen title={title || 'Posts'} isBack={true} navigation={navigation}>
      <Section>
        <SearchInput keyword={keyword} setKeyword={setKeyword} />
      </Section>
      <Section mt={'25px'}>
        {searchData.length > 0 &&
          searchData.map(item => {
            return (
              <Post
                onPress={() => onPress(item.id)}
                post={item}
                key={item.id}
              />
            );
          })}
      </Section>
    </Screen>
  );
};

export default Posts;
