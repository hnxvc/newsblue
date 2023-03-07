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

const Category = () => {
  return (
    <Section>
      <Heading title="Category" />
      <Wrap>
        <Col>
          <Card title="Ui/UX" isCate={true} />
        </Col>
        <Col>
          <Card title="Programming" isCate={true} />
        </Col>
        <Col>
          <Card title="Algorithms" isCate={true} />
        </Col>
        <Col>
          <Card title="Database" isCate={true} />
        </Col>
      </Wrap>
    </Section>
  );
};

export default Category;
