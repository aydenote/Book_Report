import React from 'react';
import { useLocation } from 'react-router-dom';
import AddBtn from '../button/Add';
import ModifyBtn from '../button/Modify';
import ThumbnailTitle from '../report/ThumbnailTitle';
import { styled } from 'styled-components';

const DiarySummary = ({ diary }) => {
  const pathName = useLocation().pathname;

  return (
    <Container>
      <ThumbnailTitle>{diary.diaryTitle}</ThumbnailTitle>
      {pathName !== '/' ? (
        <BtnWrap>
          <AddBtn />
          <ModifyBtn postId={diary.diaryId} />
        </BtnWrap>
      ) : null}
      <Date>{diary.date}</Date>
      <DiaryContent>{diary.content}</DiaryContent>
    </Container>
  );
};

export default DiarySummary;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  min-height: 100%;
  scroll-snap-align: start;
`;

const BtnWrap = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

const Date = styled.p`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #94918f;
  font-size: 22px;
  text-decoration: none;
  letter-spacing: -0.5px;
  color: #161419;
`;

const DiaryContent = styled.p``;
