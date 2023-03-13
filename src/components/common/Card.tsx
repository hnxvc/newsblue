// @ts-ignore
import styled from 'styled-components/native';
import React from 'react';
import {ThemeContextType} from '../../context/ThemeContext';
import LinearGradient from 'react-native-linear-gradient';
import CartImg from '../../assets/images/Card.png';

const Wrap = styled.TouchableHighlight`
  border-radius: 12px;
  overflow: hidden;
`;

const Image = styled.ImageBackground`
  height: ${({height}: {height: string}) => (height ? height : '182px')};
`;

const Bg = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

const WrapText = styled(LinearGradient)`
  padding-top: ${({isCate}: {isCate: boolean}) => (isCate ? '10px' : '16px')};
  padding-bottom: ${({isCate}: {isCate: boolean}) =>
    isCate ? '10px' : '16px'};
  padding-left: ${({isCate}: {isCate: boolean}) => (isCate ? '10px' : '20px')};
  padding-right: ${({isCate}: {isCate: boolean}) => (isCate ? '10px' : '20px')};
  position: absolute;
  bottom: ${({isCate}: {isCate: boolean}) => (isCate ? '20px' : '30px')};
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  left: ${({isCate}: {isCate: boolean}) => (isCate ? '10px' : '20px')};
  right: ${({isCate}: {isCate: boolean}) => (isCate ? '10px' : '20px')};
  top: ${({isCate}: {isCate: boolean}) => (isCate ? '10px' : '20px')};
  bottom: ${({isCate}: {isCate: boolean}) => (isCate ? '10px' : '20px')};
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

type Props = {
  title: string;
  date?: string;
  isCate?: boolean;
  height?: string;
  image?: string;
  onPress?: () => void;
};

const Card = ({title, date, image, isCate, onPress, height}: Props) => {
  const source = image ? {uri: image} : CartImg;
  return (
    <Wrap onPress={onPress}>
      <Image source={source} height={height}>
        <Bg />
        <WrapText
          isCate={isCate}
          colors={[
            'rgba(221, 221, 221, 0.48) 0%',
            'rgba(255, 255, 255, 0) 111.69%)',
          ]}
          start={{x: 270, y: 0}}>
          <Title>{title}</Title>
          {date && <Date>{date}</Date>}
        </WrapText>
      </Image>
    </Wrap>
  );
};
export default Card;
