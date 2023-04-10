import gameLogics from './index.js';
import getRandomNumber from './random-number.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
let rightAnswer;

const generateRound = () => {
  const questionInGame = getRandomNumber();
  if ((questionInGame % 2 === 0)) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return [questionInGame, rightAnswer];
};

export default function brainEven() {
gameLogics(rules, generateRound);
}