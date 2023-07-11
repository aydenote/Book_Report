import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { delPost } from '../../apis/post';
import { setPost } from '../../redux/action';
import { styled } from 'styled-components';
import { executeApiWithTokenReissue } from '../../util/tokenReissue';

const Delete = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeletePost = async event => {
    const postId = event.target.dataset.post;
    try {
      const response = await executeApiWithTokenReissue(delPost, navigate, postId);
      dispatch(setPost(response));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DeleteBtn data-post={post.postId} onClick={handleDeletePost}>
      삭제
    </DeleteBtn>
  );
};

export default Delete;

const DeleteBtn = styled.button`
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
