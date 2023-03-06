// @ts-ignore
import styled from 'styled-components/native';
import {ThemeContextType} from '../context/ThemeContext';
import React from 'react';

const Wrap = styled.View`
  flex: 1;
  padding-top: 10;
  padding-bottom: 10;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 16;
`;

const Link = styled.Text`
  color: ${({theme}: {theme: ThemeContextType}) => theme.primary.main};
  font-size: 12;
`;

const Heading = () => {
  return (
    <Wrap>
      <Title>Popular Topics </Title>
      <Link>See all</Link>
    </Wrap>
  );
};

export default Heading;
