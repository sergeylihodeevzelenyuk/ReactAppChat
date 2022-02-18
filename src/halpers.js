export const getMessageTime = () => {
  const modifyData = (data) => {
    return String(data).length === 2 ? data : `0${data}`;
  };

  const data = new Date();
  const hour = modifyData(data.getHours());
  const min = modifyData(data.getMinutes());

  return `${hour}:${min}`;
};
