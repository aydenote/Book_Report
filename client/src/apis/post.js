import aixos from 'axios';
import { getCookie } from '../cookie';

export const createPost = async formData => {
  const accessToken = getCookie('accessToken');
  const res = await aixos.post('http://localhost:8080/report/write', formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data;
};

export const getAllPost = async () => {
  const userId = getCookie('id');
  const accessToken = getCookie('accessToken');
  const res = await aixos.get(`http://localhost:8080/report/readAllPost`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      userId,
    },
  });
  return res.data;
};

export const delPost = async postId => {
  const userId = getCookie('id');
  const accessToken = getCookie('accessToken');
  const res = await aixos.delete(`http://localhost:8080/report/delete`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      userId,
      postId,
    },
  });
  return res.data;
};

export const getImageData = async imagePath => {
  const response = await aixos.get(`http://localhost:8080/image/${imagePath}`, {
    responseType: 'blob',
  });
  const imageURL = await URL.createObjectURL(response.data);
  return imageURL;
};
