import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import uuid from 'react-uuid';
import ImageUpload from './ImageUpload';
import Create from '../button/Create';
import Cancel from '../button/Cancel';
import { createPost } from '../../apis/post';
import { getCurrentDate } from '../../util/date';
import { executeApiWithTokenReissue } from '../../util/tokenReissue';
import { getCookie } from '../../cookie';
import { styled } from 'styled-components';

const ReportInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(null);
  const image = watch('image');

  const onSubmit = async data => {
    const { bookTitle, postTitle, content, image } = data;
    const postId = uuid();
    const userId = getCookie('id');
    const currentDate = getCurrentDate();
    const formData = new FormData();

    formData.append('userId', userId);
    formData.append('postId', postId);
    formData.append('bookTitle', bookTitle);
    formData.append('postTitle', postTitle);
    formData.append('content', content);
    formData.append('date', currentDate);
    formData.append('image', image[0]);

    try {
      const response = await executeApiWithTokenReissue(createPost, navigate, formData);
      console.log(response);
      if (response.success) navigate(-1);
    } catch (err) {
      console.error(err);
      alert(`${err.response.data.error}`);
    }
  };

  // 이미지 파일 업로드 시 blob 형식으로 state에 저장
  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImageSrc(URL.createObjectURL(file));
    }
  }, [image]);

  return (
    <>
      <Title>create report</Title>
      <ReportForm onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <ImageUpload imageSrc={imageSrc} register={register} />
        <InputWrap>
          <InputTitle
            id="bookTitle"
            type="text"
            placeholder="Book Title"
            {...register('bookTitle', { required: true })}
          />
          {errors.title && <ErrText>책 제목을 입력해주세요.</ErrText>}
          <InputTitle
            id="postTitle"
            type="text"
            placeholder="Report Title"
            {...register('postTitle', { required: true })}
          />
          {errors.title && <ErrText>게시물 제목을 입력해주세요.</ErrText>}
          <InputContent
            id="content"
            type="text"
            placeholder="Report Content"
            {...register('content', { required: true })}
          />
          {errors.content && <ErrText>내용을 입력해주세요.</ErrText>}
          <ButtonWrap>
            <Create />
            <Cancel />
          </ButtonWrap>
        </InputWrap>
      </ReportForm>
    </>
  );
};

export default ReportInfo;

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
