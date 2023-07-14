import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import uuid from 'react-uuid';
import Create from '../button/Create';
import Cancel from '../button/Cancel';
import { createDiary } from '../../apis/diary';
import { getCurrentDate } from '../../util/date';
import { executeApiWithTokenReissue } from '../../util/tokenReissue';
import { getCookie } from '../../cookie';
import { styled } from 'styled-components';

const DiaryInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async data => {
    const { diaryTitle, content } = data;
    const diaryId = uuid();
    const userId = getCookie('id');
    const currentDate = getCurrentDate();
    const formData = new FormData();

    formData.append('userId', userId);
    formData.append('diaryId', diaryId);
    formData.append('diaryTitle', diaryTitle);
    formData.append('content', content);
    formData.append('date', currentDate);

    try {
      const response = await executeApiWithTokenReissue(createDiary, navigate, formData);
      if (response.success) navigate(-1);
    } catch (err) {
      console.error(err);
      alert(`${err.response.data.error}`);
    }
  };

  return (
    <>
      <Title>create diary</Title>
      <ReportForm onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <InputWrap>
          <InputTitle
            id="diaryTitle"
            type="text"
            placeholder="Diary Title"
            {...register('diaryTitle', { required: true })}
          />
          {errors.title && <ErrText>일기 제목을 입력해주세요.</ErrText>}
          <InputContent
            id="content"
            type="text"
            placeholder="Diary Content"
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

export default DiaryInfo;

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
