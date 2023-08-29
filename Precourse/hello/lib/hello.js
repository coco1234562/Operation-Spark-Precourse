const { Greeter } = require('./greeter');

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name`, (myName) => {
  const greeter = new Greeter(myName);
  console.log(greeter.greet());

  rl.close();
});