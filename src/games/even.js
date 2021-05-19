import gameEngine from '../index.js';
import { randomInt, isEven } from '../cli.js';

const evenRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const evenQuestionAndAnswer = () => {
  const question = randomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};
const evenRun = () => {
  gameEngine(evenRules, evenQuestionAndAnswer);
};
export default evenRun;
