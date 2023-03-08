import styled from 'styled-components/native';
import Card from '../common/Card';
import React from 'react';
import Section from '../common/Section';
import Screen from '../layout/Screen';

import {useCategories} from '../../context/hooks';

const Wrap = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: -10px;
  margin-bottom: -10px;
`;

const Col = styled.View`
  width: 100%;
  padding: 10px;
`;

type Props = {
  navigation: any;
};
const Category = ({navigation}: Props) => {
  const categories = useCategories();

  const onPress = () => {
    navigation?.navigate('Posts');
  };

  return (
    <Screen title={'Categories'}>
      <Section>
        <Wrap>
          {categories.length > 0 &&
            categories.map(cate => {
              return (
                <Col key={cate.id}>
                  <Card
                    title={cate.title}
                    // isCate={true}
                    onPress={onPress}
                    height={'150px'}
                  />
                </Col>
              );
            })}
        </Wrap>
      </Section>
    </Screen>
  );
};

export default Category;
