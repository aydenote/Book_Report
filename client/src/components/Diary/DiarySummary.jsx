import React from 'react';
import { useLocation } from 'react-router-dom';
import AddBtn from '../button/Add';
import ModifyBtn from '../button/Modify';
import DeleteBtn from '../button/Delete';
import { styled } from 'styled-components';

const DiarySummary = () => {
  const pathName = useLocation().pathname;
  return (
    <Container>
      {pathName !== '/' ? (
        <BtnWrap>
          <AddBtn />
          <ModifyBtn />
          <DeleteBtn />
        </BtnWrap>
      ) : null}
      <Header>
        <DiaryNum>1</DiaryNum>
        <DiaryDate>11.06.2023</DiaryDate>
      </Header>
      <DiaryTitle>테스트용 일기 타이틀</DiaryTitle>
      <DiaryContent>
        테스트용 일기 내용 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sapiente sunt facere quas
        quae debitis dignissimos blanditiis provident nulla, excepturi tenetur eos inventore tempora labore veniam
        officia fuga cupiditate aliquid.
      </DiaryContent>
    </Container>
  );
};

export default DiarySummary;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  min-height: 100%;
  padding: 0 20px;
  scroll-snap-align: start;
  &:not(:first-child) {
    margin-top: 40px;
  }
`;

const Header = styled.section`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const DiaryNum = styled.p`
  margin-bottom: 16px;
  font-size: 56px;
  font-family: 'Space Grotesk', sans-serif;
`;

const DiaryDate = styled.p`
  display: flex;
  justify-content: flex-end;
`;

const DiaryTitle = styled.p`
  max-width: 16ch;
  font-size: 28px;
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -2px;
`;

const DiaryContent = styled.p`
  max-width: 33ch;
  font-size: 15px;
  margin-top: 12px;
  line-height: 1.4;
`;

const BtnWrap = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;
