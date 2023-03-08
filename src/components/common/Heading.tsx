// @ts-ignore
import styled from 'styled-components/native';
import {ThemeContextType} from '../context/ThemeContext';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const Wrap = styled.View`
  flex: 1;
  padding-bottom: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 16px;
  font-family: 'Poppins';
  color: ${({theme}: {theme: ThemeContextType}) => theme.neutural[500]};
`;

const Link = styled.Text`
  color: ${({theme}: {theme: ThemeContextType}) => theme.primary.main};
  font-size: 12px;
  font-family: 'Poppins';
`;
type Props = {
  title: string;
  onPress?: () => void;
};
const Heading = ({title, onPress}: Props) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      {onPress && (
        <TouchableOpacity onPress={onPress}>
          <Link>See all</Link>
        </TouchableOpacity>
      )}
    </Wrap>
  );
};

export default Heading;
