import { getRandomNumber, getRandomIndex } from '../random-number.js';
import gameLogics from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`There is no such operator like '${operator}'!`);
  }
};

const getAnswerAndQuestion = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = operators[getRandomIndex(operators)];
  const questionInGame = `${number1} ${operator} ${number2}`;
  const rightAnswer = calculate(number1, number2, operator).toString();
  return [questionInGame, rightAnswer];
};

export default function calc() {
  gameLogics(description, getAnswerAndQuestion);
}
