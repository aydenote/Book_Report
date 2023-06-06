import React from 'react';
import Quote from '../components/Diary/Quote';
import { styled } from 'styled-components';
import SummaryDiary from '../components/Diary/DiarySummary';

const DiaryLayout = () => {
  return (
    <Container>
      <Quote />
      <DiaryTitle>Diary</DiaryTitle>
      <DiaryWrap>
        <SummaryDiary />
        <SummaryDiary />
        <SummaryDiary />
      </DiaryWrap>
    </Container>
  );
};

export default DiaryLayout;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const DiaryTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 100px 0 20px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #94918f;
  letter-spacing: -1px;
  font-size: 25px;
  font-family: 'Playfair Display', serif;

  @media screen and (max-width: 1260px) {
    margin-top: 6vw;
  }

  @media screen and (max-width: 1400px) {
    margin-top: 88px;
  }
`;

const DiaryWrap = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-right: 1px solid #94918f;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  -ms-scroll-snap-type: y mandatory;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
