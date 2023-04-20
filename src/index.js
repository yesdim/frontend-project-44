import readlineSync from 'readline-sync';
import brainGame from './cli.js';

export default function gameLogics(description, getAnswerAndQuestion) {
  const name = brainGame();
  console.log(description);
  const attemptsCount = 3;
  for (let i = 0; i < attemptsCount; i += 1) {
    const [questionInGame, rightAnswer] = getAnswerAndQuestion();
    const quest = readlineSync.question(`${'Question: '}${questionInGame}${'\nYour answer: '}`);
    if (quest === rightAnswer) {
      console.log('Coorect!');
    } else {
      console.log(`${quest} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
