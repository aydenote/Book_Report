import React from 'react';
import { styled } from 'styled-components';

const ThumbnailTitle = ({ children }) => {
  return <BookTitle>{children}</BookTitle>;
};

export default ThumbnailTitle;

const BookTitle = styled.p`
  font-size: 80px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  letter-spacing: -5px;
  line-height: 1;
  margin-bottom: 6px;

  @media screen and (max-width: 1400px) {
    font-size: 6vw;
  }
`;
