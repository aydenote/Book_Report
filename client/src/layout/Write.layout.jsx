import React from 'react';
import { styled } from 'styled-components';

const WriteLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default WriteLayout;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 20px;
  border-right: 1px solid #94918f;
`;
