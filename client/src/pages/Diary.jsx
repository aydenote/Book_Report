import React from 'react';
import ReportLayout from '../layout/Post.layout';
import MenuLayout from '../layout/Menu.layout';
import DiaryLayout from '../layout/Diary.layout';
import LoginLinkLayout from '../layout/LoginLink.layout';
import { getCookie } from '../cookie';

const Diary = () => {
  const token = getCookie('accessToken');

  return (
    <ReportLayout>
      <MenuLayout />
      {token ? <DiaryLayout /> : <LoginLinkLayout />}
    </ReportLayout>
  );
};

export default Diary;
