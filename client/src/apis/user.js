import axios from 'axios';
import { getCookie } from '../cookie';

export const handleLogin = async (id, password) => {
  const res = await axios.post('http://localhost:8080/login', {
    params: {
      id,
      password,
    },
  });
  return res.data;
};

export const handleSignup = async (name, id, password) => {
  const res = await axios.post('http://localhost:8080/register', {
    params: {
      name,
      id,
      password,
    },
  });
  return res.data;
};

export const handleRenewToken = async () => {
  const userId = getCookie('id');
  const refreshToken = getCookie('refreshToken');
  const res = await axios.post(
    'http://localhost:8080/refresh',
    { params: { userId } },
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );
  return res.data;
};
