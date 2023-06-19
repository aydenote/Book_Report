import React from 'react';
import { useNavigate } from 'react-router-dom';
import { delCookie } from '../../cookie';
import { styled } from 'styled-components';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    delCookie('id');
    delCookie('token');
    navigate(-1);
  };
  return (
    <ItemList onClick={handleLogout}>
      Logout{' '}
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

export default Logout;

const ItemList = styled.button`
  display: flex;
  align-items: center;
  padding-left: 10px;
  border: none;
  font-size: 22px;
  text-decoration: none;
  letter-spacing: -0.5px;
  color: #161419;
  cursor: pointer;

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
