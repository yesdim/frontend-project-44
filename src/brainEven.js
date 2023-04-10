import gameLogics from './index.js';

function num() {
  const number = (Math.round(Math.random() * 100));
  return number;
}

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionInGame = num();
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
