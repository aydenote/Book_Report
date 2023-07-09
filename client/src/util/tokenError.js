export const handleTokenError = (error, navigate) => {
  const errData = error.response.data;
  alert(errData.msg);
  if (navigate) navigate('/signin');
};
