import React from 'react';
import { useLocation } from 'react-router-dom';
import ThumbnailTitle from './ThumbnailTitle';
import ThumbnailContent from './ThumbnailContent';
import AddBtn from '../Button/Add';
import ModifyBtn from '../Button/Modify';
import DeleteBtn from '../Button/Delete';
import { styled } from 'styled-components';

const ReportItem = () => {
  const pathName = useLocation().pathname;
  return (
    <Container>
      <ThumbnailTitle>더 리더</ThumbnailTitle>
      {pathName !== '/' ? (
        <BtnWrap>
          <AddBtn />
          <ModifyBtn />
          <DeleteBtn />
        </BtnWrap>
      ) : null}
      <Date>06.06.2023</Date>
      <ThumbnailContent />
    </Container>
  );
};

export default ReportItem;

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
