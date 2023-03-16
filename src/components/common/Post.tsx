import React from 'react';
import styled from 'styled-components/native';
import {ThemeContextType} from '../../context/ThemeContext';
import {PostType} from '../../types';

const Wrap = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 25px;
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
  color: ${({theme}: {theme: ThemeContextType}) => theme.primary.main};
  font-family: 'Poppins';
  font-size: 14px;
  margin-top: -6px;
  margin-bottom: 5px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 14px;
  font-family: 'Poppins';
  flex: 1;
  flex-wrap: wrap;
  color: ${({theme}: {theme: ThemeContextType}) => theme.neutural[500]};
`;

const Date = styled.Text`
  color: ${({theme}: {theme: ThemeContextType}) => theme.neutural[300]};
  font-family: 'Poppins';
  font-size: 10px;
`;

type Props = {
  post: PostType;
  isRight?: boolean;
  onPress: () => void;
};
const Post = ({post, isRight, onPress}: Props) => {
  return (
    <Wrap onPress={onPress}>
      {!isRight && <Image source={{uri: post?.image}} />}
      <PostDetail isRight={isRight}>
        <Top>
          {post?.category && <Cate>{post?.category}</Cate>}
          <Title>{post?.title}</Title>
        </Top>
        <Date>{post?.date}</Date>
      </PostDetail>
      {isRight && <Image source={{uri: post?.image}} />}
    </Wrap>
  );
};

export default Post;
