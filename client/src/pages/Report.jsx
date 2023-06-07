import React from 'react';
import ReportLayout from '../layout/Post.layout';
import MenuLayout from '../layout/Menu.layout';
import ReportThumbnail from '../layout/ReportThumbnail.layout';

const Report = () => {
  return (
    <ReportLayout>
      <MenuLayout />
      <ReportThumbnail />
    </ReportLayout>
  );
};

export default Report;
