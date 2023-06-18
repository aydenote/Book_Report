import React from 'react';
import MenuLayout from '../layout/Menu.layout';
import PostLayout from '../layout/Post.layout';
import ReportPinLayout from '../layout/ReportPin.layout';
import ReportThumbnailLayout from '../layout/ReportThumbnail.layout';
import DiaryLayout from '../layout/Diary.layout';
import LoginLinkLayout from '../layout/LoginLink.layout';
import { getCookie } from '../cookie';

const Home = () => {
  const token = getCookie('token');

  return (
    <PostLayout>
      <MenuLayout />
      {token ? (
        <>
          <ReportPinLayout />
          <ReportThumbnailLayout />
          <DiaryLayout />
        </>
      ) : (
        <LoginLinkLayout />
      )}
    </PostLayout>
  );
};

export default Home;
