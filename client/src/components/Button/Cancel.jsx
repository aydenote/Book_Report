import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Cancel = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <CancelBtn type="button" onClick={handleCancel}>
      취소
    </CancelBtn>
  );
};

export default Cancel;

const CancelBtn = styled.button`
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
