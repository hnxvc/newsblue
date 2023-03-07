import styled from 'styled-components/native';
import Card from './common/Card';
import React from 'react';
import Section from './common/Section';
import Heading from './common/Heading';

const Wrap = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: -10px;
  margin-bottom: -10px;
`;

const Col = styled.View`
  width: 50%;
  padding: 10px;
`;

type Props = {
  navigation: any;
};
const Category = ({navigation}: Props) => {
  const onPress = () => {
    navigation?.navigate('Posts');
  };
  return (
    <Section>
      <Heading
        title="Category"
        onPress={() => {
          navigation.navigate('Category');
        }}
      />
      <Wrap>
        {[1, 2, 3, 4].map(({item, index}) => {
          return (
            <Col key={index}>
              <Card title="Ui/UX" isCate={true} onPress={onPress} />
            </Col>
          );
        })}
      </Wrap>
    </Section>
  );
};

export default Category;