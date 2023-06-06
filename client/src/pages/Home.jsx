import React from 'react';
import MenuLayout from '../layout/Menu.layout';
import HomeLayout from './Layout';
import ReportPinLayout from '../layout/ReportPin.layout';

const Home = () => {
  return (
    <HomeLayout>
      <MenuLayout />
      <ReportPinLayout />
    </HomeLayout>
  );
};

export default Home;
