import gameLogics from '../index.js';
import { getRandomNumber, getRandomIndex } from '../random-number.js';

const description = 'What number is missing in the progression?';

const buildProgression = (length, start, step) => {
  const progressionMassive = [];
  for (let i = start; progressionMassive.length < length; i += step) {
    progressionMassive.push(i);
  }
  return progressionMassive;
};

const length = 10;

const getAnswerAndQuestion = () => {
  const start = getRandomNumber();
  const step = getRandomNumber();
  const progressionMassive = buildProgression(length, start, step);
  const indexHiddenNumber = getRandomIndex(progressionMassive);
  const rightAnswer = progressionMassive[indexHiddenNumber].toString();
  progressionMassive[indexHiddenNumber] = '..';
  const questionInGame = progressionMassive.join(' ');
  return [questionInGame, rightAnswer];
};

export default function progression() {
  gameLogics(description, getAnswerAndQuestion);
}
