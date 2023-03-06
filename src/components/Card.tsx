// @ts-ignore
import styled from 'styled-components/native';
import React from 'react';
import {ThemeContextType} from '../context/ThemeContext';
import LinearGradient from 'react-native-linear-gradient';
import CartImg from '../assets/images/Card.png';

const Wrap = styled.View`
  border-radius: 12;
  overflow: hidden;
`;
const Image = styled.ImageBackground`
  height: 182;
`;

const Bg = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

const WrapText = styled(LinearGradient)`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 20px;
  padding-right: 20px;
  position: absolute;
  bottom: 20px;
  background: rgba(255, 255, 255, 0.5);
  /* backdrop-filter: blur(12px); */
  border-radius: 8px;
  left: 20px;
  right: 20px;
`;

const Title = styled.Text`
  color: ${({theme}: {theme: ThemeContextType}) => theme.neutural.white};
  font-family: 'Poppins';
  font-weight: 600;
`;

const Date = styled.Text`
  color: ${({theme}: {theme: ThemeContextType}) => theme.neutural.white};
  font-size: 10px;
  font-weight: 400;
  font-family: 'Poppins';
  margin-top: 10px;
`;

const Card = () => {
  return (
    <Wrap>
      <Image source={CartImg}>
        <Bg />
        <WrapText
          colors={[
            'rgba(221, 221, 221, 0.48) 0%',
            'rgba(255, 255, 255, 0) 111.69%)',
          ]}
          start={{x: 270, y: 0}}>
          <Title>7 steps to become a UI/UX designer</Title>
          <Date>Dec 28 2021</Date>
        </WrapText>
      </Image>
    </Wrap>
  );
};
export default Card;
