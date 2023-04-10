import readlineSync from 'readline-sync';
import brainGame from './cli.js';
import getRandomNumber from './random-number.js';

export default function gameLogics(rules, questionInGame, correctAnswer) {
    const name = brainGame();
    console.log(rules);
    for (let i = 0; i < 3; i += 1) {
        const quest = readlineSync.question(`${'Question: '}${questionInGame}${'\nYour answer: '}`);
        if (quest === correctAnswer) {
            console.log('Coorect!');
        } else {
            console.log(`${quest} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}
