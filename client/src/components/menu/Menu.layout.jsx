import React from 'react';
import MenuItem from './MenuItem';
import { styled } from 'styled-components';

const MenuLayout = () => {
  return (
    <MenuList>
      <MenuItem>Home</MenuItem>
      <MenuItem>Report</MenuItem>
      <MenuItem>Diary</MenuItem>
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
