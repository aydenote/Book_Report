import aixos from 'axios';

export const createPost = async formData => {
  const res = await aixos.post('http://localhost:8080/report/write', formData);
  return res.data;
};
