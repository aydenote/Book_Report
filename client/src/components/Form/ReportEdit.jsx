import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ImageUpload from './ImageUpload';
import Change from '../button/Change';
import Cancel from '../button/Cancel';
import { editPost, getImageData, getSinglePost } from '../../apis/post';
import { executeApiWithTokenReissue } from '../../util/tokenReissue';
import { styled } from 'styled-components';

const ReportEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(null);
  const [postData, setPostData] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const postId = searchParams.get('postId');

  const onSubmit = async data => {
    const formData = new FormData();
    const { bookTitle, postTitle, content, image } = data;

    formData.append('postId', postId);
    formData.append('bookTitle', bookTitle);
    formData.append('postTitle', postTitle);
    formData.append('content', content);
    formData.append('image', image[0]);

    try {
      const response = await executeApiWithTokenReissue(editPost, navigate, formData);
      if (response.success) navigate(-1);
    } catch (err) {
      console.error(err);
      alert(`${err.response.data.error}`);
    }
  };

  useEffect(() => {
    const getPostData = async () => {
      try {
        const response = await executeApiWithTokenReissue(getSinglePost, navigate, postId);
        const imageData = await getImageData(response[0].imagePath);
        setPostData(response[0]);
        setImageSrc(imageData);
      } catch (error) {
        console.error(error);
      }
    };
    getPostData(postId);
  }, [postId, navigate]);

  return (
    postData && (
      <>
        <Title>Edit report</Title>
        <ReportForm onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <ImageUpload imageSrc={imageSrc} setImageSrc={setImageSrc} register={register} />
          <InputWrap>
            <InputTitle
              id="bookTitle"
              type="text"
              placeholder="Book Title"
              defaultValue={postData.bookTitle}
              {...register('bookTitle', { required: true })}
            />
            {errors.title && <ErrText>책 제목을 입력해주세요.</ErrText>}
            <InputTitle
              id="postTitle"
              type="text"
              placeholder="Report Title"
              defaultValue={postData.postTitle}
              {...register('postTitle', { required: true })}
            />
            {errors.title && <ErrText>게시물 제목을 입력해주세요.</ErrText>}
            <InputContent
              id="content"
              type="text"
              placeholder="Report Content"
              defaultValue={postData.content}
              {...register('content', { required: true })}
            />
            {errors.content && <ErrText>내용을 입력해주세요.</ErrText>}
            <ButtonWrap>
              <Change />
              <Cancel />
            </ButtonWrap>
          </InputWrap>
        </ReportForm>
      </>
    )
  );
};

export default ReportEdit;

const Title = styled.h1`
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 2rem;
  font-family: 'Inter', sans-serif;
`;

const ReportForm = styled.form`
  display: flex;
  gap: 20px;
  margin: 1rem 0;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0.8;
`;

const InputTitle = styled.input`
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: 2px solid transparent;
  border-radius: 4px;
  color: #fff;
  background-color: #121418;
  transition: border-color 0.3s;
  &:focus {
    border-color: #26a69a;
  }
`;

const InputContent = styled.textarea`
  height: 100%;
  margin-bottom: 1rem;
  padding: 0.8rem;
  outline: none;
  border: 3px solid transparent;
  border-radius: 4px;
  color: #fff;
  background-color: #121418;
  transition: border-color 0.3s;
  &:focus {
    border-color: #26a69a;
  }

  /* 스크롤바 커스텀 스타일 */
  scrollbar-width: thin;
  scrollbar-color: #888888 #f4f4f4;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f4f4f4;
    border-radius: 4px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const ErrText = styled.p`
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  color: red;
`;
