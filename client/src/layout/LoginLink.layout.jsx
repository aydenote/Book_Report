import React from 'react';
import SignInLink from '../components/button/SignIn.link';
import SignUpLink from '../components/button/SignUp.link';
import { styled } from 'styled-components';

const LoginLinkLayout = () => {
  return (
    <Container>
      <Notice>로그인이 필요한 서비스입니다.</Notice>
      <SignInLink />
      <SignUpLink />
    </Container>
  );
};

export default LoginLinkLayout;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  width: 80%;
  margin: auto;
  padding: 0 20px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
`;

const Notice = styled.h3`
  font-size: 2rem;
`;
