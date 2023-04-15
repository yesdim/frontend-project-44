import gameLogics from '../index.js';
import { getRandomNumber } from '../random-number.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  let result = 'yes';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = 'no';
    }
  }
  if (number === 1) {
    result = 'no';
  }
  return result;
};

const generateRound = () => {
  const questionInGame = getRandomNumber();
  const rightAnswer = isNumberPrime(questionInGame);
  return [questionInGame, rightAnswer];
};

export default function prime() {
  gameLogics(rules, generateRound);
}
