import React from 'react';
import MenuItem from '../components/menu/MenuItem';
import Logout from '../components/button/Logout';
import { getCookie } from '../cookie';
import { styled } from 'styled-components';

const MenuLayout = () => {
  const token = getCookie('token');
  return (
    <MenuList>
      <MenuItem>Home</MenuItem>
      <MenuItem>Report</MenuItem>
      <MenuItem>Diary</MenuItem>
      {token ? (
        <Logout />
      ) : (
        <>
          <MenuItem>SignIn</MenuItem>
          <MenuItem>SignUp</MenuItem>
        </>
      )}
    </MenuList>
  );
};

export default MenuLayout;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-right: 1px solid #94918f;
`;
