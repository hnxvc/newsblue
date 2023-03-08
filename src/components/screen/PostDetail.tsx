import styled from 'styled-components/native';

import React from 'react';
import Screen from '../layout/Screen';
import Section from '../common/Section';
import {ThemeContextType} from '../../context/ThemeContext';
import {Image, View} from 'react-native';

import CardImg from '../../assets/images/Card.png';
// import ViewImg from '../../assets/images/eye.png';
import BookmarkImg from '../../assets/images/bookmark.png';
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

const PostDetail = ({navigation}: {navigation: any}) => {
  return (
    <Screen title={'Detail'} navigation={navigation} isBack={true}>
      <Section>
        <Title>57 Key Lessons for UI & UX Designers</Title>
        <Meta>
          <Left>
            <Date>Dec 21 2021</Date>
            <Cate>UI/UX</Cate>
          </Left>
          <Image source={BookmarkImg} style={{width: 15, height: 15}} />
        </Meta>
        <Thumbnail source={CardImg} />
        <Body>
          <Text>
            This is a mega-list of the most critical knowledge for UI, UX,
            interaction, or product designers at any level.
          </Text>
          <Text>
            Many of these lessons are also applicable to project managers,
            engineers, strategists, QA, researchers, and others involved in
            product development.
          </Text>
          <Text>
            This is a curated collection of the foundational principles that
            I’ve shared on my Medium blog over the past year. I’ve covered
            topics like skill development, rules & principles, creativity,
            career tips, and everything in between.
          </Text>
          <Text>
            This is a mega-list of the most critical knowledge for UI, UX,
            interaction, or product designers at any level.
          </Text>
          <Text>
            Many of these lessons are also applicable to project managers,
            engineers, strategists, QA, researchers, and others involved in
            product development.
          </Text>
          <Text>
            This is a curated collection of the foundational principles that
            I’ve shared on my Medium blog over the past year. I’ve covered
            topics like skill development, rules & principles, creativity,
            career tips, and everything in between.
          </Text>
        </Body>
        <Bottom>{/* <Image source={ViewImg} /> */}</Bottom>
      </Section>
    </Screen>
  );
};

export default PostDetail;
