import React from 'react';
import { keyframes, styled } from 'styled-components';

const Quote = () => {
  return (
    <MarqueeContainer>
      <MarqueeWrapper>
        <Word>테스트 용1</Word>
        <Word>테스트 용2</Word>
        <Word>테스트 용3</Word>
      </MarqueeWrapper>
    </MarqueeContainer>
  );
};

export default Quote;

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled.div`
  width: calc(100% + 44px);
  margin-left: -20px;
  padding: 10px 0;
  font-size: 20px;
  overflow: hidden;
  color: #e9e6e4;
  background-color: #121418;
`;

const MarqueeWrapper = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${marqueeAnimation} 10s linear infinite;
`;

const Word = styled.span`
  &::before {
    content: '';
    position: relative;
    display: inline-block;
    top: -1px;
    width: 10px;
    height: 10px;
    margin: 0 16px;
    border-radius: 50%;
    background-color: #e9e6e4;
  }
`;
