import React from 'react';
import ThumbnailTitle from '../components/report/ThumbnailTitle';
import { styled } from 'styled-components';

const ReportPin = () => {
  return (
    <Container>
      <HeaderWrap>
        <ThumbnailTitle>Read</ThumbnailTitle>
        <SubTitle>Book Title</SubTitle>
      </HeaderWrap>
      <CurrentNum>NO.01</CurrentNum>
    </Container>
  );
};

export default ReportPin;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const HeaderWrap = styled.div`
  padding: 0 20px;
`;

const SubTitle = styled.div`
  border-bottom: 1px solid #94918f;
  margin-bottom: 20px;
  padding-bottom: 20px;

  font-size: 22px;
  text-decoration: none;
  color: #161419;
  display: flex;
  letter-spacing: -0.5px;
  align-items: center;

  &::before {
    content: '';
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background-color: #161419;
    margin-right: 12px;
  }
`;

const CurrentNum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 0 20px;
  border-right: 1px solid #94918f;
  font-size: 72px;
  text-align: center;
  letter-spacing: -3px;
  font-weight: lighter;
  font-family: 'Space Grotesk', sans-serif;
  white-space: nowrap;

  @media screen and (max-width: 1260px) {
    font-size: 5vw;
  }
`;
