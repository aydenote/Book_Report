import axios from 'axios';
import { getCookie } from '../cookie';

export const createDiary = async formData => {
  const accessToken = getCookie('accessToken');
  const res = await axios.post('http://localhost:8080/diary/write', formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data;
};
