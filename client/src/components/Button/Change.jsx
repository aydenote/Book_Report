import React from 'react';
import { styled } from 'styled-components';

const Change = () => {
  return <ChangeBtn type="submit">변경</ChangeBtn>;
};

export default Change;

const ChangeBtn = styled.button`
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 1px solid #f1f3f5;
  border-radius: 1rem;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  word-break: keep-all;
  color: #f1f3f5;
  background: #1e1e1e;
  cursor: pointer;
`;
