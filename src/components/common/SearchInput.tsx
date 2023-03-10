import styled from 'styled-components/native';
import React from 'react';
import {ThemeContextType} from '../../context/ThemeContext';
import ClearIcon from '../../assets/images/clear.png';
import {TouchableOpacity} from 'react-native';

const Wrap = styled.View`
  margin-bottom: 15px;
  flex-direction: row;
  border: 1px solid
    ${({theme}: {theme: ThemeContextType}) => theme.neutural[300]};
  border-radius: 12px;
  height: 46px;
`;
const Input = styled.TextInput`
  color: ${({theme}: {theme: ThemeContextType}) => theme.neutural[300]};
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  border-radius: 8px;
  font-size: 12px;
  width: 100%;
  padding-right: 50px;
`;

const Icon = styled.TouchableOpacity`
  position: absolute;
  right: -1px;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  /* background-color: ${({theme}: {theme: ThemeContextType}) =>
    theme.primary.main}; */
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image``;

const SearchInput = ({
  keyword,
  setKeyword,
}: {
  keyword: string;
  setKeyword: (value: string) => void;
}) => {
  return (
    <Wrap>
      <Input
        placeholder="Search here ..."
        onChangeText={(value: string) => setKeyword(value)}
        value={keyword}
      />
      {keyword !== '' && (
        <Icon onPress={() => setKeyword('')}>
          <Image source={ClearIcon} />
        </Icon>
      )}
    </Wrap>
  );
};
export default SearchInput;
