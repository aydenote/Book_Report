import React from 'react';
import MenuLayout from '../layout/Menu.layout';
import HomeLayout from './Layout';
import ReportPinLayout from '../layout/ReportPin.layout';
import ReportThumbnailLayout from '../layout/ReportThumbnail.layout';

const Home = () => {
  return (
    <HomeLayout>
      <MenuLayout />
      <ReportPinLayout />
      <ReportThumbnailLayout />
    </HomeLayout>
  );
};

export default Home;
