import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPost } from '../redux/action';
import ReportItem from '../components/report/ReportItem';
import Add from '../components/button/Add';
import { setCookie } from '../cookie';
import { getPost } from '../apis/post';
import { handleRenewToken } from '../apis/user';
import { handleTokenError } from '../util/tokenError';
import { styled } from 'styled-components';

const ReportThumbnail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postsInfo = useSelector(state => state.postInfo.data);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await getPost();
        dispatch(setPost(response));
      } catch (error) {
        const errData = await error.response.data;
        if (errData.type === 'expired') {
          try {
            const refreshResponse = await handleRenewToken();
            const newAccessToken = refreshResponse.newAccessToken;
            setCookie('accessToken', newAccessToken);

            const postResponse = await getPost();
            dispatch(setPost(postResponse));
          } catch (error) {
            handleTokenError(error, navigate);
          }
        } else {
          handleTokenError(error, navigate);
        }
      }
    };
    fetchPostData();
  }, [navigate, dispatch]);

  return (
    <>
      {postsInfo.length > 0 ? (
        <PostContainer>
          {postsInfo.map(post => (
            <ReportItem post={post} key={post.postId} />
          ))}
        </PostContainer>
      ) : (
        <PostAddContainer>
          <Notice>게시물이 없습니다.</Notice>
          <Add />
        </PostAddContainer>
      )}
    </>
  );
};

export default ReportThumbnail;

const PostContainer = styled.section`
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
