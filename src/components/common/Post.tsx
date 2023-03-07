import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import PostImage from '../../assets/images/post.png';
import {ThemeContextType} from '../../context/ThemeContext';

const Wrap = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const Image = styled.Image`
  width: 91px;
  height: 91px;
  border-radius: 8px;
`;

const PostDetail = styled.View`
  padding-left: ${({isRight}: {isRight: boolean}) => (isRight ? '0' : '15px')};
  padding-right: ${({isRight}: {isRight: boolean}) => (isRight ? '15px' : '0')};
  justify-content: space-between;
  flex: 1;
`;

const Top = styled.View``;

const Cate = styled.Text`
  background-color: ${({theme}: {theme: ThemeContextType}) =>
    theme.primary.focus};
  color: ${({theme}: {theme: ThemeContextType}) => theme.primary.main};
  font-family: 'Poppins';
  font-size: 14px;
  margin-top: -6px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 14px;
  margin-top: 5px;
  font-family: 'Poppins';
  flex: 1;
  flex-wrap: wrap;
`;

const Date = styled.Text`
  color: ${({theme}: {theme: ThemeContextType}) => theme.neutural[300]};
  font-family: 'Poppins';
`;

type Props = {
  id?: number;
  cate: string;
  title: string;
  date: string;
  isRight?: boolean;
  onPress: () => void;
};
const Post = ({id, cate, title, date, isRight, onPress}: Props) => {
  return (
    <Wrap onPress={onPress}>
      {!isRight && <Image source={PostImage} />}
      <PostDetail isRight={isRight}>
        <Top>
          <Cate>{cate}</Cate>
          <Title>{title}</Title>
        </Top>
        <Date>{date}</Date>
      </PostDetail>
      {isRight && <Image source={PostImage} />}
    </Wrap>
  );
};

export default Post;
