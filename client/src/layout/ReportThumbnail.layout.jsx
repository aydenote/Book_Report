import React from 'react';
import ReportItem from '../components/report/ReportItem';
import { styled } from 'styled-components';

const ReportThumbnail = () => {
  return (
    <Container>
      <ReportItem />
      <ReportItem />
      <ReportItem />
    </Container>
  );
};

export default ReportThumbnail;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 20px;
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
