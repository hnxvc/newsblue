import styled from 'styled-components/native';
import {ThemeContextType} from '../../context/ThemeContext';
import React from 'react';
import {Image} from 'react-native';
import BackIcon from '../../assets/images/back.png';

const Wrap = styled.View`
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Back = styled.TouchableOpacity`
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
`;

const Text = styled.Text`
  color: ${({theme}: {theme: ThemeContextType}) => theme.neutural[500]};
  font-size: 16px;
  font-weight: 600;
  font-family: 'Poppins';
  width: 100%;
  text-align: ${({isBack}: {isBack: boolean}) => (isBack ? 'center' : 'left')};
  margin-left: ${({isBack}: {isBack: boolean}) => (isBack ? '-30px' : '0px')};
  z-index: -1;
`;

type Props = {
  title: string;
  isBack?: boolean;
  navigation?: any;
};

const Header = ({title, isBack, navigation}: Props) => {
  if (!title) return null;
  return (
    <Wrap>
      {isBack && (
        <Back onPress={() => navigation?.goBack()}>
          <Image source={BackIcon} />
        </Back>
      )}
      <Text isBack={isBack}>{title}</Text>
    </Wrap>
  );
};

export default Header;
