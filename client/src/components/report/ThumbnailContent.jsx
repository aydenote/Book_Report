import React, { useEffect, useState } from 'react';
import { getImageData } from '../../apis/post';
import { styled } from 'styled-components';

const ThumbnailContent = ({ post }) => {
  return (
    <Container>
      <ThumbnailImg src={post.imagePath} />
      <PostTitle>{post.postTitle}</PostTitle>
      <PostDetail>{post.content}</PostDetail>
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
  -o-object-fit: contain;
  object-fit: contain;
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
