import gameLogics from '../index.js';
import { getRandomNumber } from '../random-number.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 || number === 1) {
      return false;
    }
  }
  return true;
};

const getAnswerAndQuestion = () => {
  const questionInGame = getRandomNumber();
  const rightAnswer = isNumberPrime(questionInGame) ? 'yes' : 'no';
  return [questionInGame, rightAnswer];
};

export default function prime() {
  gameLogics(description, getAnswerAndQuestion);
}
