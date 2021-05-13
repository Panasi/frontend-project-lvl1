import gameEngine from '../index.js';
import { randomInt } from '../cli.js';

const calcRules = 'What is the result of the expression?';
const calcFunction = (num1, oper, num2) => {
  if (oper === '+') {
    return (num1 + num2);
  }
  if (oper === '-') {
    return (num1 - num2);
  }
  if (oper === '*') {
    return (num1 * num2);
  }
}
const calcQuestionAndAnswer = () => {
  const firstInt = randomInt(1, 100);
  const secondInt = randomInt(1, 100);
  const operand = ['+', '-', '*'][Math.floor(Math.random() * 3)];
  const question = `${firstInt} ${operand} ${secondInt}`;
  const correctAnswer = String(calcFunction(firstInt, operand, secondInt));
  return { question, correctAnswer };
};
const calcRun = () => {
  gameEngine(calcRules, calcQuestionAndAnswer);
};
export default calcRun;
