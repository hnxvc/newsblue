import {Text} from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';
import {ThemeContextType} from '../context/ThemeContext';

const Wrap = styled.View`
  background-color: ${({theme}: {theme: ThemeContextType}) =>
    theme.success.surface};
`;

const Heading = () => {
  return (
    <Wrap>
      <Text>Popular Topics </Text>
    </Wrap>
  );
};

export default Heading;
