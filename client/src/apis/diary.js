import axios from 'axios';
import { getCookie } from '../cookie';

export const getAllDiary = async () => {
  const userId = getCookie('id');
  const accessToken = getCookie('accessToken');
  const res = await axios.get(`http://localhost:8080/diary/readAllDiary`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      userId,
    },
  });
  return res.data;
};

export const createDiary = async formData => {
  const accessToken = getCookie('accessToken');
  const res = await axios.post('http://localhost:8080/diary/write', formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data;
};
