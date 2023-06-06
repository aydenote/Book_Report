import React from 'react';
import { styled } from 'styled-components';

const ThumbnailContent = () => {
  return (
    <Container>
      <ThumbnailImg />
      <PostTitle>게시물에 대한 사용자 제목</PostTitle>
      <PostDetail>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus molestias cum impedit non vitae
        voluptates consectetur, voluptatem possimus ab. Doloremque commodi quo placeat libero repellat, earum
        repellendus adipisci rem!
      </PostDetail>
    </Container>
  );
};

export default ThumbnailContent;

const Container = styled.section`
  padding-right: 20px;
`;

const ThumbnailImg = styled.img`
  max-height: 22vh;
  width: 100%;
  height: 260px;
  -o-object-fit: cover;
  object-fit: cover;
  filter: grayscale(1);
`;

const PostTitle = styled.h2`
  margin: 8px 0 8px;
  line-height: 1.2;
  font-size: 26px;
  font-weight: 500;
`;

const PostDetail = styled.p`
  margin: 14px 0;
  line-height: 1.5;
`;
