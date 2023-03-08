import styled from 'styled-components/native';
import Card from './common/Card';
import React from 'react';
import Section from './common/Section';
import Heading from './common/Heading';
import {CategoryType} from '../types';

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
  categories: CategoryType[];
};
const Category = ({navigation, categories}: Props) => {
  const onPress = (cateId: number, cateTitle: string) => {
    navigation?.navigate('Posts', {
      cateId,
      title: cateTitle,
    });
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
        {categories.length > 0 &&
          categories.slice(0, 4)?.map(cate => {
            return (
              <Col key={cate?.id}>
                <Card
                  title={cate?.title}
                  isCate={true}
                  onPress={() => onPress(cate.id, cate.title)}
                  height={'90px'}
                />
              </Col>
            );
          })}
      </Wrap>
    </Section>
  );
};

export default Category;
