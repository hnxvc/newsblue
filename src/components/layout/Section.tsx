import React from 'react';
import styled from 'styled-components/native';

const Wrap = styled.View`
  flex: 1;
  padding-left: 24;
  padding-right: 24;
`;

const Section = ({children}: {children: React.ReactNode}) => {
  return <Wrap>{children}</Wrap>;
};

export default Section;
