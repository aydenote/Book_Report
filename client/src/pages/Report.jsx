import React from 'react';
import ReportLayout from '../layout/Post.layout';
import MenuLayout from '../layout/Menu.layout';
import ReportThumbnail from '../layout/ReportThumbnail.layout';
import LoginLinkLayout from '../layout/LoginLink.layout';
import { getCookie } from '../cookie';

const Report = () => {
  const token = getCookie('accessToken');
  return (
    <ReportLayout>
      <MenuLayout />
      {token ? <ReportThumbnail /> : <LoginLinkLayout />}
    </ReportLayout>
  );
};

export default Report;
