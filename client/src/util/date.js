export const getCurrentDate = () => {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = `${month < 10 ? '0' + month : month}.${day < 10 ? '0' + day : day}.${year}`;
  return formattedDate;
};
