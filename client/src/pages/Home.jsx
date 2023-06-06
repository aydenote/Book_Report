import React from 'react';
import MenuLayout from '../components/menu/Menu.layout';
import HomeLayout from './Layout';

const Home = () => {
  return (
    <HomeLayout>
      <MenuLayout />
    </HomeLayout>
  );
};

export default Home;
