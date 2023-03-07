import React from 'react';
import styled from 'styled-components/native';

const Wrap = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: ${({mt}) => (mt ? mt : '0')};
  margin-bottom: ${({mb}) => (mb ? mb : '0')};
`;

type Props = {
  children: React.ReactNode;
  mt?: string;
  mb?: string;
};

const Section = ({children, mt, mb}: Props) => {
  return (
    <Wrap mt={mt} mb={mb}>
      {children}
    </Wrap>
  );
};

export default Section;
