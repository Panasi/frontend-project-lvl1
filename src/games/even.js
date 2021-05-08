import readlineSync from 'readline-sync';

const evenRun = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandomInt = (min, max) => {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
  };
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomInt = getRandomInt(1, 100);
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    if (randomInt % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      count += 1;
    }
    if (randomInt % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      count += 1;
    }
    if (randomInt % 2 === 0 && answer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`);
      break;
    }
    if (randomInt % 2 !== 0 && answer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) {
    console.log('Congratulations, Bill!');
  }
};
export default evenRun;
