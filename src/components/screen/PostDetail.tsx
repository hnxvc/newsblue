import styled from 'styled-components/native';

import React from 'react';
import Screen from '../layout/Screen';
import Section from '../common/Section';
import {ThemeContextType} from '../../context/ThemeContext';
import {Image, View} from 'react-native';

import CardImg from '../../assets/images/Card.png';
// import ViewImg from '../../assets/images/eye.png';
import BookmarkImg from '../../assets/images/bookmark.png';
import {usePostById} from '../../context/hooks';
// import BookmarkImgEd from '../../assets/images/bookmarked.png';

const Title = styled.Text`
  font-weight: 700;
  font-size: 16px;
  font-family: 'Poppins';
  margin-bottom: 10px;
  color: ${({theme}: {theme: ThemeContextType}) => theme.neutural[500]};
`;

const Meta = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Date = styled.Text`
  color: ${({theme}: {theme: ThemeContextType}) => theme.neutural[300]};
  font-family: 'Poppins';
  font-size: 10px;
`;

const Cate = styled.Text`
  background-color: ${({theme}: {theme: ThemeContextType}) =>
    theme.primary.focus};
  color: ${({theme}: {theme: ThemeContextType}) => theme.primary.main};
  font-family: 'Poppins';
  font-size: 10px;
  margin-left: 10px;
`;

const Thumbnail = styled.Image`
  width: 100%;
  height: 175px;
  border-radius: 12px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Body = styled.View``;
const Text = styled.Text`
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 14px;
  color: ${({theme}: {theme: ThemeContextType}) => theme.neutural[500]};
`;

const Bottom = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const PostDetail = ({route, navigation}: {route: any; navigation: any}) => {
  const postId = route.params?.postId;
  const post = usePostById(postId);
  return (
    <Screen title={'Detail'} navigation={navigation} isBack={true}>
      <Section>
        <Title>{post?.title}</Title>
        <Meta>
          <Left>
            <Date>{post?.date}</Date>
            <Cate>UI/UX</Cate>
          </Left>
          <Image source={BookmarkImg} style={{width: 15, height: 15}} />
        </Meta>
        <Thumbnail source={CardImg} />
        <Body>
          <Text>{post?.content}</Text>
        </Body>
        <Bottom>{/* <Image source={ViewImg} /> */}</Bottom>
      </Section>
    </Screen>
  );
};

export default PostDetail;
