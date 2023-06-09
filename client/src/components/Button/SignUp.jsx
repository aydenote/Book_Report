import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { styled } from 'styled-components';

const SignUp = () => {
  return (
    <BtnWrap>
      <BtnSignUp>
        회원가입
        <SubmitIcon size={20} />
      </BtnSignUp>
    </BtnWrap>
  );
};

export default SignUp;

const BtnWrap = styled.div`
  text-align: center;
`;

const BtnSignUp = styled.button`
  display: flex;
  gap: 10px;
  margin: auto;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 2px;
  font-size: 18px;
  transition: 0.3s ease-out;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
  color: #fff;
  background-color: #26a69a;
  cursor: pointer;
  &:hover {
    background-color: #2bbbad;
  }
`;

const SubmitIcon = styled(FaPaperPlane)`
  color: #fff;
`;
