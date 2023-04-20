import gameLogics from '../index.js';
import { getRandomNumber } from '../random-number.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const getAnswerAndQuestion = () => {
  const questionInGame = getRandomNumber();
  const rightAnswer = isEven(questionInGame) ? 'yes' : 'no';
  return [questionInGame, rightAnswer];
};

export default function even() {
  gameLogics(description, getAnswerAndQuestion);
}
