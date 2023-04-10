import gameLogics from './index.js';
import getRandomNumber from './random-number.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionInGame = getRandomNumber();
let rightAnswer;

export default function brainEven() {
  if ((questionInGame % 2 === 0)) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return rightAnswer;
}

const correctAnswer = brainEven();

gameLogics(rules, questionInGame, correctAnswer);
