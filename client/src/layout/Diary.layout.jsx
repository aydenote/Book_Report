import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDiary } from '../redux/action';
import Quote from '../components/diary/Quote';
import Add from '../components/button/Add';
import DiarySummary from '../components/diary/DiarySummary';
import { executeApiWithTokenReissue } from '../util/tokenReissue';
import { getAllDiary } from '../apis/diary';
import { styled } from 'styled-components';

const DiaryLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allDiaryInfo = useSelector(state => state.diaryInfo.data);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await executeApiWithTokenReissue(getAllDiary, navigate);
        dispatch(setDiary(response));
      } catch (error) {
        console.error(error);
      }
    };
    fetchPostData();
  }, [navigate, dispatch]);

  return (
    <Container>
      <Quote />
      {allDiaryInfo.length > 0 ? (
        <DiaryContainer>
          {allDiaryInfo.map(diary => (
            <DiarySummary diary={diary} key={diary.diaryId} />
          ))}
        </DiaryContainer>
      ) : (
        <PostAddContainer>
          <Notice>게시물이 없습니다.</Notice>
          <Add />
        </PostAddContainer>
      )}
    </Container>
  );
};

export default DiaryLayout;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const DiaryContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 20px;
  border-right: 1px solid #94918f;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  -ms-scroll-snap-type: y mandatory;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const PostAddContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20px;
  border-right: 1px solid #94918f;
`;

const Notice = styled.p`
  margin: 10px 0;
  text-align: center;
  font-size: 2vw;
  font-weight: 800;
`;
