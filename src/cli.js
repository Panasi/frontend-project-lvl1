import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
};
export const randomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
};
export const isEven = (question) => {
  if (question % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
export default greetings;
