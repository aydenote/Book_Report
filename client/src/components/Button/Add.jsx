import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Add = () => {
  const navigate = useNavigate();

  const handleAddPost = () => {
    navigate('write');
  };

  return <AddBtn onClick={() => handleAddPost()}>게시글 생성</AddBtn>;
};

export default Add;

const AddBtn = styled.button`
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
