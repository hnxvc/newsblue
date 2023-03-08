import styled from 'styled-components/native';
import React from 'react';
import {ThemeContextType} from '../../context/ThemeContext';
const Wrap = styled.View`
  margin-bottom: 15px;
`;
const Input = styled.TextInput`
  border: 1px solid
    ${({theme}: {theme: ThemeContextType}) => theme.neutural[300]};
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  border-radius: 8px;
`;

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
        placeholder="Search"
        onChangeText={(value: string) => setKeyword(value)}
        value={keyword}
      />
    </Wrap>
  );
};
export default SearchInput;
