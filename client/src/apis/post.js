import aixos from 'axios';
import { getCookie } from '../cookie';

export const createPost = async formData => {
  const res = await aixos.post('http://localhost:8080/report/write', formData, {
    headers: {
      Authorization: `Bearer ${getCookie('token')}`,
    },
  });
  return res.data;
};

export const getPost = async () => {
  const userId = getCookie('id');
  const res = await aixos.get(`http://localhost:8080/report/read`, {
    headers: {
      Authorization: `Bearer ${getCookie('token')}`,
    },
    params: {
      userId,
    },
  });
  return res.data;
};

export const delPost = async postId => {
  const userId = getCookie('id');
  const res = await aixos.delete(`http://localhost:8080/report/delete`, {
    headers: {
      Authorization: `Bearer ${getCookie('token')}`,
    },
    params: {
      userId,
      postId,
    },
  });
  return res.data;
};
