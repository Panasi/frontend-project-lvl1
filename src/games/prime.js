import gameEngine from '../index.js';
import { randomInt } from '../cli.js';

const primeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const primeQuestionAndAnswer = () => {
  const question = randomInt(1, 100);
  const correctAnswer = isPrime(question);
  return { question, correctAnswer };
};
const primeRun = () => {
  gameEngine(primeRules, primeQuestionAndAnswer);
};
export default primeRun;
