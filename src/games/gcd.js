import gameLogics from '../index.js';
import { getRandomNumber } from '../random-number.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getCommonDivisor = (x, y) => (y === 0 ? x : getCommonDivisor(y, x % y));

const generateRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const questionInGame = `${number1} ${number2}`;
  const rightAnswer = getCommonDivisor(number1, number2).toString();
  return [questionInGame, rightAnswer];
};

export default function gcd() {
  gameLogics(rules, generateRound);
}
