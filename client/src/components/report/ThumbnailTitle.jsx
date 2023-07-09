import React from 'react';
import { styled } from 'styled-components';

const ThumbnailTitle = ({ children }) => {
  return <BookTitle>{children}</BookTitle>;
};

export default ThumbnailTitle;

const BookTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
