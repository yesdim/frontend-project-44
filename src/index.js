import readlineSync from 'readline-sync';
import brainGame from './cli.js';

export default function gameLogics(rules, generateRound) {
  const name = brainGame();
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const [questionInGame, rightAnswer] = generateRound();
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
