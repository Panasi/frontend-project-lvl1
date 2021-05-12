import gameEngine from '../index.js';
import { randomInt } from '../cli.js';

const gcdRules = 'Find the greatest common divisor of given numbers.';
const nod = (x, y) => {
  if (y > x) {
    return nod(y, x);
  }
  if (!y) {
    return x;
  }
  return nod(y, x % y);
};
const gcdQuestionAndAnswer = () => {
  const firstInt = randomInt(2, 100);
  const secondInt = randomInt(2, 100);
  const question = `${firstInt} ${secondInt}`;
  const correctAnswer = String(nod(firstInt, secondInt));
  return { question, correctAnswer };
};
const gcdRun = () => {
  gameEngine(gcdRules, gcdQuestionAndAnswer);
};
export default gcdRun;
