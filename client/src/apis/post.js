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
