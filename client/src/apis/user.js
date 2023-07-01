import aixos from 'axios';

export const handleLogin = async (id, password) => {
  const res = await aixos.post('http://localhost:8080/login', {
    params: {
      id,
      password,
    },
  });
  return res.data;
};

export const handleSignup = async (name, id, password) => {
  const res = await aixos.post('http://localhost:8080/register', {
    params: {
      name,
      id,
      password,
    },
  });
  return res.data;
};
