import React from 'react';
import { styled } from 'styled-components';

const HomeLayout = ({ children }) => {
  return (
    <Main>
      <Container>{children}</Container>
    </Main>
  );
};

export default HomeLayout;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0 2em;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  background-color: #121418;
`;

const Container = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 15% 20% 35% 30%;
  grid-template-rows: 100%;
  max-width: 1350px;
  max-height: 800px;
  width: 100%;
  height: 90vh;
  padding: 40px 0;
  overflow: hidden;
  background-color: #e9e6e4;
`;
