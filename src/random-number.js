const getRandomNumber = () => {
  const number = (Math.round(Math.random() * 100));
  return number;
};

const getRandomIndex = (data) => Math.floor(Math.random() * data.length);

export { getRandomNumber, getRandomIndex };
