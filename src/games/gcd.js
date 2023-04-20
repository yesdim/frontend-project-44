import gameLogics from '../index.js';
import { getRandomNumber } from '../random-number.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => (y === 0 ? x : getGcd(y, x % y));

const getAnswerAndQuestion = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const questionInGame = `${number1} ${number2}`;
  const rightAnswer = getGcd(number1, number2).toString();
  return [questionInGame, rightAnswer];
};

export default function gcd() {
  gameLogics(description, getAnswerAndQuestion);
}
