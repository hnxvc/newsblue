import Section from './common/Section';
import Heading from './common/Heading';
import Card from './common/Card';
import Carousel from 'react-native-snap-carousel';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {PostType} from '../types';

const Pagination = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0;
`;

const Dot = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 10px;
  background-color: ${({isActive}: {isActive: boolean}) =>
    isActive ? '#fff' : '#ccc'};
  opacity: ${({isActive}: {isActive: boolean}) => (isActive ? 1 : 0.8)};
  margin: 0 4px;
`;

type RenderProps = {
  item: any;
  index: number;
  navigation: any;
};

const RenderItem = ({item, navigation}: RenderProps) => {
  const onPress = (postId: number) => {
    navigation.navigate('PostDetail', {postId});
  };

  return (
    <Card
      onPress={() => onPress(item.id)}
      title={item.title}
      date={item.date}
    />
  );
};

type Props = {
  navigation: any;
  posts: PostType[];
};

const PopularPost = ({navigation, posts}: Props) => {
  const data = posts;

  const [activeIndex, setActiveIndex] = useState<number>();

  return (
    <Section>
      <Heading title="Popular Post" />
      <Carousel
        data={data}
        renderItem={({item, index}) => (
          <RenderItem item={item} index={index} navigation={navigation} />
        )}
        sliderWidth={345}
        itemWidth={345}
        autoplay={true}
        layout={'default'}
        loop={true}
        onSnapToItem={index => setActiveIndex(index)}
        autoplayDelay={5000}
        autoplayInterval={5000}
      />
      <Pagination>
        {data.map((item, index) => {
          return <Dot isActive={activeIndex === index} />;
        })}
      </Pagination>
    </Section>
  );
};

export default PopularPost;
