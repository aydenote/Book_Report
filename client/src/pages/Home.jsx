import React from 'react';
import MenuLayout from '../layout/Menu.layout';
import HomeLayout from '../layout/Home.layout';
import ReportPinLayout from '../layout/ReportPin.layout';
import ReportThumbnailLayout from '../layout/ReportThumbnail.layout';
import DiaryLayout from '../layout/Diary.layout';

const Home = () => {
  return (
    <HomeLayout>
      <MenuLayout />
      <ReportPinLayout />
      <ReportThumbnailLayout />
      <DiaryLayout />
    </HomeLayout>
  );
};

export default Home;
