import readlineSync from 'readline-sync';

const gameEngine = (rules, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = questionAndAnswer();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      count += 1;
      console.log('Correct!');
    }
    if (playerAnswer !== correctAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default gameEngine;
