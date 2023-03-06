// @ts-ignore
import styled from 'styled-components/native';
import React from 'react';
import {ThemeContextType} from '../context/ThemeContext';
import LinearGradient from 'react-native-linear-gradient';
import CartImg from '../assets/images/Card.png';

const Wrap = styled.View`
  flex: 1;
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
  padding-top: 16;
  padding-bottom: 16;
  padding-left: 20;
  padding-right: 20;
  position: absolute;
  bottom: 20;
  background: rgba(255, 255, 255, 0.5);
  /* backdrop-filter: blur(12px); */
  border-radius: 8;
  left: 20;
  right: 20;
`;

const Title = styled.Text`
  color: ${({theme}: {theme: ThemeContextType}) => theme.neutural.white};
  font-family: 'Poppins';
  font-size: 14;
  font-weight: 600;
  margin-bottom: 7;
`;

const Date = styled.Text`
  color: ${({theme}: {theme: ThemeContextType}) => theme.neutural.white};
  font-size: 10;
  font-weight: 400;
  font-family: 'Poppins';
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
