import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const MenuItem = ({ children }) => {
  const path = children.toLowerCase();
  return (
    <ItemList to={path === 'home' ? '/' : path}>
      {children}
      <svg
        fill="none"
        width={22}
        stroke="currentColor"
        strokeWidth=".7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-up-right"
        viewBox="0 0 22 22">
        <path d="M7 17L17 7M7 7h10v10" />
      </svg>
    </ItemList>
  );
};

export default MenuItem;

const ItemList = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 22px;
  text-decoration: none;
  letter-spacing: -0.5px;
  color: #161419;
  :last-child {
    opacity: 0;
  }

  &:hover {
    :last-child {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1260px) {
    font-size: 1.6vw;
  }
`;
