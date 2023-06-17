import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name, value) => {
  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 1);
  return cookies.set(name, value, { expires: expirationDate });
};

export const getCookie = name => {
  return cookies.get(name);
};

export const delCookie = name => {
  return cookies.remove(name);
};
