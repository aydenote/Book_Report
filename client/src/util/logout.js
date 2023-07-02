import { delCookie } from '../cookie';

export const handleLogout = () => {
  delCookie('id');
  delCookie('accessToken');
  delCookie('refreshToken');
};
