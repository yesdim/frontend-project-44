import readlineSync from 'readline-sync';
import brainGame from './cli.js';

function num() {
  const number = (Math.round(Math.random() * 100));
  return number;
}

export default function brainEven() {
  const name = brainGame();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const numsave = num();
    const quest = readlineSync.question(`${'Question: '}${numsave}${'\nYour answer: '}`);
    if ((numsave % 2 === 0 && quest === 'yes') || (numsave % 2 !== 0 && quest === 'no')) {
      console.log('Coorect!');
    } else {
      console.log(`${quest} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
