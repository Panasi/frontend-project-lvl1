import gameEngine from '../index.js';
import { randomInt } from '../cli.js';

const progressionRules = 'What number is missing in the progression?';
const progressionQuestionAndAnswer = () => {
  const intArray = [];
  const firstInt = randomInt(1, 10);
  const hiddenIntPosition = randomInt(0, 9);
  const diff = randomInt(1, 10);
  intArray.push(firstInt);
  for (let i = 1; i < 10; i += 1) {
    const lastIntPosition = intArray[i - 1];
    intArray.push(lastIntPosition + diff);
  }
  const correctAnswer = String(intArray[hiddenIntPosition]);
  intArray[hiddenIntPosition] = '..';
  const question = `${intArray}`;
  return { question, correctAnswer };
};
const progressionRun = () => {
  gameEngine(progressionRules, progressionQuestionAndAnswer);
};
export default progressionRun;
